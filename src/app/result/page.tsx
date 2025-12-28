'use client';

import { useEffect, useState, useRef } from 'react';
import { useCompletion } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';
import { useQuizStore } from '@/lib/store/useQuizStore';
import { calculateScores } from '@/lib/logic/bigFive';
import AspectRadarChart from '@/components/result/AspectRadarChart';
import { AnalysisResult } from '@/lib/types';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { translations } from '@/lib/i18n/translations';
import { Canvas } from '@react-three/fiber';
import Crystal from '@/components/3d/Crystal';
import { calculateAttachment } from '@/lib/logic/attachment';

export default function ResultPage() {
  const { answers, questions, mode, language } = useQuizStore();
  const t = translations[language];
  const [analysisInput, setAnalysisInput] = useState<AnalysisResult | null>(null);

  /* 
   * Add a ref to track if analysis has been submitted to prevent double fetching
   * or unnecessary re-renders causing re-fetch in development StrictMode.
   */
  const submittedRef = useRef(false);

  const { complete, completion, isLoading, error } = useCompletion({
    api: '/api/generate',
    onError: (err) => console.error("Completion Error:", err)
  });

  useEffect(() => {
    // 1. Calculate scores
    const result = calculateScores(answers, questions);

    // 2. Calculate attachment
    const attachment = calculateAttachment(answers, questions);

    const finalResult: AnalysisResult = {
      ...result,
      mode,
      attachmentStyle: attachment.style
    };

    setAnalysisInput(finalResult);
  }, [answers, questions, mode]);

  useEffect(() => {
    if (analysisInput && !submittedRef.current) {
      // Pass the full object as the body
      submittedRef.current = true;
      complete('', { body: analysisInput as any });
    }
  }, [analysisInput, complete]);


  if (!analysisInput) return <div className="text-white flex items-center justify-center min-h-screen">{t.common.calculating}</div>;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl text-white relative z-10">
      {/* 3D Crystal Centerpiece */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] -z-10 opacity-60 pointer-events-none fade-in-scale">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <Crystal result={analysisInput} />
        </Canvas>
      </div>

      <div className="mb-12 text-center relative">
        <h1 className="text-4xl font-light mb-2">{t.result.title}</h1>
        <p className="text-xl text-slate-400">{t.result.sloanType}: <span className="text-white font-bold">{analysisInput.sloanType}</span></p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div className="w-full bg-white/5 rounded-3xl p-4 border border-white/10 backdrop-blur-sm">
          <AspectRadarChart scores={analysisInput.tScores} />
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-medium text-slate-300 mb-2">{t.result.primaryMode}</h3>
            <p className="text-2xl font-bold tracking-tight">{mode}</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-medium text-slate-300 mb-2">{t.result.confidence}</h3>
            <p className="text-2xl font-bold tracking-tight text-emerald-400">{t.result.highRes}</p>
            <p className="text-sm text-slate-500 mt-1">Based on 10-Aspect Analysis</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10" />
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 min-h-[400px]">
          <h2 className="text-2xl font-light mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-indigo-500 rounded-full" />
            {t.result.aiReport}
          </h2>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-200 text-sm mb-4">
              <p className="font-bold">Generation Error:</p>
              <pre className="whitespace-pre-wrap">{error.message}</pre>
              <button
                onClick={() => complete('', { body: analysisInput as any })}
                className="mt-2 text-xs underline hover:text-white"
              >
                Retry
              </button>
            </div>
          )}

          {isLoading && !completion && (
            <div className="flex items-center gap-2 text-slate-400">
              <Loader2 className="animate-spin" />
              <span>{t.result.generating}</span>
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown>{completion}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" onClick={() => useQuizStore.getState().resetQuiz()} className="inline-block px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors">
          {t.result.startNew}
        </Link>
      </div>
    </div>
  );
}
