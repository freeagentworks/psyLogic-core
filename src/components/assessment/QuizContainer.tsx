'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '@/lib/store/useQuizStore';
import { ProgressBar } from './ProgressBar';
import { cn } from '@/lib/utils';
import type { AnswerValue } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';

export default function QuizContainer() {
  const { questions, currentIndex, setAnswer, isFinished, language } = useQuizStore();
  const t = translations[language];
  const currentQuestion = questions[currentIndex];

  // Keyboard support (1-5)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFinished) return;

      const key = parseInt(e.key);
      if (key >= 1 && key <= 5) {
        setAnswer(key as AnswerValue);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setAnswer, isFinished]);

  if (isFinished) {
    return (
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-light text-white tracking-widest uppercase">{t.assessment.complete}</h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[60vh]">
      <ProgressBar current={currentIndex} total={questions.length} />

      <div className="relative w-full h-64 perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 100, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -100, rotateY: 10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center p-8",
              "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl",
              "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            )}
          >
            <h2 className="text-2xl md:text-3xl font-light text-center leading-relaxed text-white/90">
              {currentQuestion.text}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 grid grid-cols-5 gap-4 w-full max-w-lg">
        {[1, 2, 3, 4, 5].map((value) => {
          const isSelected = useQuizStore.getState().answers[currentQuestion.id] === value;
          return (
            <button
              key={value}
              onClick={() => setAnswer(value as AnswerValue)}
              className={cn(
                "aspect-square rounded-full flex items-center justify-center text-xl font-medium transition-all duration-200",
                "border border-white/20",
                isSelected
                  ? "bg-white text-black scale-110 ring-4 ring-white/50 shadow-lg"
                  : "bg-white/5 text-white hover:bg-white/20 hover:scale-110 active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-white/50"
              )}
            >
              {value}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-between w-full max-w-lg text-sm md:text-base text-slate-400 font-medium uppercase tracking-widest px-2">
        <span>{t.assessment.disagree}</span>
        <span>{t.assessment.agree}</span>
      </div>

      {currentIndex > 0 && (
        <button
          onClick={() => useQuizStore.getState().prevQuestion()}
          className="mt-8 text-slate-400 hover:text-white transition-colors text-lg font-light uppercase tracking-wider flex items-center gap-2"
        >
          {t.assessment.back}
        </button>
      )}
    </div>
  );
}
