import { Question } from '../types';

// ==========================================
// 共通: Big Five 10 Aspects (50問)
// 各アスペクト5問 × 10 = 50問
// ==========================================
export const BIG_FIVE_QUESTIONS_JA: Question[] = [
    // --- Neuroticism (神経症傾向) ---
    // Volatility (激昂性)
    { id: 'n_vol_1', text: "些細なことでイライラしてしまう。", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    { id: 'n_vol_2', text: "感情のコントロールが難しいと感じる。", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    { id: 'n_vol_3', text: "気分が変わりやすい。", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    { id: 'n_vol_4', text: "めったに腹を立てない。", domain: 'neuroticism', aspect: 'volatility', reversed: true },
    { id: 'n_vol_5', text: "冷静沈着な方だ。", domain: 'neuroticism', aspect: 'volatility', reversed: true },

    // Withdrawal (抑うつ/不安)
    { id: 'n_wit_1', text: "将来に対して不安を感じることが多い。", domain: 'neuroticism', aspect: 'withdrawal', reversed: false },
    { id: 'n_wit_2', text: "物事を悪く考えすぎてしまう。", domain: 'neuroticism', aspect: 'withdrawal', reversed: false },
    { id: 'n_wit_3', text: "すぐに落ち込んでしまう。", domain: 'neuroticism', aspect: 'withdrawal', reversed: false },
    { id: 'n_wit_4', text: "自分に自信を持っている。", domain: 'neuroticism', aspect: 'withdrawal', reversed: true },
    { id: 'n_wit_5', text: "プレッシャーに強い方だ。", domain: 'neuroticism', aspect: 'withdrawal', reversed: true },

    // --- Agreeableness (協調性) ---
    // Compassion (共感性)
    { id: 'a_com_1', text: "他人の感情に敏感だ。", domain: 'agreeableness', aspect: 'compassion', reversed: false },
    { id: 'a_com_2', text: "困っている人を見ると放っておけない。", domain: 'agreeableness', aspect: 'compassion', reversed: false },
    { id: 'a_com_3', text: "人の話を親身になって聞く。", domain: 'agreeableness', aspect: 'compassion', reversed: false },
    { id: 'a_com_4', text: "他人の問題にはあまり関心がない。", domain: 'agreeableness', aspect: 'compassion', reversed: true },
    { id: 'a_com_5', text: "冷たい人間だと言われることがある。", domain: 'agreeableness', aspect: 'compassion', reversed: true },

    // Politeness (礼儀正しさ/対立回避)
    { id: 'a_pol_1', text: "目上の人や権威を尊重する。", domain: 'agreeableness', aspect: 'politeness', reversed: false },
    { id: 'a_pol_2', text: "他人と衝突することを避ける。", domain: 'agreeableness', aspect: 'politeness', reversed: false },
    { id: 'a_pol_3', text: "言葉遣いには気をつける。", domain: 'agreeableness', aspect: 'politeness', reversed: false },
    { id: 'a_pol_4', text: "思ったことははっきりと言う方だ。", domain: 'agreeableness', aspect: 'politeness', reversed: true },
    { id: 'a_pol_5', text: "議論になったら相手を言い負かす。", domain: 'agreeableness', aspect: 'politeness', reversed: true },

    // --- Conscientiousness (誠実性) ---
    // Industriousness (勤勉性)
    { id: 'c_ind_1', text: "計画したことは必ず実行する。", domain: 'conscientiousness', aspect: 'industriousness', reversed: false },
    { id: 'c_ind_2', text: "時間を無駄にせず、効率的に動く。", domain: 'conscientiousness', aspect: 'industriousness', reversed: false },
    { id: 'c_ind_3', text: "目標に向かって努力し続けることができる。", domain: 'conscientiousness', aspect: 'industriousness', reversed: false },
    { id: 'c_ind_4', text: "やるべきことを先延ばしにしてしまう。", domain: 'conscientiousness', aspect: 'industriousness', reversed: true },
    { id: 'c_ind_5', text: "すぐに気が散ってしまう。", domain: 'conscientiousness', aspect: 'industriousness', reversed: true },

    // Orderliness (秩序性)
    { id: 'c_ord_1', text: "整理整頓が好きだ。", domain: 'conscientiousness', aspect: 'orderliness', reversed: false },
    { id: 'c_ord_2', text: "細かいルールや手順を守る。", domain: 'conscientiousness', aspect: 'orderliness', reversed: false },
    { id: 'c_ord_3', text: "細部にまでこだわる。", domain: 'conscientiousness', aspect: 'orderliness', reversed: false },
    { id: 'c_ord_4', text: "部屋が散らかっていても気にならない。", domain: 'conscientiousness', aspect: 'orderliness', reversed: true },
    { id: 'c_ord_5', text: "物事を大雑把に進める。", domain: 'conscientiousness', aspect: 'orderliness', reversed: true },

    // --- Extraversion (外向性) ---
    // Enthusiasm (熱意/社交性)
    { id: 'e_ent_1', text: "すぐに友達を作ることができる。", domain: 'extraversion', aspect: 'enthusiasm', reversed: false },
    { id: 'e_ent_2', text: "人混みやパーティが好きだ。", domain: 'extraversion', aspect: 'enthusiasm', reversed: false },
    { id: 'e_ent_3', text: "いつも笑顔で楽しそうだと言われる。", domain: 'extraversion', aspect: 'enthusiasm', reversed: false },
    { id: 'e_ent_4', text: "一人でいる方が好きだ。", domain: 'extraversion', aspect: 'enthusiasm', reversed: true },
    { id: 'e_ent_5', text: "感情を表に出すのが苦手だ。", domain: 'extraversion', aspect: 'enthusiasm', reversed: true },

    // Assertiveness (自己主張)
    { id: 'e_ass_1', text: "リーダーシップを取るのが好きだ。", domain: 'extraversion', aspect: 'assertiveness', reversed: false },
    { id: 'e_ass_2', text: "自分の意見を強く主張できる。", domain: 'extraversion', aspect: 'assertiveness', reversed: false },
    { id: 'e_ass_3', text: "人を説得するのが得意だ。", domain: 'extraversion', aspect: 'assertiveness', reversed: false },
    { id: 'e_ass_4', text: "人前に出るのは苦手だ。", domain: 'extraversion', aspect: 'assertiveness', reversed: true },
    { id: 'e_ass_5', text: "他人の指示に従う方が楽だ。", domain: 'extraversion', aspect: 'assertiveness', reversed: true },

    // --- Openness/Intellect (開放性) ---
    // Intellect (知的好奇心)
    { id: 'o_int_1', text: "物事を理解するのが早い。", domain: 'openness', aspect: 'intellect', reversed: false },
    { id: 'o_int_2', text: "抽象的なアイデアについて考えるのが好きだ。", domain: 'openness', aspect: 'intellect', reversed: false },
    { id: 'o_int_3', text: "哲学的な議論を楽しむ。", domain: 'openness', aspect: 'intellect', reversed: false },
    { id: 'o_int_4', text: "難しい本を読むのは避ける。", domain: 'openness', aspect: 'intellect', reversed: true },
    { id: 'o_int_5', text: "複雑な問題には関わりたくない。", domain: 'openness', aspect: 'intellect', reversed: true },

    // Openness (美的感受性)
    { id: 'o_ope_1', text: "自然の美しさに感動することが多い。", domain: 'openness', aspect: 'openness', reversed: false },
    { id: 'o_ope_2', text: "芸術や音楽に深く没頭することがある。", domain: 'openness', aspect: 'openness', reversed: false },
    { id: 'o_ope_3', text: "想像力が豊かだ。", domain: 'openness', aspect: 'openness', reversed: false },
    { id: 'o_ope_4', text: "空想にふけることは時間の無駄だと思う。", domain: 'openness', aspect: 'openness', reversed: true },
    { id: 'o_ope_5', text: "変化よりも現状維持を好む。", domain: 'openness', aspect: 'openness', reversed: true },
];

// ==========================================
// Love Mode 専用: Attachment Style (10問)
// ECR-R Short Form ベース
// ==========================================
export const LOVE_QUESTIONS_JA: Question[] = [
    // Attachment Anxiety (不安)
    { id: 'l_anx_1', text: "パートナーに嫌われないかいつも心配だ。", domain: 'neuroticism', aspect: 'volatility', category: 'attachment_anxiety', reversed: false },
    { id: 'l_anx_2', text: "相手からの連絡が遅いと、見捨てられたのではないかと不安になる。", domain: 'neuroticism', aspect: 'withdrawal', category: 'attachment_anxiety', reversed: false },
    { id: 'l_anx_3', text: "私は相手が思うほど、相手は私を思っていないと感じる。", domain: 'neuroticism', aspect: 'withdrawal', category: 'attachment_anxiety', reversed: false },
    { id: 'l_anx_4', text: "パートナーへの独占欲が強い方だ。", domain: 'neuroticism', aspect: 'volatility', category: 'attachment_anxiety', reversed: false },
    { id: 'l_anx_5', text: "恋愛関係において、自分の価値を低く見積もってしまいがちだ。", domain: 'neuroticism', aspect: 'withdrawal', category: 'attachment_anxiety', reversed: false },

    // Attachment Avoidance (回避)
    { id: 'l_avo_1', text: "パートナーとあまりにも親密になりすぎると窮屈に感じる。", domain: 'extraversion', aspect: 'enthusiasm', category: 'attachment_avoidance', reversed: false },
    { id: 'l_avo_2', text: "人に頼るより、自分で解決したい。", domain: 'agreeableness', aspect: 'politeness', category: 'attachment_avoidance', reversed: false },
    { id: 'l_avo_3', text: "自分の深い感情をパートナーに見せるのは苦手だ。", domain: 'openness', aspect: 'openness', category: 'attachment_avoidance', reversed: false },
    { id: 'l_avo_4', text: "パートナーが必要以上に近づいてくると、距離を置きたくなる。", domain: 'agreeableness', aspect: 'compassion', category: 'attachment_avoidance', reversed: false },
    { id: 'l_avo_5', text: "誰かに依存するのは弱さの現れだと思う。", domain: 'conscientiousness', aspect: 'industriousness', category: 'attachment_avoidance', reversed: false },
];

// ==========================================
// Business Mode 専用: Performance & Motivation (10問)
// HEXACO (H-factor) & SDT (Self-Determination Theory) ベース
// ==========================================
export const BUSINESS_QUESTIONS_JA: Question[] = [
    // Machiavellianism / Low Honesty-Humility (マキャベリズム/正直さの逆)
    { id: 'b_mac_1', text: "自分の利益のためなら、多少のルール違反は構わない。", domain: 'agreeableness', aspect: 'politeness', category: 'machiavellianism', reversed: false },
    { id: 'b_mac_2', text: "人を利用してでも成功したいと思う。", domain: 'agreeableness', aspect: 'compassion', category: 'machiavellianism', reversed: false },
    { id: 'b_mac_3', text: "お世辞を言って相手に取り入るのが得意だ。", domain: 'extraversion', aspect: 'assertiveness', category: 'machiavellianism', reversed: false },

    // Egoism / Status Seeking (地位志向)
    { id: 'b_ego_1', text: "チームの成功より自分の評価が重要だ。", domain: 'extraversion', aspect: 'assertiveness', category: 'egoism', reversed: false },
    { id: 'b_ego_2', text: "高級なものやステータスのある地位に憧れる。", domain: 'extraversion', aspect: 'assertiveness', category: 'egoism', reversed: false },

    // Autonomy Orientation (自律性 - 内発的動機づけ)
    { id: 'b_aut_1', text: "新しいスキルを学ぶこと自体に喜びを感じる。", domain: 'openness', aspect: 'intellect', category: 'autonomy', reversed: false },
    { id: 'b_aut_2', text: "仕事の内容よりも、自分で決められる裁量が重要だ。", domain: 'openness', aspect: 'intellect', category: 'autonomy', reversed: false },
    { id: 'b_aut_3', text: "困難な課題に挑戦することにやりがいを感じる。", domain: 'conscientiousness', aspect: 'industriousness', category: 'autonomy', reversed: false },

    // External Regulation (外発的動機づけ)
    { id: 'b_ext_1', text: "上司からの評価や報酬がやる気の源泉だ。", domain: 'conscientiousness', aspect: 'industriousness', category: 'external_regulation', reversed: false },
    { id: 'b_ext_2', text: "失敗した時の罰や批判を避けるために働いている。", domain: 'neuroticism', aspect: 'withdrawal', category: 'external_regulation', reversed: false },
];

// 英語版プレースホルダー (構造は維持)
export const BIG_FIVE_QUESTIONS_EN: Question[] = [
    { id: 'n_vol_1', text: "I get angry easily.", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    // ... (Full translation would go here)
];
