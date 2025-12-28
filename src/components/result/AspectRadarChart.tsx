'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { BigFiveAspectScores } from '@/lib/types';

interface AspectRadarChartProps {
  scores: BigFiveAspectScores;
}

export default function AspectRadarChart({ scores }: AspectRadarChartProps) {
  const data = [
    { subject: '激昂性', A: scores.neuroticism.volatility, fullMark: 100 },
    { subject: '抑うつ', A: scores.neuroticism.withdrawal, fullMark: 100 },
    { subject: '共感性', A: scores.agreeableness.compassion, fullMark: 100 },
    { subject: '礼儀', A: scores.agreeableness.politeness, fullMark: 100 },
    { subject: '勤勉性', A: scores.conscientiousness.industriousness, fullMark: 100 },
    { subject: '秩序性', A: scores.conscientiousness.orderliness, fullMark: 100 },
    { subject: '熱意', A: scores.extraversion.enthusiasm, fullMark: 100 },
    { subject: '自己主張', A: scores.extraversion.assertiveness, fullMark: 100 },
    { subject: '知性', A: scores.openness.intellect, fullMark: 100 },
    { subject: '開放性', A: scores.openness.openness, fullMark: 100 },
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
