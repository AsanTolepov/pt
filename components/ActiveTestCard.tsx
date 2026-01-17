// src/components/ActiveTestCard.tsx
import React from 'react';
import { Question } from '../types';

interface ActiveTestCardProps {
  question: Question;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
  showResult: boolean; // Test tugadimi yoki yo'qmi
}

const ActiveTestCard: React.FC<ActiveTestCardProps> = ({ 
  question, 
  selectedOptionId, 
  onSelectOption,
  showResult 
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm mb-4">
      <div className="flex gap-3 mb-4">
        <span className="text-gray-400 font-medium">{question.id}.</span>
        <h3 className="text-gray-800 font-medium text-lg">
          {question.text}
        </h3>
      </div>

      <div className="space-y-2">
        {question.options.map((opt) => {
          // Ranglarni aniqlash mantig'i
          let optionClass = "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 cursor-pointer";
          
          if (showResult) {
            // Natija ko'rsatish rejimi
            if (opt.isCorrect) {
              optionClass = "bg-green-100 border-green-300 text-green-800 font-medium"; // To'g'ri javob
            } else if (selectedOptionId === opt.id && !opt.isCorrect) {
              optionClass = "bg-red-100 border-red-300 text-red-800"; // Xato belgilangan
            } else {
              optionClass = "bg-gray-50 border-gray-100 text-gray-400 opacity-60"; // Belgilanmagan variantlar
            }
          } else {
            // Test yechish jarayoni
            if (selectedOptionId === opt.id) {
              optionClass = "bg-blue-100 border-blue-400 text-blue-800 ring-1 ring-blue-400"; // Tanlangan
            }
          }

          return (
            <div
              key={opt.id}
              onClick={() => !showResult && onSelectOption(opt.id)}
              className={`p-3 rounded-md text-sm border transition-all select-none flex items-start ${optionClass}`}
            >
              <span className="font-bold mr-2 uppercase min-w-[20px]">{opt.id})</span>
              <span>{opt.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveTestCard;