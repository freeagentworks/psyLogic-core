'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { BigFiveAspectScores } from '@/lib/types';
import { translations, Language } from '@/lib/i18n/translations';

interface AspectRadarChartProps {
  scores: BigFiveAspectScores;
  language: Language;
}

export default function AspectRadarChart({ scores, language }: AspectRadarChartProps) {
  const t = translations[language].aspects;

  const data = [
    { subject: t.volatility, A: scores.neuroticism.volatility, fullMark: 100 },
    { subject: t.withdrawal, A: scores.neuroticism.withdrawal, fullMark: 100 },
    { subject: t.compassion, A: scores.agreeableness.compassion, fullMark: 100 },
    { subject: t.politeness, A: scores.agreeableness.politeness, fullMark: 100 },
    { subject: t.industriousness, A: scores.conscientiousness.industriousness, fullMark: 100 },
    { subject: t.orderliness, A: scores.conscientiousness.orderliness, fullMark: 100 },
    { subject: t.enthusiasm, A: scores.extraversion.enthusiasm, fullMark: 100 },
    { subject: t.assertiveness, A: scores.extraversion.assertiveness, fullMark: 100 },
    { subject: t.intellect, A: scores.openness.intellect, fullMark: 100 },
    { subject: t.openness, A: scores.openness.openness, fullMark: 100 },
  ];

  return (
    <div className="w-full h-[300px] md:h-[400px] min-w-[300px]" style={{ contain: 'layout' }}>
      <ResponsiveContainer width="100%" height="100%" minWidth={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Personality"
            dataKey="A"
            stroke="#818cf8"
            fill="#818cf8"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
