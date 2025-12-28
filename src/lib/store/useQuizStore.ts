import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { QuizState, Question, AssessmentMode } from '../types';
import { BIG_FIVE_QUESTIONS_JA, LOVE_QUESTIONS_JA, BUSINESS_QUESTIONS_JA } from '../data/questions_full';

// Helper to get questions
const getQuestions = (mode: AssessmentMode, lang: 'en' | 'ja') => {
  // Currently only fully implemented JA full set
  if (lang === 'en') {
    // Fallback or minimal implementation for now
    return BIG_FIVE_QUESTIONS_JA; // TODO: Implement English
  }

  const base = BIG_FIVE_QUESTIONS_JA;
  const specific = mode === 'LOVE' ? LOVE_QUESTIONS_JA : BUSINESS_QUESTIONS_JA;
  return [...base, ...specific];
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      questions: getQuestions('LOVE', 'ja'), // Default
      currentIndex: 0,
      answers: {},
      isFinished: false,
      mode: 'LOVE', // Default
      language: 'ja', // Default
      lastAiReport: undefined,

      setLanguage: (language: 'en' | 'ja') => {
        const { mode } = get();
        set({
          language,
          questions: getQuestions(mode, language)
        });
      },
      setMode: (mode: AssessmentMode) => {
        const { language } = get();
        set({
          mode,
          questions: getQuestions(mode, language)
        });
      },

      setAnswer: (value) => {
        const { questions, currentIndex, answers } = get();
        const currentQuestion = questions[currentIndex];

        set({
          answers: {
            ...answers,
            [currentQuestion.id]: value
          }
        });

        // Auto advance
        get().nextQuestion();
      },

      nextQuestion: () => {
        const { currentIndex, questions } = get();
        if (currentIndex < questions.length - 1) {
          set({ currentIndex: currentIndex + 1 });
        } else {
          set({ isFinished: true });
        }
      },

      prevQuestion: () => {
        const { currentIndex } = get();
        if (currentIndex > 0) {
          set({ currentIndex: currentIndex - 1 });
        }
      },

      resetQuiz: () => {
        const { answers, mode, language, isFinished, lastAiReport } = get();
        // Only archive if there's actually a finished result worth saving
        let previousSession = get().previousSession;
        if (isFinished && Object.keys(answers).length > 0) {
          previousSession = { answers, mode, language, aiReport: lastAiReport };
        }

        set({
          currentIndex: 0,
          answers: {},
          isFinished: false,
          previousSession,
          lastAiReport: undefined
        });
      },

      restorePreviousSession: () => {
        const { previousSession } = get();
        if (previousSession) {
          set({
            answers: previousSession.answers,
            mode: previousSession.mode,
            language: previousSession.language,
            isFinished: true,
            lastAiReport: previousSession.aiReport,
            // Ensure questions are reloaded for the mode/lang
            questions: getQuestions(previousSession.mode, previousSession.language)
          });
        }
      },

      setLastAiReport: (report: string) => {
        set({ lastAiReport: report });
      }
    }),
    {
      name: 'psy-logic-storage', // unique name
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        answers: state.answers,
        currentIndex: state.currentIndex,
        mode: state.mode,
        isFinished: state.isFinished,
        language: state.language,
        previousSession: state.previousSession,
        lastAiReport: state.lastAiReport
      }), // Only persist data
      onRehydrateStorage: () => (state) => {
        // ensure questions are re-synced with mode/language upon load
        if (state) {
          state.questions = getQuestions(state.mode, state.language);
        }
      }
    }
  )
);
