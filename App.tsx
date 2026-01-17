import React, { useState, useMemo } from 'react';
import { QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard'; // Qidiruv uchun
import ActiveTestCard from './components/ActiveTestCard'; // Test uchun
import { getQuestionsBySeed } from './utils'; // Biz yozgan mantiq

// Ilova rejimlari
type AppMode = 'menu' | 'search' | 'host' | 'join' | 'quiz' | 'result';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('menu');
  
  // Qidiruv uchun state
  const [searchTerm, setSearchTerm] = useState('');

  // Test uchun statelar
  const [sessionCode, setSessionCode] = useState('');
  const [quizQuestions, setQuizQuestions] = useState<typeof QUESTIONS>([]);
  const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});
  
  // Test savollar soni (150 tadan nechta tushishi kerak)
  const TEST_LENGTH = 30; 

  // --- QIDIRUV MANTIG'I ---
  const filteredQuestions = useMemo(() => {
    if (mode !== 'search') return [];
    return QUESTIONS.filter(q => 
      q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.options.some(opt => opt.text.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, mode]);

  // --- TEST YARATISH (HOST) ---
  const createTest = () => {
    // 6 xonali tasodifiy kod yaratish
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setSessionCode(newCode);
    setMode('host');
  };

  // --- TESTGA KIRISH (JOIN & START) ---
  const startQuiz = (code: string) => {
    if (!code || code.length < 4) {
      alert("Iltimos, to'g'ri kod kiriting!");
      return;
    }
    
    // UTILS dagi funksiya orqali savollarni olish
    const questions = getQuestionsBySeed(QUESTIONS, code, TEST_LENGTH);
    
    setQuizQuestions(questions);
    setUserAnswers({});
    setSessionCode(code);
    setMode('quiz');
    window.scrollTo(0, 0);
  };

  // Javob belgilash
  const handleAnswer = (qId: number, optId: string) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optId }));
  };

  // Natijani hisoblash
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

  // ---------------- UI QISMI ----------------

  // 1. MENU (Bosh sahifa)
  if (mode === 'menu') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            📚
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Testlar To'plami</h1>
          <p className="text-gray-500 mb-8 text-sm">Jami savollar: {QUESTIONS.length} ta</p>
          
          <div className="space-y-3">
            <button 
              onClick={() => setMode('search')}
              className="w-full py-3.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              🔍 Savollarni ko'rish
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={createTest}
                className="py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
              >
                Test Yaratish
              </button>
              <button 
                onClick={() => { setSessionCode(''); setMode('join'); }}
                className="py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition"
              >
                Qatnashish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. HOST (Kod ko'rsatish)
  if (mode === 'host') {
    return (
      <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center">
          <p className="text-gray-500 text-sm font-medium mb-2">DO'STLARINGIZGA AYTING:</p>
          <div className="text-6xl font-mono font-bold text-blue-600 tracking-wider mb-8">
            {sessionCode}
          </div>
          <p className="text-gray-400 text-xs mb-6">
            Ular "Qatnashish" tugmasini bosib, shu kodni kiritishsa, hammada bir xil savollar tushadi.
          </p>
          <button 
            onClick={() => startQuiz(sessionCode)}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 mb-3"
          >
            Testni Boshlash
          </button>
          <button onClick={() => setMode('menu')} className="text-gray-400 text-sm hover:text-gray-600">Bekor qilish</button>
        </div>
      </div>
    );
  }

  // 3. JOIN (Kod kiritish)
  if (mode === 'join') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-800">Kodni kiriting</h2>
          <input 
            type="number" 
            value={sessionCode}
            placeholder="Kod..."
            className="w-full p-4 text-center text-3xl font-mono border-2 border-gray-200 rounded-xl mb-4 outline-none focus:border-blue-500 transition-colors"
            onChange={(e) => setSessionCode(e.target.value)}
          />
          <button 
            onClick={() => startQuiz(sessionCode)}
            className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg shadow-green-200"
          >
            Testni Boshlash
          </button>
          <button onClick={() => setMode('menu')} className="w-full mt-4 text-gray-400 text-sm">Ortga qaytish</button>
        </div>
      </div>
    );
  }

  // 4. QUIZ & RESULT (Test jarayoni va Natija)
  if (mode === 'quiz' || mode === 'result') {
    const isResult = mode === 'result';
    const score = calculateScore();
    const total = quizQuestions.length;
    const answeredCount = Object.keys(userAnswers).length;

    return (
      <div className="min-h-screen bg-gray-100 pb-20">
        <header className="sticky top-0 bg-white border-b z-50 px-4 py-3 shadow-sm">
          <div className="container mx-auto max-w-3xl flex justify-between items-center">
            <div>
              <h1 className="font-bold text-gray-800 text-lg">Test Jarayoni</h1>
              <p className="text-xs text-gray-500">Kod: <span className="font-mono">{sessionCode}</span></p>
            </div>
            {isResult ? (
              <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-bold">
                {score}/{total}
              </div>
            ) : (
              <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {answeredCount}/{total} belgilandi
              </div>
            )}
          </div>
        </header>

        <main className="container mx-auto px-4 mt-6 max-w-3xl">
          {isResult && (
            <div className={`p-6 rounded-2xl text-center text-white mb-8 shadow-lg ${score > total * 0.8 ? 'bg-green-500' : 'bg-blue-500'}`}>
              <p className="opacity-90 text-sm uppercase tracking-wide mb-1">Sizning natijangiz</p>
              <h2 className="text-4xl font-bold mb-2">{score} / {total}</h2>
              <p className="text-sm opacity-90 mb-4">{(score/total*100).toFixed(1)}% to'g'ri</p>
              <button 
                onClick={() => setMode('menu')}
                className="px-6 py-2 bg-white text-gray-800 rounded-full font-bold text-sm hover:bg-gray-100"
              >
                Menyuga qaytish
              </button>
            </div>
          )}

          {quizQuestions.map((q, index) => (
            <ActiveTestCard 
              key={q.id}
              question={q}
              selectedOptionId={userAnswers[q.id] || null}
              onSelectOption={(optId) => handleAnswer(q.id, optId)}
              showResult={isResult}
            />
          ))}

          {!isResult && (
            <div className="py-8 flex justify-center">
              <button 
                onClick={() => {
                   if(window.confirm("Testni yakunlab natijalarni ko'rasizmi?")) setMode('result');
                }}
                className="px-10 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition shadow-xl"
              >
                Testni Yakunlash
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  // 5. SEARCH (Eski qidiruv rejimi)
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <header className="sticky top-0 bg-white border-b z-50 p-4">
        <div className="container mx-auto max-w-3xl flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <button onClick={() => setMode('menu')} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full">
              ← Ortga
            </button>
            <h1 className="text-lg font-bold text-gray-800">Qidiruv</h1>
          </div>
          <input 
            type="text" 
            placeholder="Kalit so'zni yozing..."
            className="w-full p-3 bg-gray-100 rounded-lg border outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="container mx-auto px-4 mt-6 max-w-3xl space-y-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => <QuestionCard key={q.id} question={q} />)
        ) : (
          <div className="text-center text-gray-400 py-10">Hech narsa topilmadi</div>
        )}
      </main>
    </div>
  );
};

export default App;