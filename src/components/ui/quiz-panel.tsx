"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizPanelProps {
  questions: QuizQuestion[];
  onComplete: (allCorrect: boolean) => void;
  isCompleted?: boolean;
  isLoading?: boolean;
}

export const QuizPanel = ({ questions, onComplete, isCompleted = false, isLoading = false }: QuizPanelProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (showResults || isLoading) return;
    
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleSubmit = () => {
    if (isLoading) return;
    
    setShowResults(true);
    const correct = questions.every(
      (q, i) => selectedAnswers[i] === q.correctAnswer
    );
    setAllCorrect(correct);
    onComplete(correct);
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setAllCorrect(false);
  };

  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 border-b border-border pb-4 mb-6">
        <h2 className="text-xl font-bold text-foreground">Quiz</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Answer all questions to complete this unit
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        {questions.map((question, qIndex) => {
          const isSelected = selectedAnswers[qIndex] !== undefined;
          
          return (
            <div key={qIndex} className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-4">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm mr-2">
                  {qIndex + 1}
                </span>
                {question.question}
              </h3>
              
              <div className="space-y-2">
                {question.options.map((option, oIndex) => {
                  const selected = selectedAnswers[qIndex] === oIndex;
                  const isCorrect = oIndex === question.correctAnswer;
                  const showCorrect = showResults && isCorrect;
                  const showIncorrect = showResults && selected && !isCorrect;

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswerSelect(qIndex, oIndex)}
                      disabled={showResults || isLoading}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                        showCorrect
                          ? 'border-primary bg-primary/10'
                          : showIncorrect
                          ? 'border-destructive bg-destructive/10'
                          : selected
                          ? 'border-primary bg-accent'
                          : 'border-border bg-card hover:bg-accent hover:border-muted-foreground'
                      } ${(showResults || isLoading) ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{option}</span>
                        {showResults && (showCorrect || showIncorrect) && (
                          showCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                          )
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex-shrink-0 mt-6 space-y-4 pt-4 border-t border-border">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered || isLoading}
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : allAnswered ? (
              'Submit Quiz'
            ) : (
              `Answer ${questions.length - Object.keys(selectedAnswers).length} more question${questions.length - Object.keys(selectedAnswers).length !== 1 ? 's' : ''}`
            )}
          </button>
        ) : (
          <button
            onClick={handleRetake}
            disabled={isLoading}
            className="w-full px-6 py-3 border-2 border-border font-bold rounded-lg hover:bg-accent transition-all active:scale-95 disabled:opacity-50"
          >
            Retake Quiz
          </button>
        )}

        {showResults && (
          <div className={`p-4 rounded-lg ${allCorrect ? 'bg-primary/10 border-2 border-primary' : 'bg-destructive/10 border-2 border-destructive'}`}>
            <p className={`font-bold text-sm ${allCorrect ? 'text-primary' : 'text-destructive'}`}>
              {allCorrect 
                ? '🎉 Perfect! All answers are correct!' 
                : '❌ Some answers were incorrect. Please review and try again.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};