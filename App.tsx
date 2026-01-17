import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import { 
  doc, setDoc, onSnapshot, updateDoc, getDoc 
} from 'firebase/firestore';
import { QUESTIONS } from './constants';
import { Question } from './types';

// --- TYPE-LAR ---
type AppMode = 'HOME' | 'SEARCH' | 'HOST_SETUP' | 'JOIN_SETUP' | 'LOBBY' | 'GAME';
type GameStatus = 'LOBBY' | 'QUESTION' | 'REVIEW' | 'LEADERBOARD';
type ShuffleMode = 'NONE' | 'QUESTIONS' | 'OPTIONS' | 'BOTH';

interface Player {
  id: string;
  name: string;
  score: number;
  currentAnswer: string | null;
}

interface GameData {
  status: GameStatus;
  hostId: string;
  currentQuestionIndex: number;
  timePerQuestion: number;
  timer: number;
  questions: Question[];
  players: Player[];
}

const App: React.FC = () => {
  // --- STATE ---
  const [mode, setMode] = useState<AppMode>('HOME');
  const [gameId, setGameId] = useState('');
  const [joinCode, setJoinCode] = useState(''); 
  const [isJoining, setIsJoining] = useState(false);

  const [myPlayerId, setMyPlayerId] = useState('');
  const [myName, setMyName] = useState('');
  
  const [game, setGame] = useState<GameData | null>(null);
  const [showPlayerList, setShowPlayerList] = useState(false);

  // --- SOZLAMALAR (YANGILANGAN) ---
  // Oraliqni tanlash uchun
  const [rangeStart, setRangeStart] = useState(1);
  const [rangeEnd, setRangeEnd] = useState(Math.min(30, QUESTIONS.length)); // Default 30 yoki boricha
  
  const [timeLimit, setTimeLimit] = useState(20);
  const [shuffleMode, setShuffleMode] = useState<ShuffleMode>('BOTH');

  // Review timer
  const [reviewTimer, setReviewTimer] = useState(5);

  const [searchTerm, setSearchTerm] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- 1. FIREBASE TINGLOVCHISI ---
  useEffect(() => {
    if (!gameId) return;

    const unsubscribe = onSnapshot(doc(db, 'games', gameId), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as GameData;
        setGame(data);
        if (mode === 'LOBBY' && data.status !== 'LOBBY') {
          setMode('GAME');
        }
        if (data.status === 'REVIEW') {
          setReviewTimer(5);
        }
      } else {
        alert("O'yin yakunlandi yoki topilmadi.");
        setMode('HOME');
        setGameId('');
        setGame(null);
      }
    });

    return () => unsubscribe();
  }, [gameId, mode]);

  // --- 2. HOST TIMER ---
  useEffect(() => {
    if (!game || game.hostId !== myPlayerId || game.status !== 'QUESTION') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(async () => {
      if (game.timer > 0) {
        await updateDoc(doc(db, 'games', gameId), { timer: game.timer - 1 });
      } else {
        clearInterval(timerRef.current!);
        handlePhaseChange(true); 
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [game?.timer, game?.status, game?.hostId, myPlayerId, gameId]);

  // --- 3. REVIEW TIMER ---
  useEffect(() => {
    if (!game || game.status !== 'REVIEW' || game.hostId !== myPlayerId) return;

    const reviewInterval = setInterval(() => {
      setReviewTimer((prev) => {
        if (prev <= 1) {
          clearInterval(reviewInterval);
          handlePhaseChange(); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(reviewInterval);
  }, [game?.status, game?.hostId, myPlayerId]);

  // --- 4. AVTO CHECK ---
  useEffect(() => {
    if (!game || !gameId || myPlayerId !== game.hostId) return;
    if (game.status === 'QUESTION') {
      const allPlayersAnswered = game.players.length > 0 && game.players.every(p => p.currentAnswer !== null);
      if (allPlayersAnswered) {
        handlePhaseChange(true);
      }
    }
  }, [game?.players, game?.status, gameId, myPlayerId]);

  // --- HOST FUNKSIYALARI ---

  const createGame = async () => {
    if (!myName.trim()) return alert("Ism kiriting!");
    
    // Validatsiya
    if (rangeStart < 1 || rangeEnd > QUESTIONS.length || rangeStart > rangeEnd) {
      return alert(`Oraliq xato! 1 dan ${QUESTIONS.length} gacha bo'lishi kerak.`);
    }

    setIsJoining(true);

    const newGameId = Math.floor(100000 + Math.random() * 900000).toString();
    const hostPlayerId = 'host_' + Date.now();

    // 1. Oraliqni kesib olish (Masalan 61-90)
    // Array 0-indexlanadi, shuning uchun start-1
    let selectedQuestions = QUESTIONS.slice(rangeStart - 1, rangeEnd);

    // 2. Savollarni aralashtirish (agar kerak bo'lsa)
    if (shuffleMode === 'QUESTIONS' || shuffleMode === 'BOTH') {
      selectedQuestions.sort(() => Math.random() - 0.5);
    }

    // 3. Variantlarni aralashtirish
    // Bu yerda ID o'zgarmaydi, faqat array ichidagi o'rni o'zgaradi
    if (shuffleMode === 'OPTIONS' || shuffleMode === 'BOTH') {
      selectedQuestions = selectedQuestions.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));
    }

    const hostPlayer: Player = {
      id: hostPlayerId,
      name: myName,
      score: 0,
      currentAnswer: null
    };

    const initialGame: GameData = {
      status: 'LOBBY',
      hostId: hostPlayerId,
      currentQuestionIndex: 0,
      timePerQuestion: timeLimit,
      timer: timeLimit,
      questions: selectedQuestions,
      players: [hostPlayer],
    };

    try {
      await setDoc(doc(db, 'games', newGameId), initialGame);
      setGameId(newGameId);
      setMyPlayerId(hostPlayerId);
      setMode('LOBBY');
    } catch (error) {
      alert("Xatolik: " + error);
    } finally {
      setIsJoining(false);
    }
  };

  const startGame = async () => {
    if (!gameId) return;
    await updateDoc(doc(db, 'games', gameId), { 
      status: 'QUESTION',
      timer: timeLimit 
    });
  };

  const handlePhaseChange = async (forceReview = false) => {
    if (!game) return;

    if (game.status === 'QUESTION' || forceReview) {
      const currentQ = game.questions[game.currentQuestionIndex];
      // To'g'ri javob ID sini topamiz
      const correctOpt = currentQ.options.find(o => o.isCorrect)?.id;

      const updatedPlayers = game.players.map(p => {
        if (p.currentAnswer === correctOpt) {
          return { ...p, score: p.score + 1 };
        }
        return p;
      });

      await updateDoc(doc(db, 'games', gameId), {
        status: 'REVIEW',
        players: updatedPlayers
      });

    } else if (game.status === 'REVIEW') {
      const nextIndex = game.currentQuestionIndex + 1;
      const resetPlayers = game.players.map(p => ({ ...p, currentAnswer: null }));

      if (nextIndex < game.questions.length) {
        await updateDoc(doc(db, 'games', gameId), {
          status: 'QUESTION',
          currentQuestionIndex: nextIndex,
          timer: game.timePerQuestion,
          players: resetPlayers
        });
      } else {
        await updateDoc(doc(db, 'games', gameId), { status: 'LEADERBOARD' });
      }
    }
  };

  // --- PLAYER FUNKSIYALARI ---

  const joinGame = async () => {
    if (isJoining) return;
    if (!joinCode || !myName.trim()) return alert("Kod va ism kiritilishi shart!");

    setIsJoining(true);

    try {
        const gameRef = doc(db, 'games', joinCode);
        const snap = await getDoc(gameRef);

        if (snap.exists()) {
            const data = snap.data() as GameData;
            if (data.status !== 'LOBBY') {
              setIsJoining(false);
              return alert("O'yin allaqachon boshlangan!");
            }

            const newPlayerId = 'p_' + Date.now() + Math.random().toString(36).substr(2, 5);
            const newPlayer: Player = {
                id: newPlayerId,
                name: myName,
                score: 0,
                currentAnswer: null
            };

            await updateDoc(gameRef, { players: [...data.players, newPlayer] });
            
            setGameId(joinCode);
            setMyPlayerId(newPlayerId);
            setMode('LOBBY');
        } else {
            alert("Bunday kodli o'yin topilmadi!");
        }
    } catch (e) {
        console.error(e);
        alert("Internet xatosi");
    } finally {
      setIsJoining(false);
    }
  };

  const submitAnswer = async (optId: string) => {
    if (!game) return;
    const updatedPlayers = game.players.map(p => 
      p.id === myPlayerId ? { ...p, currentAnswer: optId } : p
    );
    await updateDoc(doc(db, 'games', gameId), { players: updatedPlayers });
  };

  // --- YARDAMCHI FUNKSIYA: VISUAL LABEL ---
  // Index 0 -> A, Index 1 -> B, ...
  const getLabel = (index: number) => String.fromCharCode(65 + index);

  // --- RENDER ---

  if (mode === 'HOME') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Bilimlar Bellashuvi</h1>
          <button onClick={() => setMode('SEARCH')} className="w-full py-3 bg-gray-100 rounded-xl font-bold">🔍 Savollar</button>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setMode('HOST_SETUP')} className="py-4 bg-blue-600 text-white rounded-xl font-bold">Yaratish</button>
            <button onClick={() => { setJoinCode(''); setMode('JOIN_SETUP'); }} className="py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold">Kirish</button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'SEARCH') {
    const filtered = QUESTIONS.filter(q => q.text.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
      <div className="min-h-screen bg-gray-50 pb-10">
        <header className="sticky top-0 bg-white p-4 border-b z-10">
          <div className="container mx-auto max-w-2xl flex gap-3">
             <button onClick={() => setMode('HOME')} className="p-2 bg-gray-100 rounded-lg">←</button>
             <input type="text" placeholder="Qidiruv..." className="flex-1 p-2 bg-gray-100 rounded-lg outline-none" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
        </header>
        <main className="container mx-auto px-4 mt-6 max-w-2xl space-y-4">
          {filtered.map(q => (
             <div key={q.id} className="bg-white p-4 rounded-lg shadow-sm border">
               <p className="font-bold mb-2">{q.text}</p>
               {q.options.map(o => <div key={o.id} className={o.isCorrect ? 'text-green-600 font-bold' : ''}>{o.id}) {o.text}</div>)}
             </div>
          ))}
        </main>
      </div>
    );
  }

  if (mode === 'HOST_SETUP') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full space-y-4">
          <h2 className="text-xl font-bold text-center">Sozlamalar</h2>
          <input type="text" placeholder="Ismingiz..." className="w-full p-3 border rounded-lg" value={myName} onChange={e => setMyName(e.target.value)} />
          
          {/* YANGI: Savollar oralig'ini tanlash */}
          <div className="bg-gray-50 p-3 rounded-lg border">
             <p className="text-xs font-bold text-gray-500 mb-2 uppercase">Savollar Oralig'i (Jami: {QUESTIONS.length})</p>
             <div className="flex items-center gap-2">
                <div className='flex-1'>
                    <label className="text-xs">Boshlanish</label>
                    <input type="number" min={1} max={QUESTIONS.length} className="w-full p-2 border rounded" value={rangeStart} onChange={e => setRangeStart(Number(e.target.value))} />
                </div>
                <span className='mt-4'>-</span>
                <div className='flex-1'>
                    <label className="text-xs">Tugash</label>
                    <input type="number" min={1} max={QUESTIONS.length} className="w-full p-2 border rounded" value={rangeEnd} onChange={e => setRangeEnd(Number(e.target.value))} />
                </div>
             </div>
             <p className="text-xs text-blue-600 mt-1 font-medium">
                Tanlandi: {Math.max(0, rangeEnd - rangeStart + 1)} ta savol
             </p>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
                <label className="text-xs font-bold">Vaqt (sek)</label>
                <input type="number" className="w-full p-3 border rounded-lg" value={timeLimit} onChange={e => setTimeLimit(Number(e.target.value))} />
            </div>
            <div className="flex-[2]">
                <label className="text-xs font-bold">Aralashtirish</label>
                <select className="w-full p-3 border rounded-lg text-sm" value={shuffleMode} onChange={(e: any) => setShuffleMode(e.target.value)}>
                    <option value="NONE">Aralashmasin</option>
                    <option value="QUESTIONS">Savollar</option>
                    <option value="OPTIONS">Variantlar</option>
                    <option value="BOTH">Hammasi</option>
                </select>
            </div>
          </div>
          
          <div className="flex gap-3 pt-2">
            <button onClick={() => setMode('HOME')} className="flex-1 py-3 bg-gray-100 font-bold">Bekor</button>
            <button 
              onClick={createGame} 
              disabled={isJoining}
              className={`flex-[2] py-3 text-white font-bold rounded-lg ${isJoining ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600'}`}
            >
              {isJoining ? '...' : 'Yaratish'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'JOIN_SETUP') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full space-y-4">
          <h2 className="text-xl font-bold text-center">Kirish</h2>
          <input 
            type="text" 
            placeholder="Ism..." 
            className="w-full p-3 border rounded-lg" 
            value={myName} 
            onChange={e => setMyName(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Kod..." 
            className="w-full p-3 border rounded-lg text-center font-mono text-xl" 
            value={joinCode} 
            onChange={e => setJoinCode(e.target.value)} 
          />
          <div className="flex gap-3">
            <button onClick={() => setMode('HOME')} disabled={isJoining} className="flex-1 py-3 bg-gray-100 font-bold">Ortga</button>
            <button 
              onClick={joinGame} 
              disabled={isJoining} 
              className={`flex-[2] py-3 text-white font-bold rounded-lg transition-all ${
                isJoining ? 'bg-green-400 cursor-wait' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isJoining ? '...' : 'Kirish'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!game) return <div className="p-10 text-center text-xl">Yuklanmoqda... ⏳</div>;
  const isHost = myPlayerId === game.hostId;

  if (mode === 'LOBBY') {
    return (
      <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-4 text-white">
        <div className="bg-white p-8 rounded-2xl text-center w-full max-w-md text-gray-800">
          <p className="text-sm font-bold uppercase text-gray-500">O'yin Kodi</p>
          <div className="text-5xl font-mono font-bold text-blue-600 mb-6 tracking-widest">{gameId}</div>
          
          <div className="mb-6">
            <p className="font-bold mb-2">Ishtirokchilar ({game.players.length})</p>
            <div className="flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto">
              {game.players.map(p => (
                <span key={p.id} className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-bold border flex items-center gap-1">
                  {p.name} {p.id === game.hostId ? '👑' : ''}
                </span>
              ))}
            </div>
          </div>

          {isHost ? (
            <button onClick={startGame} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg transform active:scale-95 transition">Boshlash 🚀</button>
          ) : (
            <div className="text-gray-400 animate-pulse font-medium">Host o'yinni boshlashini kuting...</div>
          )}
        </div>
      </div>
    );
  }

  if (mode === 'GAME') {
    if (game.status === 'LEADERBOARD') {
      const sorted = [...game.players].sort((a, b) => b.score - a.score);
      return (
        <div className="min-h-screen bg-indigo-900 flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full space-y-3">
            <h1 className="text-3xl font-bold text-white text-center mb-6">Natijalar 🏆</h1>
            {sorted.map((p, i) => (
              <div key={p.id} className={`flex justify-between p-4 rounded-xl items-center shadow-lg ${i===0?'bg-yellow-400 font-bold text-yellow-900 ring-4 ring-yellow-200': 'bg-white'}`}>
                <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${i===0?'bg-white/30':'bg-gray-200'}`}>{i+1}</span>
                    <span>{p.name}</span>
                </div>
                <span className="text-xl">{p.score} ball</span>
              </div>
            ))}
            <button onClick={() => window.location.reload()} className="w-full py-3 bg-white/20 text-white rounded-xl mt-6 font-bold hover:bg-white/30">Chiqish</button>
          </div>
        </div>
      );
    }

    const currentQ = game.questions[game.currentQuestionIndex];
    const myPlayer = game.players.find(p => p.id === myPlayerId);
    
    const answeredCount = game.players.filter(p => p.currentAnswer !== null).length;
    const totalPlayers = game.players.length;

    let timerColor = 'bg-blue-600';
    if (game.timer <= 10) timerColor = 'bg-orange-500';
    if (game.timer <= 5) timerColor = 'bg-red-600';

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col relative">
        
        {/* MODAL: PLAYERS */}
        {showPlayerList && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowPlayerList(false)}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade-in-up" onClick={e => e.stopPropagation()}>
              <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold text-lg">O'yinchilar holati</h3>
                <button onClick={() => setShowPlayerList(false)} className="bg-white/20 hover:bg-white/40 rounded-full w-8 h-8 flex items-center justify-center">✕</button>
              </div>
              <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
                {[...game.players].sort((a, b) => b.score - a.score).map((p, index) => {
                  const hasAnswered = p.currentAnswer !== null;
                  return (
                    <div key={p.id} className={`flex justify-between items-center p-3 rounded-lg border ${p.id === myPlayerId ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-100'}`}>
                      <div className="flex items-center gap-2">
                         <span className="font-mono text-gray-400 text-sm">#{index + 1}</span>
                         <div className="flex flex-col">
                           <span className="font-medium text-gray-800 leading-tight">
                             {p.name}
                             {p.id === game.hostId && " 👑"}
                           </span>
                           {game.status === 'QUESTION' && (
                             <span className={`text-xs ${hasAnswered ? 'text-green-600' : 'text-gray-400'}`}>
                               {hasAnswered ? 'Javob berdi ✅' : 'O\'ylamoqda...'}
                             </span>
                           )}
                         </div>
                      </div>
                      <span className="font-bold text-blue-600">{p.score}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* HEADER */}
        <div className="bg-white px-4 py-3 shadow-sm sticky top-0 z-10 border-b">
           <div className="flex justify-between items-center mb-2">
             <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold uppercase">Savol</span>
                {/* 1, 2, 3 deb chiqadi (61-90 tanlansa ham 1 dan boshlanadi) */}
                <span className="font-bold text-gray-800 text-lg leading-none">{game.currentQuestionIndex + 1}<span className="text-gray-400 text-sm">/{game.questions.length}</span></span>
             </div>
             
             <div className="flex items-center gap-3">
               <button 
                 onClick={() => setShowPlayerList(true)}
                 className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold transition border ${
                    answeredCount === totalPlayers ? 'bg-green-100 text-green-700 border-green-200' : 'bg-gray-100 text-gray-600 border-gray-200'
                 }`}
               >
                 <span>👥</span>
                 <span>{answeredCount}/{totalPlayers}</span>
               </button>

               {game.status === 'QUESTION' && (
                 <div className={`font-mono font-bold text-xl min-w-[3ch] text-right ${game.timer <= 5 ? 'text-red-600 animate-pulse' : 'text-blue-600'}`}>
                   {game.timer}
                 </div>
               )}
             </div>
           </div>

           {game.status === 'QUESTION' && (
             <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
               <div 
                 className={`h-full transition-all duration-1000 ease-linear ${timerColor}`} 
                 style={{ width: `${(game.timer / game.timePerQuestion) * 100}%` }}
               ></div>
             </div>
           )}
        </div>

        <div className="container mx-auto px-4 mt-6 max-w-2xl flex-1 pb-24">
          <div className="bg-white p-6 rounded-2xl shadow-md mb-6 border-l-4 border-blue-500">
            <h1 className="text-lg md:text-xl font-medium text-gray-800 leading-snug">{currentQ.text}</h1>
          </div>

          <div className="space-y-3">
             {/* 
                Variantlarni ko'rsatish logikasi:
                Biz 'opt.id' ni yashiramiz va uning o'rniga loop index-dan foydalanib A, B, C, D harflarini yasaymiz.
             */}
             {currentQ.options.map((opt, index) => {
               const isSelected = myPlayer?.currentAnswer === opt.id;
               const showResult = game.status === 'REVIEW';
               const isCorrect = opt.isCorrect;
               
               // VISUAL LABEL: 0->A, 1->B, 2->C, 3->D
               const visualLabel = getLabel(index);
               
               let btnClass = "bg-white border-gray-200 text-gray-600 hover:border-blue-300 shadow-sm";
               
               if (showResult) {
                 if (isCorrect) btnClass = "bg-green-100 border-green-500 text-green-900 ring-1 ring-green-500 font-bold shadow-md";
                 else if (isSelected && !isCorrect) btnClass = "bg-red-100 border-red-500 text-red-900 opacity-80";
                 else btnClass = "opacity-40 grayscale border-transparent shadow-none";
               } else {
                 if (isSelected) btnClass = "bg-blue-600 text-white border-blue-600 shadow-lg transform scale-[1.01] ring-2 ring-blue-300";
               }

               return (
                 <button
                   key={opt.id}
                   disabled={!!myPlayer?.currentAnswer && !showResult} 
                   onClick={() => submitAnswer(opt.id)}
                   className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3 relative overflow-hidden ${btnClass}`}
                 >
                   {/* Bu yerda visualLabel (A, B, C...) ishlatilmoqda */}
                   <span className={`font-bold uppercase w-8 h-8 flex items-center justify-center rounded-lg text-sm ${showResult && isCorrect ? 'bg-green-200 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                      {visualLabel}
                   </span>
                   <span className="font-medium flex-1">{opt.text}</span>
                   {showResult && isCorrect && <span className="text-xl animate-bounce">✅</span>}
                   {showResult && isSelected && !isCorrect && <span className="text-xl">❌</span>}
                 </button>
               );
             })}
          </div>

          {game.status === 'QUESTION' && myPlayer?.currentAnswer && (
             <div className="mt-8 text-center bg-blue-50 p-4 rounded-xl border border-blue-100">
               <div className="text-blue-600 font-bold mb-1">Javob qabul qilindi! ✨</div>
               <div className="text-sm text-gray-500">Boshqalar javob berishini kuting...</div>
             </div>
          )}

          {game.status === 'REVIEW' && (
             <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-3 animate-bounce">
                <span>Keyingi savolga o'tilmoqda...</span>
                <div className="bg-white text-gray-800 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                   ⏳
                </div>
             </div>
          )}

          {isHost && game.status === 'QUESTION' && (
            <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t flex justify-center z-40">
                 <button onClick={() => handlePhaseChange(true)} className="w-full max-w-md px-6 py-3 bg-red-100 text-red-600 rounded-xl font-bold hover:bg-red-200 transition">
                   Vaqtni to'xtatish ⏹
                 </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div>Xatolik yuz berdi. Iltimos sahifani yangilang.</div>;
};

export default App;