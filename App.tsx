import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard';
import ActiveTestCard from './components/ActiveTestCard';
import { getQuestionsBySeed } from './utils';

type AppMode = 'menu' | 'search' | 'host' | 'join' | 'quiz' | 'result';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('menu');
  const [searchTerm, setSearchTerm] = useState('');

  // Test state-lari
  const [sessionCode, setSessionCode] = useState('');
  const [quizQuestions, setQuizQuestions] = useState<typeof QUESTIONS>([]);
  const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});
  
  // --- YANGI QOSHILGAN STATE-LAR ---
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Hozirgi savol raqami
  const [timeLeft, setTimeLeft] = useState(30); // Vaqt
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const TEST_LENGTH = 30; // 30 ta savol tushadi

  // --- QIDIRUV ---
  const filteredQuestions = useMemo(() => {
    if (mode !== 'search') return [];
    return QUESTIONS.filter(q => 
      q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.options.some(opt => opt.text.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, mode]);

  // --- MANTIQ: KEYINGI SAVOLGA O'TISH ---
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      // Keyingi savolga o'tish
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(30); // Vaqtni yangilash
    } else {
      // Savollar tugadi -> Natija
      setIsTimerRunning(false);
      setMode('result');
    }
  }, [currentQuestionIndex, quizQuestions.length]);

  // --- TIMER MANTIG'I ---
  useEffect(() => {
    if (!isTimerRunning || mode !== 'quiz') return;

    // Har 1 soniyada ishlaydi
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          // Vaqt tugadi!
          handleNextQuestion();
          return 30;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, mode, handleNextQuestion]);

  // --- TEST YARATISH ---
  const createTest = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setSessionCode(newCode);
    setMode('host');
  };

  // --- TESTNI BOSHLASH ---
  const startQuiz = (code: string) => {
    if (!code || code.length < 4) {
      alert("Kod noto'g'ri!");
      return;
    }
    const questions = getQuestionsBySeed(QUESTIONS, code, TEST_LENGTH);
    
    setQuizQuestions(questions);
    setUserAnswers({});
    setCurrentQuestionIndex(0); // 1-savoldan boshlash
    setTimeLeft(30); // Vaqtni sozlash
    setIsTimerRunning(true); // Timerni yoqish
    setSessionCode(code);
    setMode('quiz');
  };

  // --- JAVOB BERISH ---
  const handleAnswer = (qId: number, optId: string) => {
    // Javobni saqlaymiz
    setUserAnswers(prev => ({ ...prev, [qId]: optId }));
    
    // Biroz kutib (0.5s) keyingi savolga o'tazib yuboramiz (UX uchun)
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };

  // --- BALL HISOB LASH ---
  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      const correct = q.options.find(o => o.isCorrect);
      if (correct && userAnswers[q.id] === correct.id) {
        score++;
      }
    });
    return score;
  };

  // ---------------- UI ----------------

  // 1. MENU
  if (mode === 'menu') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Testlar To'plami</h1>
          <p className="text-gray-500 mb-8">Do'stlar bilan sinxron test yechish</p>
          
          <div className="space-y-4">
            <button 
              onClick={() => setMode('search')}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium"
            >
              🔍 Savollarni o'qish
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={createTest} className="py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200">
                Test Yaratish
              </button>
              <button onClick={() => { setSessionCode(''); setMode('join'); }} className="py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold">
                Qatnashish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. HOST
  if (mode === 'host') {
    return (
      <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center">
          <p className="text-gray-500 text-sm font-medium mb-2">DO'STLARGA ULANISH KODI:</p>
          <div className="text-6xl font-mono font-bold text-blue-600 tracking-wider mb-8">
            {sessionCode}
          </div>
          <button onClick={() => startQuiz(sessionCode)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold mb-3">
            Boshlash
          </button>
          <button onClick={() => setMode('menu')} className="text-gray-400 text-sm">Bekor qilish</button>
        </div>
      </div>
    );
  }

  // 3. JOIN
  if (mode === 'join') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-bold text-center mb-6">Kodni kiriting</h2>
          <input 
            type="number" value={sessionCode} placeholder="123456"
            className="w-full p-4 text-center text-3xl font-mono border-2 border-gray-200 rounded-xl mb-4 outline-none focus:border-blue-500"
            onChange={(e) => setSessionCode(e.target.value)}
          />
          <button onClick={() => startQuiz(sessionCode)} className="w-full py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg">
            Boshlash
          </button>
          <button onClick={() => setMode('menu')} className="w-full mt-4 text-gray-400 text-sm">Ortga</button>
        </div>
      </div>
    );
  }

  // 4. QUIZ (JARAYON) & RESULT (NATIJA)
  if (mode === 'quiz' || mode === 'result') {
    const isResult = mode === 'result';
    const score = calculateScore();
    const total = quizQuestions.length;
    
    // Hozirgi savol (faqat 1 dona)
    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-4 py-3 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto max-w-2xl flex justify-between items-center">
            <div>
              <span className="text-xs text-gray-400 font-mono">ID: {sessionCode}</span>
              <h1 className="font-bold text-gray-800 leading-tight">
                {isResult ? "Natijalar" : `Savol ${currentQuestionIndex + 1} / ${total}`}
              </h1>
            </div>
            
            {/* TIMER KORSATKICHI (Faqat Quiz vaqtida) */}
            {!isResult && (
              <div className={`flex items-center gap-2 font-mono font-bold text-xl ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-blue-600'}`}>
                <span>{timeLeft}s</span>
                <div className="w-8 h-8 rounded-full border-4 border-current border-t-transparent animate-spin opacity-20"></div>
              </div>
            )}
          </div>
          
          {/* Progress Bar (Vaqt chizig'i) */}
          {!isResult && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
              <div 
                className="h-full bg-blue-500 transition-all duration-1000 ease-linear"
                style={{ width: `${(timeLeft / 30) * 100}%` }}
              ></div>
            </div>
          )}
        </header>

        <main className="flex-1 container mx-auto px-4 py-6 max-w-2xl flex flex-col justify-center">
          {isResult ? (
            // --- NATIJA OYNASI ---
            <div className={`p-8 rounded-2xl text-center text-white shadow-xl ${score > total * 0.8 ? 'bg-green-500' : 'bg-indigo-500'}`}>
              <p className="opacity-90 text-sm uppercase tracking-wide mb-2">Yakuniy Natija</p>
              <h2 className="text-6xl font-bold mb-4">{score}</h2>
              <p className="text-xl opacity-90 mb-8">{total} ta savoldan</p>
              
              <div className="bg-white/20 rounded-xl p-4 mb-6 backdrop-blur-sm">
                <p className="font-mono text-sm">{(score/total*100).toFixed(1)}% samaradorlik</p>
              </div>

              <button 
                onClick={() => setMode('menu')}
                className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Menyuga qaytish
              </button>
              
              <div className="mt-8 text-left">
                <h3 className="font-bold mb-4 text-lg border-b border-white/30 pb-2">Xato qilingan savollar:</h3>
                 {/* Xatolarni ko'rsatish (ixtiyoriy) */}
                 <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {quizQuestions.map((q, i) => {
                      const correct = q.options.find(o => o.isCorrect);
                      const userAns = userAnswers[q.id];
                      if(correct && userAns === correct.id) return null;
                      
                      return (
                        <div key={q.id} className="bg-white/10 p-3 rounded-lg text-sm">
                          <p className="opacity-80 mb-1">{i + 1}. {q.text}</p>
                          <p className="font-bold text-red-200">Siz: {q.options.find(o => o.id === userAns)?.text || "Javob yo'q"}</p>
                          <p className="font-bold text-green-200">To'g'ri: {correct?.text}</p>
                        </div>
                      )
                    })}
                 </div>
              </div>
            </div>
          ) : (
            // --- SAVOL OYNASI (Bitta-bitta chiqadi) ---
            <div className="animate-fade-in-up">
              <ActiveTestCard 
                question={currentQuestion}
                selectedOptionId={userAnswers[currentQuestion.id] || null}
                onSelectOption={(optId) => handleAnswer(currentQuestion.id, optId)}
                showResult={false} // Jarayonda javobni ko'rsatmaymiz
              />
              
              <div className="mt-6 text-center text-gray-400 text-sm">
                Agar javob bermasangiz, 30 soniyadan keyin savol o'zgaradi.
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  // 5. SEARCH (Eski qidiruv)
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <header className="sticky top-0 bg-white border-b z-50 p-4">
        <div className="container mx-auto max-w-2xl flex gap-3">
           <button onClick={() => setMode('menu')} className="p-2 bg-gray-100 rounded-lg">←</button>
           <input 
             type="text" placeholder="Qidiruv..." 
             className="flex-1 p-2 bg-gray-100 rounded-lg outline-none"
             value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
           />
        </div>
      </header>
      <main className="container mx-auto px-4 mt-6 max-w-2xl space-y-4">
        {filteredQuestions.map(q => <QuestionCard key={q.id} question={q} />)}
      </main>
    </div>
  );
};

export default App;