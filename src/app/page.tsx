'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useQuizStore } from '@/lib/store/useQuizStore';
import { AssessmentMode } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { Globe } from 'lucide-react';
import HeroObject from '@/components/3d/HeroObject';

export default function Home() {
  const { setMode, language, setLanguage, previousSession } = useQuizStore();
  const t = translations[language];
  const [hasPreviousSession, setHasPreviousSession] = useState(false);

  useEffect(() => {
    setHasPreviousSession(!!previousSession);
  }, [previousSession]);

  const handleStart = (mode: AssessmentMode) => {
    setMode(mode);
    useQuizStore.getState().resetQuiz();
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)] z-10 relative">

      <button
        onClick={toggleLanguage}
        className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-2"
        style={{ zIndex: 50 }}
      >
        <Globe size={20} />
        <span className="text-xs uppercase font-medium">{language === 'en' ? 'JP' : 'EN'}</span>
      </button>

      <div className="w-full max-w-lg mb-[-20px] z-0">
        <HeroObject />
      </div>

      <div className="text-center space-y-4 relative z-10">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          {t.common.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-md mx-auto tracking-widest uppercase font-light">
          {t.common.subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/assessment"
          onClick={() => handleStart('LOVE')}
          className="group relative px-8 py-4 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-rose-500/20 blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
          <div className="relative flex flex-col items-center">
            <span className="text-xl font-light text-rose-200">{t.landing.loveMode.title}</span>
            <span className="text-xs text-rose-400/80 mt-1 uppercase tracking-wider">{t.landing.loveMode.desc}</span>
          </div>
        </Link>

        <Link
          href="/assessment"
          onClick={() => handleStart('BUSINESS')}
          className="group relative px-8 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
          <div className="relative flex flex-col items-center">
            <span className="text-xl font-light text-cyan-200">{t.landing.businessMode.title}</span>
            <span className="text-xs text-cyan-400/80 mt-1 uppercase tracking-wider">{t.landing.businessMode.desc}</span>
          </div>
        </Link>
      </div>

      {hasPreviousSession && (
        <button
          onClick={() => {
            useQuizStore.getState().restorePreviousSession();
            // Need to use router to navigate, but we can't use useRouter hook inside this conditional easily in the return?
            // Actually we are in a component, so we can use useRouter at top level.
            window.location.href = '/result'; // Simple fallback or use router
          }}
          className="text-slate-400 hover:text-white text-base md:text-lg uppercase tracking-widest underline underline-offset-4 transition-colors font-medium"
        >
          {language === 'en' ? 'View Last Result' : '前回の結果を見る'}
        </button>
      )}

      <div className="absolute bottom-8 text-slate-600 text-[10px] tracking-widest uppercase">
        {t.common.poweredBy}
      </div>
    </div>
  );
}
