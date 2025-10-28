import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  questionData: Question;
  onNextQuestion: () => void;
  updateScore: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
  score: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  onNextQuestion,
  updateScore,
  questionNumber,
  totalQuestions,
  score,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [questionData]);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;

    const isCorrect = option === questionData.answer;
    setSelectedOption(option);
    setIsAnswered(true);
    updateScore(isCorrect);
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100';
    }
    if (option === questionData.answer) {
      return 'bg-green-100 border-green-500 text-green-800 font-bold'; 
    }
    if (option === selectedOption && option !== questionData.answer) {
      return 'bg-red-100 border-red-500 text-red-800 font-bold'; 
    }
    return 'bg-slate-50 text-slate-500 border-slate-200 opacity-70';
  };

  const isLastQuestion = questionNumber === totalQuestions;

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-semibold text-slate-500">
          Soalan {questionNumber} / {totalQuestions}
        </div>
        <div className="text-sm font-bold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
          Skor: {score}
        </div>
      </div>

      {questionData.passage && (
        <div className="mb-4 p-4 bg-slate-50 border rounded-lg max-h-40 overflow-y-auto">
          <p className="text-lg text-slate-700 font-arabic text-right leading-loose" dir="rtl">
            {questionData.passage}
          </p>
        </div>
      )}

      <div className="mb-6">
        <h2 className={`text-xl md:text-2xl text-slate-800 font-bold text-right leading-relaxed ${questionData.question.length > 50 ? 'font-arabic' : ''}`} dir="rtl">
          {questionData.question}
        </h2>
      </div>

      <div className="space-y-3">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={isAnswered}
            className={`w-full text-right p-4 rounded-lg border-2 transition-all duration-300 font-arabic text-lg ${getButtonClass(option)} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
            dir="rtl"
          >
            {option}
          </button>
        ))}
      </div>
      
      {isAnswered && (
        <div className="mt-6">
            {selectedOption === questionData.answer ? (
                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                    <p className="font-bold text-green-800 text-lg font-arabic" dir="rtl">
                    أَحْسَنْتَ! Jawapan anda tepat sekali!
                    </p>
                </div>
            ) : (
                <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                    <p className="font-bold text-red-800 mb-2">Bukan jawapan yang tepat.</p>
                    <p className="text-slate-700 mb-2">Jawapan yang betul ialah:</p>
                    <p className="font-bold text-red-900 font-arabic text-lg mb-3 p-2 bg-red-100 rounded text-center" dir="rtl">
                        {questionData.answer}
                    </p>
                    {questionData.explanation && (
                        <>
                            <h3 className="font-bold text-red-800">Sebab:</h3>
                            <p className="text-red-700">{questionData.explanation}</p>
                        </>
                    )}
                </div>
            )}
            <div className="mt-6">
                 <button
                    onClick={onNextQuestion}
                    className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-teal-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
                >
                    {isLastQuestion ? 'Lihat Analisa' : 'Soalan Seterusnya'}
                </button>
            </div>
        </div>
    )}
    </div>
  );
};

export default QuestionCard;
