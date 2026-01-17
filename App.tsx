import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { 
  doc, setDoc, onSnapshot, updateDoc, getDoc 
} from 'firebase/firestore';
import { QUESTIONS } from './constants';
import { Question } from './types';
import ActiveTestCard from './components/ActiveTestCard'; // Agar bu fayl bo'lmasa, pastdagi kod ishlayveradi

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
  questions: Question[];
  players: Player[];
  timer: number;
}

const App: React.FC = () => {
  // --- STATE ---
  const [mode, setMode] = useState<AppMode>('HOME');
  const [gameId, setGameId] = useState('');
  const [myPlayerId, setMyPlayerId] = useState('');
  const [myName, setMyName] = useState('');
  
  // O'yin ma'lumotlari (Firebase)
  const [game, setGame] = useState<GameData | null>(null);

  // Sozlamalar (Faqat HOST uchun)
  const [qCount, setQCount] = useState(15);
  const [timeLimit, setTimeLimit] = useState(20);
  const [shuffleMode, setShuffleMode] = useState<ShuffleMode>('BOTH');

  // Search uchun
  const [searchTerm, setSearchTerm] = useState('');

  // --- FIREBASE TINGLOVCHISI ---
  useEffect(() => {
    if (!gameId) return;

    const unsubscribe = onSnapshot(doc(db, 'games', gameId), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as GameData;
        setGame(data);
        
        // Agar o'yin boshlansa, avtomatik o'yin rejimiga o'tish
        if (mode === 'LOBBY' && data.status !== 'LOBBY') {
          setMode('GAME');
        }
      } else {
        alert("O'yin yakunlandi yoki o'chirildi.");
        setMode('HOME');
        setGameId('');
      }
    });

    return () => unsubscribe();
  }, [gameId, mode]);

  // --- HOST LOGIKASI ---

  const createGame = async () => {
    if (!myName.trim()) {
      alert("Iltimos, ismingizni kiriting!");
      return;
    }

    const newGameId = Math.floor(100000 + Math.random() * 900000).toString();
    const hostPlayerId = 'host_' + Date.now();

    // Savollarni tayyorlash
    let selectedQuestions = [...QUESTIONS];
    
    // 1. Savollarni aralashtirish
    if (shuffleMode === 'QUESTIONS' || shuffleMode === 'BOTH') {
      selectedQuestions.sort(() => Math.random() - 0.5);
    }
    
    // Soni bo'yicha kesish
    selectedQuestions = selectedQuestions.slice(0, Math.min(qCount, QUESTIONS.length));

    // 2. Variantlarni aralashtirish
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
      questions: selectedQuestions,
      players: [hostPlayer],
      timer: timeLimit
    };

    try {
      await setDoc(doc(db, 'games', newGameId), initialGame);
      setGameId(newGameId);
      setMyPlayerId(hostPlayerId);
      setMode('LOBBY');
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Internet bilan aloqa yo'q yoki Firebase xatosi.");
    }
  };

  const startGame = async () => {
    if (!gameId) return;
    await updateDoc(doc(db, 'games', gameId), { status: 'QUESTION' });
  };

  const nextPhase = async () => {
    if (!game) return;

    if (game.status === 'QUESTION') {
      // Review ga o'tish va ballarni hisoblash
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
      // Keyingi savolga yoki natijaga o'tish
      const nextIndex = game.currentQuestionIndex + 1;
      const resetPlayers = game.players.map(p => ({ ...p, currentAnswer: null }));

      if (nextIndex < game.questions.length) {
        await updateDoc(doc(db, 'games', gameId), {
          status: 'QUESTION',
          currentQuestionIndex: nextIndex,
          players: resetPlayers
        });
      } else {
        await updateDoc(doc(db, 'games', gameId), { status: 'LEADERBOARD' });
      }
    }
  };

  // --- PLAYER LOGIKASI ---

  const joinGame = async () => {
    if (!gameId || !myName.trim()) {
      alert("Kod va Ism kiritish shart!");
      return;
    }

    const gameRef = doc(db, 'games', gameId);
    const snap = await getDoc(gameRef);

    if (snap.exists()) {
      const data = snap.data() as GameData;
      if (data.status !== 'LOBBY') {
        alert("O'yin allaqachon boshlangan!");
        return;
      }

      const newPlayerId = 'p_' + Date.now();
      const newPlayer: Player = {
        id: newPlayerId,
        name: myName,
        score: 0,
        currentAnswer: null
      };

      const updatedPlayers = [...data.players, newPlayer];
      await updateDoc(gameRef, { players: updatedPlayers });

      setMyPlayerId(newPlayerId);
      setMode('LOBBY');
    } else {
      alert("Bunday kodli o'yin topilmadi!");
    }
  };

  const submitAnswer = async (optId: string) => {
    if (!game) return;
    // Faqat o'zimning javobimni yangilayman
    const updatedPlayers = game.players.map(p => 
      p.id === myPlayerId ? { ...p, currentAnswer: optId } : p
    );
    await updateDoc(doc(db, 'games', gameId), { players: updatedPlayers });
  };

  // --- RENDER QISMLARI ---

  // 1. HOME SCREEN (Toza dizayn)
  if (mode === 'HOME') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-3xl">
            🎓
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Bilimlar Bellashuvi</h1>
          <p className="text-gray-500">Do'stlar bilan real vaqtda test yeching</p>

          <button 
            onClick={() => setMode('SEARCH')}
            className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition flex justify-center gap-2"
          >
            🔍 Savollarni ko'rish
          </button>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button 
              onClick={() => setMode('HOST_SETUP')}
              className="py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
            >
              Test Yaratish
            </button>
            <button 
              onClick={() => { setGameId(''); setMode('JOIN_SETUP'); }}
              className="py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition"
            >
              Qatnashish
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. SEARCH (Qidiruv)
  if (mode === 'SEARCH') {
    const filtered = QUESTIONS.filter(q => q.text.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
      <div className="min-h-screen bg-gray-50 pb-10">
        <header className="sticky top-0 bg-white border-b z-50 p-4 shadow-sm">
          <div className="container mx-auto max-w-2xl flex gap-3">
             <button onClick={() => setMode('HOME')} className="p-2 bg-gray-100 rounded-lg">←</button>
             <input 
               type="text" placeholder="Qidiruv..." 
               className="flex-1 p-2 bg-gray-100 rounded-lg outline-none"
               value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
             />
          </div>
        </header>
        <main className="container mx-auto px-4 mt-6 max-w-2xl space-y-4">
          {filtered.map(q => (
             <div key={q.id} className="bg-white p-4 rounded-lg shadow-sm border">
               <p className="font-bold text-gray-800 mb-2">{q.id}. {q.text}</p>
               {q.options.map(o => (
                 <div key={o.id} className={`p-2 text-sm border-b ${o.isCorrect ? 'text-green-600 font-bold' : 'text-gray-500'}`}>
                   {o.id}) {o.text}
                 </div>
               ))}
             </div>
          ))}
        </main>
      </div>
    );
  }

  // 3. HOST SETUP (Sozlamalar oynasi)
  if (mode === 'HOST_SETUP') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">O'yin Sozlamalari</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-600">Sizning Ismingiz</label>
              <input 
                type="text" 
                value={myName} onChange={e => setMyName(e.target.value)}
                className="w-full p-3 bg-gray-50 border rounded-lg mt-1 outline-blue-500"
                placeholder="Ismingizni kiriting..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-gray-600">Savollar Soni</label>
                <input 
                  type="number" 
                  value={qCount} onChange={e => setQCount(Number(e.target.value))}
                  min={1} max={QUESTIONS.length}
                  className="w-full p-3 bg-gray-50 border rounded-lg mt-1 outline-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-600">Vaqt (sekund)</label>
                <input 
                  type="number" 
                  value={timeLimit} onChange={e => setTimeLimit(Number(e.target.value))}
                  className="w-full p-3 bg-gray-50 border rounded-lg mt-1 outline-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-600">Aralashtirish</label>
              <select 
                value={shuffleMode} 
                onChange={(e: any) => setShuffleMode(e.target.value)}
                className="w-full p-3 bg-gray-50 border rounded-lg mt-1 outline-blue-500"
              >
                <option value="NONE">Aralashmasin</option>
                <option value="QUESTIONS">Faqat Savollar</option>
                <option value="OPTIONS">Faqat Variantlar</option>
                <option value="BOTH">Hammasi Aralashsin</option>
              </select>
            </div>

            <div className="pt-4 flex gap-3">
              <button onClick={() => setMode('HOME')} className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold">Bekor qilish</button>
              <button onClick={createGame} className="flex-[2] py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700">
                Yaratish va Kod olish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. JOIN SETUP (Kirish oynasi)
  if (mode === 'JOIN_SETUP') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">O'yinga Kirish</h2>
          <div className="space-y-4">
             <input 
               type="text" placeholder="Ismingiz..."
               className="w-full p-3 border rounded-lg bg-gray-50 outline-blue-500"
               value={myName} onChange={e => setMyName(e.target.value)}
             />
             <input 
               type="number" placeholder="O'yin Kodi (Masalan: 123456)"
               className="w-full p-3 border rounded-lg bg-gray-50 outline-blue-500 text-center font-mono text-lg"
               value={gameId} onChange={e => setGameId(e.target.value)}
             />
             <div className="pt-4 flex gap-3">
                <button onClick={() => setMode('HOME')} className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold">Ortga</button>
                <button onClick={joinGame} className="flex-[2] py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700">
                  Kirish
                </button>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // Agar o'yin ma'lumoti yuklanmagan bo'lsa
  if (!game) return <div className="min-h-screen flex items-center justify-center">Yuklanmoqda...</div>;

  const isHost = myPlayerId === game.hostId;
  const currentQ = game.questions[game.currentQuestionIndex];
  const myPlayer = game.players.find(p => p.id === myPlayerId);

  // 5. LOBBY (Kutish zali)
  if (mode === 'LOBBY') {
    return (
      <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-4 text-white">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
          <p className="text-gray-500 text-sm font-bold uppercase mb-2">Ulanish Kodi</p>
          <div className="text-5xl font-mono font-bold text-blue-600 tracking-widest mb-8 border-b-2 border-blue-100 pb-4">
            {gameId}
          </div>

          <div className="text-left mb-8">
            <h3 className="text-gray-800 font-bold mb-3 flex justify-between items-center">
              <span>Qatnashchilar:</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">{game.players.length} ta</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {game.players.map(p => (
                <span key={p.id} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium border">
                  {p.name} {p.id === game.hostId ? '👑' : ''}
                </span>
              ))}
            </div>
          </div>

          {isHost ? (
            <button 
              onClick={startGame}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg transition transform hover:scale-105"
            >
              Testni Boshlash 🚀
            </button>
          ) : (
            <div className="text-gray-400 animate-pulse text-sm">
              Host o'yinni boshlashini kuting...
            </div>
          )}
          
          <button onClick={() => setMode('HOME')} className="mt-4 text-gray-400 text-sm hover:underline">Chiqish</button>
        </div>
      </div>
    );
  }

  // 6. GAME (O'yin jarayoni)
  if (mode === 'GAME') {
    // REYTING OYNASI
    if (game.status === 'LEADERBOARD') {
      const sorted = [...game.players].sort((a, b) => b.score - a.score);
      return (
        <div className="min-h-screen bg-indigo-900 flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full">
            <h1 className="text-4xl font-bold text-white text-center mb-8">Natijalar 🏆</h1>
            <div className="space-y-3">
              {sorted.map((p, i) => (
                <div key={p.id} className={`flex justify-between items-center p-4 rounded-xl shadow-lg ${
                  i === 0 ? 'bg-yellow-400 text-yellow-900 scale-105 font-bold border-4 border-white' : 
                  i === 1 ? 'bg-gray-300 text-gray-800' : 
                  i === 2 ? 'bg-orange-300 text-orange-900' : 'bg-white text-gray-700'
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-mono opacity-50">#{i + 1}</span>
                    <span>{p.name}</span>
                  </div>
                  <span className="text-xl">{p.score} ball</span>
                </div>
              ))}
            </div>
            <button 
               onClick={() => window.location.reload()}
               className="mt-8 w-full py-3 bg-white/20 text-white rounded-xl hover:bg-white/30"
            >
              Menyuga qaytish
            </button>
          </div>
        </div>
      );
    }

    // SAVOL VA REVIEW QISMI
    const total = game.questions.length;
    const answeredCount = game.players.filter(p => p.currentAnswer).length;

    return (
      <div className="min-h-screen bg-gray-100 pb-20">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm sticky top-0 z-10 flex justify-between items-center">
           <div>
             <h2 className="font-bold text-gray-800">Savol {game.currentQuestionIndex + 1} <span className="text-gray-400 font-normal">/ {total}</span></h2>
           </div>
           {isHost && (
             <div className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold">
               Javoblar: {answeredCount} / {game.players.length}
             </div>
           )}
        </div>

        <div className="container mx-auto px-4 mt-6 max-w-2xl">
          {/* Savol kartasi */}
          <div className="bg-white p-6 rounded-2xl shadow-md mb-6 text-center">
            <h1 className="text-xl font-medium text-gray-800">{currentQ.text}</h1>
          </div>

          {/* Variantlar */}
          <div className="space-y-3">
             {currentQ.options.map(opt => {
               const isSelected = myPlayer?.currentAnswer === opt.id;
               const showResult = game.status === 'REVIEW';
               const isCorrect = opt.isCorrect;
               
               let btnClass = "bg-white border-gray-200 text-gray-600 hover:border-blue-300"; // Default
               
               if (showResult) {
                 if (isCorrect) btnClass = "bg-green-100 border-green-500 text-green-900 ring-1 ring-green-500";
                 else if (isSelected && !isCorrect) btnClass = "bg-red-100 border-red-500 text-red-900";
                 else btnClass = "bg-gray-50 text-gray-400 opacity-60";
               } else {
                 if (isSelected) btnClass = "bg-blue-600 text-white border-blue-600 shadow-md transform scale-[1.02]";
               }

               return (
                 <button
                   key={opt.id}
                   disabled={!!myPlayer?.currentAnswer || isHost}
                   onClick={() => submitAnswer(opt.id)}
                   className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3 ${btnClass}`}
                 >
                   <span className="font-bold uppercase opacity-70">{opt.id})</span>
                   <span className="font-medium">{opt.text}</span>
                   {showResult && isCorrect && <span className="ml-auto text-green-600">✔</span>}
                 </button>
               );
             })}
          </div>
          
          {/* Host Boshqaruvi */}
          {isHost && (
            <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-center z-50">
               <button 
                 onClick={nextPhase}
                 className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all ${
                   game.status === 'QUESTION' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
                 }`}
               >
                 {game.status === 'QUESTION' ? 'Javoblarni Ko\'rsatish 🛑' : 'Keyingi Savol ➡️'}
               </button>
            </div>
          )}

          {/* Waiting Message */}
          {!isHost && myPlayer?.currentAnswer && game.status === 'QUESTION' && (
             <div className="mt-8 text-center text-gray-400 animate-pulse">
               Boshqalar javob berishini kuting...
             </div>
          )}
        </div>
      </div>
    );
  }

  return <div>Xatolik yuz berdi.</div>;
};

export default App;