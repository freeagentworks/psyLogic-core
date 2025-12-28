export type Language = 'en' | 'ja';

export const translations = {
  en: {
    common: {
      title: "PsyLogic Core",
      subtitle: "Deep Psychological Analysis System",
      poweredBy: "Powered by Vercel AI SDK & Big Five Aspects Scale",
      loading: "Generating insight...",
      calculating: "Calculating...",
    },
    landing: {
      loveMode: {
        title: "Love Mode",
        desc: "Attachment & Passion",
      },
      businessMode: {
        title: "Business Mode",
        desc: "Growth & Performance",
      },
    },
    assessment: {
      progress: "Progress",
      disagree: "Disagree",
      agree: "Agree",
      complete: "Analysis Complete",
    },
    result: {
      title: "Analysis Result",
      sloanType: "SLOAN Type",
      primaryMode: "Primary Mode",
      confidence: "Assessment Confidence",
      highRes: "High Resolution",
      chartTitle: "Personality Aspects",
      aiReport: "AI Analysis Report",
      startNew: "Start New Assessment",
      generating: "Generating insight...",
    },
  },
  ja: {
    common: {
      title: "PsyLogic Core",
      subtitle: "深層心理分析システム",
      poweredBy: "Powered by Vercel AI SDK & Big Five Aspects Scale",
      loading: "分析を生成中...",
      calculating: "計算中...",
    },
    landing: {
      loveMode: {
        title: "Love Mode",
        desc: "愛着スタイルと情熱",
      },
      businessMode: {
        title: "Business Mode",
        desc: "成長とパフォーマンス",
      },
    },
    assessment: {
      progress: "進捗",
      disagree: "そう思わない",
      agree: "そう思う",
      complete: "分析完了",
    },
    result: {
      title: "診断結果",
      sloanType: "SLOANタイプ",
      primaryMode: "モード",
      confidence: "分析精度",
      highRes: "高解像度分析",
      chartTitle: "性格特性",
      aiReport: "AI分析レポート",
      startNew: "新しい診断を始める",
      generating: "インサイト生成中...",
    },
  },
};
