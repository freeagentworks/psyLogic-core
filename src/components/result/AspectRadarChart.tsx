'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { BigFiveAspectScores } from '@/lib/types';

interface AspectRadarChartProps {
  scores: BigFiveAspectScores;
}

export default function AspectRadarChart({ scores }: AspectRadarChartProps) {
  const data = [
    { subject: 'Vol', A: scores.neuroticism.volatility, fullMark: 100 },
    { subject: 'Wth', A: scores.neuroticism.withdrawal, fullMark: 100 },
    { subject: 'Com', A: scores.agreeableness.compassion, fullMark: 100 },
    { subject: 'Pol', A: scores.agreeableness.politeness, fullMark: 100 },
    { subject: 'Ind', A: scores.conscientiousness.industriousness, fullMark: 100 },
    { subject: 'Ord', A: scores.conscientiousness.orderliness, fullMark: 100 },
    { subject: 'Ent', A: scores.extraversion.enthusiasm, fullMark: 100 },
    { subject: 'Ass', A: scores.extraversion.assertiveness, fullMark: 100 },
    { subject: 'Int', A: scores.openness.intellect, fullMark: 100 },
    { subject: 'Opn', A: scores.openness.openness, fullMark: 100 },
  ];

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
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
