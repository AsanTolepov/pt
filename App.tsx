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
  const [myPlayerId, setMyPlayerId] = useState('');
  const [myName, setMyName] = useState('');
  
  const [game, setGame] = useState<GameData | null>(null);
  
  // YANGI: O'yinchilar ro'yxatini ko'rsatish/yashirish
  const [showPlayerList, setShowPlayerList] = useState(false);

  // Sozlamalar
  const [qCount, setQCount] = useState(15);
  const [timeLimit, setTimeLimit] = useState(20);
  const [shuffleMode, setShuffleMode] = useState<ShuffleMode>('BOTH');

  // Search
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
      } else {
        alert("O'yin yakunlandi.");
        setMode('HOME');
        setGameId('');
      }
    });

    return () => unsubscribe();
  }, [gameId, mode]);

  // --- 2. HOST TIMER LOGIKASI ---
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


  // --- HOST FUNKSIYALARI ---

  const createGame = async () => {
    if (!myName.trim()) return alert("Ism kiriting!");

    const newGameId = Math.floor(100000 + Math.random() * 900000).toString();
    const hostPlayerId = 'host_' + Date.now();

    let selectedQuestions = [...QUESTIONS];
    if (shuffleMode === 'QUESTIONS' || shuffleMode === 'BOTH') {
      selectedQuestions.sort(() => Math.random() - 0.5);
    }
    selectedQuestions = selectedQuestions.slice(0, Math.min(qCount, QUESTIONS.length));

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
      alert("Firebase xatosi.");
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
    if (!gameId || !myName.trim()) return alert("Ma'lumotlar to'liq emas!");

    const gameRef = doc(db, 'games', gameId);
    const snap = await getDoc(gameRef);

    if (snap.exists()) {
      const data = snap.data() as GameData;
      if (data.status !== 'LOBBY') return alert("O'yin boshlanib bo'lgan!");

      const newPlayerId = 'p_' + Date.now();
      const newPlayer: Player = {
        id: newPlayerId,
        name: myName,
        score: 0,
        currentAnswer: null
      };

      await updateDoc(gameRef, { players: [...data.players, newPlayer] });
      setMyPlayerId(newPlayerId);
      setMode('LOBBY');
    } else {
      alert("O'yin topilmadi!");
    }
  };

  const submitAnswer = async (optId: string) => {
    if (!game) return;
    const updatedPlayers = game.players.map(p => 
      p.id === myPlayerId ? { ...p, currentAnswer: optId } : p
    );
    await updateDoc(doc(db, 'games', gameId), { players: updatedPlayers });
  };

  // --- RENDER ---

  if (mode === 'HOME') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Bilimlar Bellashuvi</h1>
          <button onClick={() => setMode('SEARCH')} className="w-full py-3 bg-gray-100 rounded-xl font-bold">🔍 Savollar</button>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setMode('HOST_SETUP')} className="py-4 bg-blue-600 text-white rounded-xl font-bold">Yaratish</button>
            <button onClick={() => { setGameId(''); setMode('JOIN_SETUP'); }} className="py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold">Kirish</button>
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
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm font-bold">Savol Soni</label><input type="number" className="w-full p-3 border rounded-lg" value={qCount} onChange={e => setQCount(Number(e.target.value))} /></div>
            <div><label className="text-sm font-bold">Vaqt (sek)</label><input type="number" className="w-full p-3 border rounded-lg" value={timeLimit} onChange={e => setTimeLimit(Number(e.target.value))} /></div>
          </div>
          <select className="w-full p-3 border rounded-lg" value={shuffleMode} onChange={(e: any) => setShuffleMode(e.target.value)}>
            <option value="NONE">Aralashmasin</option>
            <option value="BOTH">Hammasi Aralashsin</option>
          </select>
          <div className="flex gap-3">
            <button onClick={() => setMode('HOME')} className="flex-1 py-3 bg-gray-100 font-bold">Bekor</button>
            <button onClick={createGame} className="flex-[2] py-3 bg-blue-600 text-white font-bold rounded-lg">Yaratish</button>
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
          <input type="text" placeholder="Ism..." className="w-full p-3 border rounded-lg" value={myName} onChange={e => setMyName(e.target.value)} />
          <input type="number" placeholder="Kod..." className="w-full p-3 border rounded-lg text-center font-mono" value={gameId} onChange={e => setGameId(e.target.value)} />
          <div className="flex gap-3">
            <button onClick={() => setMode('HOME')} className="flex-1 py-3 bg-gray-100 font-bold">Ortga</button>
            <button onClick={joinGame} className="flex-[2] py-3 bg-green-600 text-white font-bold rounded-lg">Kirish</button>
          </div>
        </div>
      </div>
    );
  }

  if (!game) return <div className="p-10 text-center">Yuklanmoqda...</div>;
  const isHost = myPlayerId === game.hostId;

  if (mode === 'LOBBY') {
    return (
      <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-4 text-white">
        <div className="bg-white p-8 rounded-2xl text-center w-full max-w-md text-gray-800">
          <p className="text-sm font-bold uppercase text-gray-500">Kod</p>
          <div className="text-5xl font-mono font-bold text-blue-600 mb-6">{gameId}</div>
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            {game.players.map(p => (
              <span key={p.id} className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-bold border">
                {p.name} {p.id === game.hostId ? '👑' : ''}
              </span>
            ))}
          </div>
          {isHost ? (
            <button onClick={startGame} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">Boshlash 🚀</button>
          ) : (
            <div className="text-gray-400 animate-pulse">Host boshlashini kuting...</div>
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
              <div key={p.id} className={`flex justify-between p-4 rounded-xl items-center ${i===0?'bg-yellow-400 font-bold': 'bg-white'}`}>
                <span>{i+1}. {p.name}</span>
                <span>{p.score} ball</span>
              </div>
            ))}
            <button onClick={() => window.location.reload()} className="w-full py-3 bg-white/20 text-white rounded-xl mt-6">Chiqish</button>
          </div>
        </div>
      );
    }

    const currentQ = game.questions[game.currentQuestionIndex];
    const myPlayer = game.players.find(p => p.id === myPlayerId);
    
    let timerColor = 'bg-blue-600';
    if (game.timer <= 10) timerColor = 'bg-orange-500';
    if (game.timer <= 5) timerColor = 'bg-red-600';

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col relative">
        
        {/* MODAL: O'YINCHILAR RO'YXATI */}
        {showPlayerList && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowPlayerList(false)}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold text-lg">O'yinchilar ({game.players.length})</h3>
                <button onClick={() => setShowPlayerList(false)} className="bg-white/20 hover:bg-white/40 rounded-full w-8 h-8 flex items-center justify-center">✕</button>
              </div>
              <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
                {[...game.players].sort((a, b) => b.score - a.score).map((p, index) => (
                  <div key={p.id} className={`flex justify-between items-center p-3 rounded-lg ${p.id === myPlayerId ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-2">
                       <span className="font-mono text-gray-400 text-sm">#{index + 1}</span>
                       <span className="font-medium text-gray-800">
                         {p.name}
                         {p.id === game.hostId && " 👑"}
                         {p.id === myPlayerId && " (Siz)"}
                       </span>
                    </div>
                    <span className="font-bold text-blue-600">{p.score} ball</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* HEADER */}
        <div className="bg-white p-4 shadow-sm sticky top-0 z-10">
           <div className="flex justify-between items-center mb-2">
             <span className="font-bold text-gray-700 text-sm md:text-base">Savol {game.currentQuestionIndex + 1}/{game.questions.length}</span>
             
             <div className="flex items-center gap-3">
               {/* Vaqt */}
               {game.status === 'QUESTION' && (
                 <span className={`font-mono font-bold text-xl ${game.timer <= 5 ? 'text-red-600 animate-pulse' : 'text-blue-600'}`}>
                   ⏱ {game.timer}
                 </span>
               )}
               
               {/* YANGI: Odamchalar Tugmasi */}
               <button 
                 onClick={() => setShowPlayerList(true)}
                 className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm font-medium transition"
               >
                 <span>👥</span>
                 <span>{game.players.length}</span>
               </button>
             </div>
           </div>

           {/* Progress Bar */}
           {game.status === 'QUESTION' && (
             <div className="w-full bg-gray-200 rounded-full h-2">
               <div 
                 className={`h-2 rounded-full transition-all duration-1000 ease-linear ${timerColor}`} 
                 style={{ width: `${(game.timer / game.timePerQuestion) * 100}%` }}
               ></div>
             </div>
           )}
        </div>

        <div className="container mx-auto px-4 mt-6 max-w-2xl flex-1 pb-20">
          <div className="bg-white p-6 rounded-2xl shadow-md mb-6 text-center">
            <h1 className="text-xl font-medium text-gray-800">{currentQ.text}</h1>
          </div>

          <div className="space-y-3">
             {currentQ.options.map(opt => {
               const isSelected = myPlayer?.currentAnswer === opt.id;
               const showResult = game.status === 'REVIEW';
               const isCorrect = opt.isCorrect;
               
               let btnClass = "bg-white border-gray-200 text-gray-600 hover:border-blue-300";
               
               if (showResult) {
                 if (isCorrect) btnClass = "bg-green-100 border-green-500 text-green-900 ring-1 ring-green-500 font-bold";
                 else if (isSelected && !isCorrect) btnClass = "bg-red-100 border-red-500 text-red-900";
                 else btnClass = "opacity-50 grayscale";
               } else {
                 if (isSelected) btnClass = "bg-blue-600 text-white border-blue-600 shadow-lg transform scale-[1.02]";
               }

               return (
                 <button
                   key={opt.id}
                   disabled={!!myPlayer?.currentAnswer && !showResult} 
                   onClick={() => submitAnswer(opt.id)}
                   className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3 ${btnClass}`}
                 >
                   <span className="font-bold uppercase opacity-70">{opt.id})</span>
                   <span className="font-medium">{opt.text}</span>
                   {showResult && isCorrect && <span className="ml-auto text-xl">✅</span>}
                   {showResult && isSelected && !isCorrect && <span className="ml-auto text-xl">❌</span>}
                 </button>
               );
             })}
          </div>

          {game.status === 'QUESTION' && myPlayer?.currentAnswer && (
             <div className="mt-8 text-center text-gray-400 animate-pulse">
               Vaqt tugashini kuting... ⏳
             </div>
          )}

          {isHost && (
            <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg border-t flex justify-center z-40">
               {game.status === 'QUESTION' ? (
                 <button onClick={() => handlePhaseChange(true)} className="px-6 py-2 bg-red-100 text-red-600 rounded-lg font-bold text-sm">
                   Vaqtni to'xtatish ⏹
                 </button>
               ) : (
                 <button onClick={() => handlePhaseChange()} className="px-10 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 animate-bounce">
                   Keyingi Savol ➡️
                 </button>
               )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div>Xatolik.</div>;
};

export default App;