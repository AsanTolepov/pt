
import React, { useState, useMemo } from 'react';
import { QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = useMemo(() => {
    return QUESTIONS.filter(q => 
      q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.options.some(opt => opt.text.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Minimal Header */}
      <header className="sticky top-0 bg-white border-b z-50 p-4">
        <div className="container mx-auto max-w-3xl flex flex-col gap-3">
          <h1 className="text-xl font-bold text-gray-800">Testler toplamı</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Sorawdı izlew..."
              className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 outline-none focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Questions List */}
      <main className="container mx-auto px-4 mt-6 max-w-3xl">
        <div className="space-y-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))
          ) : (
            <div className="text-center py-20 text-gray-400">
              Hech nárse tabılmadı.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
