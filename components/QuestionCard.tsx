
import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
      <div className="flex gap-3 mb-4">
        <span className="text-gray-400 font-medium">{question.id}.</span>
        <h3 className="text-gray-800 font-medium text-lg">
          {question.text}
        </h3>
      </div>

      <div className="space-y-2">
        {question.options.map((opt) => (
          <div
            key={opt.id}
            className={`p-3 rounded-md text-sm border ${
              opt.id === 'a' 
                ? 'bg-green-50 border-green-200 text-green-900' 
                : 'bg-white border-gray-100 text-gray-600'
            }`}
          >
            <span className="font-bold mr-2 uppercase">{opt.id})</span>
            {opt.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
