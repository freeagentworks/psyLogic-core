export type AnswerValue = 1 | 2 | 3 | 4 | 5;

export type AssessmentMode = 'LOVE' | 'BUSINESS';

export type BigFiveDomain = 'neuroticism' | 'agreeableness' | 'conscientiousness' | 'extraversion' | 'openness';

export type BigFiveAspect =
  | 'volatility' | 'withdrawal'      // Neuroticism
  | 'compassion' | 'politeness'      // Agreeableness
  | 'industriousness' | 'orderliness'// Conscientiousness
  | 'enthusiasm' | 'assertiveness'   // Extraversion
  | 'intellect' | 'openness';        // Openness

export interface Question {
  id: string;
  text: string;
  domain: BigFiveDomain;
  aspect: BigFiveAspect;
  reversed: boolean; // Making this required as per usage, or optional if handling existed
  category?: string;
}

export interface Answer {
  questionId: string;
  value: AnswerValue;
}

export interface BigFiveAspectScores {
  neuroticism: { volatility: number; withdrawal: number };
  agreeableness: { compassion: number; politeness: number };
  conscientiousness: { industriousness: number; orderliness: number };
  extraversion: { enthusiasm: number; assertiveness: number };
  openness: { intellect: number; openness: number };
}

export interface AnalysisResult {
  sloanType: string;
  tScores: BigFiveAspectScores;
  mode: AssessmentMode;
  attachmentStyle?: string; // e.g. "Secure", "Anxious"
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, AnswerValue>;
  isFinished: boolean;
  mode: AssessmentMode;
  language: 'en' | 'ja';

  // Actions
  setLanguage: (language: 'en' | 'ja') => void;
  setMode: (mode: AssessmentMode) => void;
  setAnswer: (value: AnswerValue) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  resetQuiz: () => void;
}
