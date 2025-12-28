'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuizContainer from '@/components/assessment/QuizContainer';
import { useQuizStore } from '@/lib/store/useQuizStore';

export default function AssessmentPage() {
  const { isFinished } = useQuizStore();
  const router = useRouter();

  useEffect(() => {
    if (isFinished) {
      router.push('/result');
    }
  }, [isFinished, router]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <QuizContainer />
    </div>
  );
}
