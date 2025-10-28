import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from './constants';
import { Section, Question, AnswerResult } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import SectionAnalysisScreen from './components/SectionAnalysisScreen';

type GameState = 'welcome' | 'quiz' | 'analysis';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerResults, setAnswerResults] = useState<AnswerResult[]>([]);

  const handleStartQuiz = (section: Section) => {
    const sectionQuestions = QUIZ_QUESTIONS.filter(q => q.section === section);
    setQuestions(sectionQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswerResults([]);
    setGameState('quiz');
  };

  const handleUpdateScore = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    const currentQuestion = questions[currentQuestionIndex];
    setAnswerResults(prevResults => [
      ...prevResults,
      { question: currentQuestion, isCorrect },
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setGameState('analysis');
    }
  };

  const handleRestart = () => {
    setGameState('welcome');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswerResults([]);
  };

  const renderContent = () => {
    switch (gameState) {
      case 'quiz':
        const currentQuestion = questions[currentQuestionIndex];
        if (!currentQuestion) {
          // Fallback in case questions are empty
          return <WelcomeScreen onStart={handleStartQuiz} />;
        }
        return (
          <QuestionCard
            questionData={currentQuestion}
            onNextQuestion={handleNextQuestion}
            updateScore={handleUpdateScore}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            score={score}
          />
        );
      case 'analysis':
        return (
          <SectionAnalysisScreen
            results={answerResults}
            onRestart={handleRestart}
          />
        );
      case 'welcome':
      default:
        return <WelcomeScreen onStart={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <main className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
