'use client';

import { motion } from 'framer-motion';
import { useQuizStore } from '@/lib/store/useQuizStore';
import { translations } from '@/lib/i18n/translations';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const { language } = useQuizStore();
  const t = translations[language];
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex justify-between text-xs uppercase tracking-widest text-slate-400 mb-2">
        <span>{t.assessment.progress}</span>
        <span>{current + 1} / {total}</span>
      </div>
      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white box-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
      </div>
    </div>
  );
}
