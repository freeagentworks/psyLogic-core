import { Question } from '../types';

export const QUESTIONS_EN: Question[] = [
    { id: 'q1', text: "I get angry easily.", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    { id: 'q2', text: "I am filled with doubts about things.", domain: 'neuroticism', aspect: 'withdrawal', reversed: false },
    { id: 'q3', text: "I feel others' emotions.", domain: 'agreeableness', aspect: 'compassion', reversed: false },
    { id: 'q4', text: "I respect authority.", domain: 'agreeableness', aspect: 'politeness', reversed: false },
    { id: 'q5', text: "I carry out my plans.", domain: 'conscientiousness', aspect: 'industriousness', reversed: false },
    { id: 'q6', text: "I like order.", domain: 'conscientiousness', aspect: 'orderliness', reversed: false },
    { id: 'q7', text: "I make friends easily.", domain: 'extraversion', aspect: 'enthusiasm', reversed: false },
    { id: 'q8', text: "I take charge.", domain: 'extraversion', aspect: 'assertiveness', reversed: false },
    { id: 'q9', text: "I am quick to understand things.", domain: 'openness', aspect: 'intellect', reversed: false },
    { id: 'q10', text: "I enjoy the beauty of nature.", domain: 'openness', aspect: 'openness', reversed: false },
];

export const QUESTIONS_JA: Question[] = [
    { id: 'q1', text: "些細なことでイライラしてしまう。", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    { id: 'q2', text: "物事に対して疑い深くなることが多い。", domain: 'neuroticism', aspect: 'withdrawal', reversed: false },
    { id: 'q3', text: "他人の感情に敏感だ。", domain: 'agreeableness', aspect: 'compassion', reversed: false },
    { id: 'q4', text: "目上の人や権威を尊重する。", domain: 'agreeableness', aspect: 'politeness', reversed: false },
    { id: 'q5', text: "計画したことは必ず実行する。", domain: 'conscientiousness', aspect: 'industriousness', reversed: false },
    { id: 'q6', text: "整理整頓が好きだ。", domain: 'conscientiousness', aspect: 'orderliness', reversed: false },
    { id: 'q7', text: "すぐに友達を作ることができる。", domain: 'extraversion', aspect: 'enthusiasm', reversed: false },
    { id: 'q8', text: "リーダーシップを取るのが好きだ。", domain: 'extraversion', aspect: 'assertiveness', reversed: false },
    { id: 'q9', text: "物事を理解するのが早い。", domain: 'openness', aspect: 'intellect', reversed: false },
    { id: 'q10', text: "自然の美しさに感動することが多い。", domain: 'openness', aspect: 'openness', reversed: false },
];
