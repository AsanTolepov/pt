import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { 
  collection, doc, setDoc, onSnapshot, updateDoc, 
  addDoc, getDoc, arrayUnion, increment 
} from 'firebase/firestore';
import { QUESTIONS } from './constants';
import { Question, Option } from './types';

// --- TYPE-LAR ---
type GameState = 'SETUP' | 'LOBBY' | 'QUESTION' | 'REVIEW' | 'LEADERBOARD';
type ShuffleMode = 'NONE' | 'QUESTIONS' | 'OPTIONS' | 'BOTH';

interface Player {
  id: string;
  name: string;
  score: number;
  currentAnswer: string | null; // Qaysi variantni tanladi
}

interface GameData {
  status: GameState;
  hostId: string;
  currentQuestionIndex: number;
  timePerQuestion: number;
  shuffleMode: ShuffleMode;
  questions: Question[]; // O'yin uchun tanlangan savollar
  players: Player[];
  timer: number; // Serverdagi vaqt
}

const App: React.FC = () => {
  // Global State
  const [mode, setMode] = useState<'HOME' | 'HOST' | 'PLAYER'>('HOME');
  const [gameId, setGameId] = useState('');
  const [myPlayerId, setMyPlayerId] = useState('');
  const [myName, setMyName] = useState('');
  
  // Game Data (Firebase dan keladi)
  const [game, setGame] = useState<GameData | null>(null);

  // Host Settings
  const [questionCount, setQuestionCount] = useState(10);
  const [timeLimit, setTimeLimit] = useState(20);
  const [shuffleSetting, setShuffleSetting] = useState<ShuffleMode>('BOTH');

  // --- 1. FIREBASE TINGLOVCHISI (REAL-TIME) ---
  useEffect(() => {
    if (!gameId) return;

    // O'yin ma'lumotlarini kuzatib turish
    const unsubscribe = onSnapshot(doc(db, 'games', gameId), (docSnap) => {
      if (docSnap.exists()) {
        setGame(docSnap.data() as GameData);
      } else {
        alert("Bunday o'yin topilmadi!");
        setMode('HOME');
        setGameId('');
      }
    });

    return () => unsubscribe();
  }, [gameId]);

  // --- 2. HOST LOGIKASI ---

  // O'yin yaratish va Sozlamalarni saqlash
  const createGame = async () => {
    const newGameId = Math.floor(100000 + Math.random() * 900000).toString();
    const playerId = 'host_' + Date.now();
    
    // Savollarni tayyorlash
    let selectedQuestions = [...QUESTIONS];
    
    // 1. Savollarni aralashtirish
    if (shuffleSetting === 'QUESTIONS' || shuffleSetting === 'BOTH') {
      selectedQuestions.sort(() => Math.random() - 0.5);
    }
    
    // Kerakli miqdorni olish
    selectedQuestions = selectedQuestions.slice(0, questionCount);

    // 2. Variantlarni aralashtirish
    if (shuffleSetting === 'OPTIONS' || shuffleSetting === 'BOTH') {
      selectedQuestions = selectedQuestions.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));
    }

    const initialGame: GameData = {
      status: 'LOBBY',
      hostId: playerId,
      currentQuestionIndex: 0,
      timePerQuestion: timeLimit,
      shuffleMode: shuffleSetting,
      questions: selectedQuestions,
      players: [],
      timer: timeLimit
    };

    await setDoc(doc(db, 'games', newGameId), initialGame);
    
    setGameId(newGameId);
    setMyPlayerId(playerId);
    setMode('HOST');
  };

  // O'yinni boshlash
  const startGame = async () => {
    await updateDoc(doc(db, 'games', gameId), { status: 'QUESTION', timer: timeLimit });
  };

  // Keyingi savolga o'tish
  const nextQuestion = async () => {
    if (!game) return;
    const nextIndex = game.currentQuestionIndex + 1;
    
    // Hamma o'yinchining javobini tozalash
    const resetPlayers = game.players.map(p => ({...p, currentAnswer: null}));

    if (nextIndex < game.questions.length) {
      await updateDoc(doc(db, 'games', gameId), {
        status: 'QUESTION',
        currentQuestionIndex: nextIndex,
        timer: timeLimit,
        players: resetPlayers
      });
    } else {
      await updateDoc(doc(db, 'games', gameId), { status: 'LEADERBOARD' });
    }
  };

  // Natijalarni ko'rsatish (Review)
  const showResults = async () => {
    // Ballarni hisoblash
    if(!game) return;
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
  };

  // --- 3. PLAYER LOGIKASI ---

  const joinGame = async () => {
    if (!gameId || !myName) return alert("Kod va Ism kiriting!");
    
    const docRef = doc(db, 'games', gameId);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const newPlayer: Player = {
        id: 'p_' + Date.now(),
        name: myName,
        score: 0,
        currentAnswer: null
      };
      
      // O'yinchini qo'shish
      const currentPlayers = snap.data().players || [];
      await updateDoc(docRef, {
        players: [...currentPlayers, newPlayer]
      });

      setMyPlayerId(newPlayer.id);
      setMode('PLAYER');
    } else {
      alert("O'yin topilmadi");
    }
  };

  const submitAnswer = async (optionId: string) => {
    if (!game) return;
    
    // Lokalda javobni yangilaymiz (tezkor ko'rinish uchun)
    // Serverga yuborish
    const updatedPlayers = game.players.map(p => 
      p.id === myPlayerId ? { ...p, currentAnswer: optionId } : p
    );
    
    await updateDoc(doc(db, 'games', gameId), { players: updatedPlayers });
  };

  // --- 4. RENDER QISMI (UI) ---

  // A. HOME SCREEN
  if (mode === 'HOME') {
    return (
      <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-indigo-700">Canli Test O'yini</h1>
          
          {/* O'YIN YARATISH BO'LIMI */}
          <div className="border-b pb-6">
            <h2 className="font-bold text-gray-700 mb-4">O'yin Yaratish (Host)</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Savollar soni</label>
                <input type="number" value={questionCount} onChange={e=>setQuestionCount(Number(e.target.value))} className="w-full p-2 border rounded"/>
              </div>
              <div>
                <label className="text-sm text-gray-500">Vaqt (sekund)</label>
                <input type="number" value={timeLimit} onChange={e=>setTimeLimit(Number(e.target.value))} className="w-full p-2 border rounded"/>
              </div>
              <div>
                <label className="text-sm text-gray-500">Aralashtirish</label>
                <select value={shuffleSetting} onChange={(e:any)=>setShuffleSetting(e.target.value)} className="w-full p-2 border rounded">
                  <option value="NONE">Aralashtirish yo'q</option>
                  <option value="QUESTIONS">Faqat Savollar</option>
                  <option value="OPTIONS">Faqat Variantlar</option>
                  <option value="BOTH">Hammasi (Savol va Variant)</option>
                </select>
              </div>
              <button onClick={createGame} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700">
                O'yin yaratish
              </button>
            </div>
          </div>

          {/* O'YINGA KIRISH BO'LIMI */}
          <div>
            <h2 className="font-bold text-gray-700 mb-4">O'yinga Kirish</h2>
            <input 
              type="text" placeholder="Ismingiz" 
              className="w-full p-3 border rounded-lg mb-2"
              value={myName} onChange={e => setMyName(e.target.value)}
            />
            <input 
              type="number" placeholder="O'yin Kodi (Game ID)" 
              className="w-full p-3 border rounded-lg mb-4"
              value={gameId} onChange={e => setGameId(e.target.value)}
            />
            <button onClick={joinGame} className="w-full py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700">
              Kirish
            </button>
          </div>
        </div>
      </div>
    );
  }

  // AGAR O'YIN MA'LUMOTI BO'LMASA KUTIB TURAMIZ
  if (!game) return <div className="text-center p-10">Yuklanmoqda...</div>;

  const currentQ = game.questions[game.currentQuestionIndex];
  const isHost = mode === 'HOST';
  const myPlayer = game.players.find(p => p.id === myPlayerId);

  // B. LOBBY (KUTISH ZALI)
  if (game.status === 'LOBBY') {
    return (
      <div className="min-h-screen bg-indigo-600 flex flex-col items-center justify-center p-4 text-white">
        <h1 className="text-4xl font-bold mb-2">KOD: {gameId}</h1>
        <p className="mb-8 opacity-80">Do'stlaringiz shu kod bilan kirsin</p>
        
        <div className="bg-white/10 p-6 rounded-xl w-full max-w-2xl mb-8">
          <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
            Qatnashchilar ({game.players.length})
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {game.players.map(p => (
              <div key={p.id} className="bg-white/20 p-3 rounded-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                {p.name}
              </div>
            ))}
          </div>
        </div>

        {isHost ? (
          <button onClick={startGame} className="px-10 py-4 bg-white text-indigo-600 rounded-full font-bold text-xl hover:scale-105 transition">
            O'YINNI BOSHLASH 🚀
          </button>
        ) : (
          <div className="text-xl animate-pulse">Host o'yinni boshlashini kuting...</div>
        )}
      </div>
    );
  }

  // C. QUESTION (SAVOL JARAYONI)
  if (game.status === 'QUESTION') {
    const answeredCount = game.players.filter(p => p.currentAnswer).length;
    const totalPlayers = game.players.length;

    return (
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
        {/* Header */}
        <div className="w-full max-w-4xl flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm">
          <div className="text-gray-500 font-bold">Savol {game.currentQuestionIndex + 1} / {game.questions.length}</div>
          {isHost && (
             <div className="text-indigo-600 font-bold">Javob berdi: {answeredCount} / {totalPlayers}</div>
          )}
        </div>

        {/* Savol Matni */}
        <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-md mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{currentQ.text}</h2>
        </div>

        {/* Variantlar */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {currentQ.options.map(opt => {
            const isSelected = myPlayer?.currentAnswer === opt.id;
            return (
              <button
                key={opt.id}
                disabled={isHost || !!myPlayer?.currentAnswer} // Host yoki javob berganlar bosolmaydi
                onClick={() => submitAnswer(opt.id)}
                className={`p-6 rounded-xl text-left border-2 transition-all transform 
                  ${isSelected ? 'bg-indigo-100 border-indigo-500 ring-2 ring-indigo-300' : 'bg-white border-gray-200 hover:border-indigo-300'}
                  ${isHost ? 'opacity-100' : ''}
                `}
              >
                <span className="font-bold mr-2 text-indigo-600">{opt.id.toUpperCase()})</span>
                {opt.text}
              </button>
            )
          })}
        </div>

        {/* Host Controls */}
        {isHost && (
          <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t flex justify-center gap-4">
            <button 
              onClick={showResults}
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700"
            >
              Javoblarni Ko'rsatish 🛑
            </button>
          </div>
        )}

        {/* Player Waiting Message */}
        {!isHost && myPlayer?.currentAnswer && (
          <div className="text-center text-gray-500 animate-pulse">
            Boshqalar javob berishini kuting...
          </div>
        )}
      </div>
    );
  }

  // D. REVIEW (JAVOBLARNI TEKSHIRISH)
  if (game.status === 'REVIEW') {
    const correctOption = currentQ.options.find(o => o.isCorrect);

    return (
      <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Natijalar</h1>
        
        <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg mb-6">
          <h2 className="text-xl mb-4 text-center">{currentQ.text}</h2>
          <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 font-bold text-center">
            To'g'ri Javob: {correctOption?.text}
          </div>
        </div>

        {/* Kim nima belgiladi - CHART */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            {game.players.map(p => {
              const pAnswer = currentQ.options.find(o => o.id === p.currentAnswer);
              const isCorrect = p.currentAnswer === correctOption?.id;
              
              return (
                <div key={p.id} className={`p-4 rounded-lg flex justify-between items-center border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                   <div>
                     <span className="font-bold block">{p.name}</span>
                     <span className="text-sm text-gray-500">
                       {p.currentAnswer ? `${p.currentAnswer}) ${pAnswer?.text?.substring(0, 30)}...` : "Javob bermadi"}
                     </span>
                   </div>
                   <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                </div>
              )
            })}
        </div>

        {isHost && (
          <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t flex justify-center">
            <button 
              onClick={nextQuestion}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
            >
              Keyingi Savol ➡️
            </button>
          </div>
        )}
      </div>
    );
  }

  // E. LEADERBOARD (REYTING)
  if (game.status === 'LEADERBOARD') {
    const sortedPlayers = [...game.players].sort((a, b) => b.score - a.score);

    return (
      <div className="min-h-screen bg-indigo-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold mb-2">O'YIN TUGADI! 🏆</h1>
        <p className="mb-10 text-indigo-200">Yakuniy natijalar</p>

        <div className="w-full max-w-md space-y-4">
          {sortedPlayers.map((p, index) => (
            <div 
              key={p.id}
              className={`flex items-center justify-between p-5 rounded-xl text-gray-900 shadow-xl transform transition hover:scale-105
                ${index === 0 ? 'bg-yellow-400 border-4 border-yellow-200' : 
                  index === 1 ? 'bg-gray-300' : 
                  index === 2 ? 'bg-orange-300' : 'bg-white'}
              `}
            >
              <div className="flex items-center gap-4">
                <span className="font-bold text-xl w-8">{index + 1}.</span>
                <span className="font-bold text-lg">{p.name}</span>
              </div>
              <span className="font-bold text-2xl">{p.score} ball</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="mt-10 px-8 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white font-medium"
        >
          Menyuga qaytish
        </button>
      </div>
    );
  }

  return <div>Yuklanmoqda...</div>;
};

export default App;