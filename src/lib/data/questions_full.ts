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
// 英語版データ
export const BIG_FIVE_QUESTIONS_EN: Question[] = [
    // --- Neuroticism ---
    // Volatility
    { id: 'n_vol_1', text: "I get confused or annoyed by small things.", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    { id: 'n_vol_2', text: "I find it difficult to control my emotions.", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    { id: 'n_vol_3', text: "My mood changes easily.", domain: 'neuroticism', aspect: 'volatility', reversed: false },
    { id: 'n_vol_4', text: "I rarely get angry.", domain: 'neuroticism', aspect: 'volatility', reversed: true },
    { id: 'n_vol_5', text: "I am a calm person.", domain: 'neuroticism', aspect: 'volatility', reversed: true },

    // Withdrawal
    { id: 'n_wit_1', text: "I often feel anxious about the future.", domain: 'neuroticism', aspect: 'withdrawal', reversed: false },
    { id: 'n_wit_2', text: "I tend to think the worst will happen.", domain: 'neuroticism', aspect: 'withdrawal', reversed: false },
    { id: 'n_wit_3', text: "I get discouraged easily.", domain: 'neuroticism', aspect: 'withdrawal', reversed: false },
    { id: 'n_wit_4', text: "I am confident in myself.", domain: 'neuroticism', aspect: 'withdrawal', reversed: true },
    { id: 'n_wit_5', text: "I handle pressure well.", domain: 'neuroticism', aspect: 'withdrawal', reversed: true },

    // --- Agreeableness ---
    // Compassion
    { id: 'a_com_1', text: "I am sensitive to the feelings of others.", domain: 'agreeableness', aspect: 'compassion', reversed: false },
    { id: 'a_com_2', text: "I cannot ignore people who are in trouble.", domain: 'agreeableness', aspect: 'compassion', reversed: false },
    { id: 'a_com_3', text: "I listen to others with empathy.", domain: 'agreeableness', aspect: 'compassion', reversed: false },
    { id: 'a_com_4', text: "I am not very interested in others' problems.", domain: 'agreeableness', aspect: 'compassion', reversed: true },
    { id: 'a_com_5', text: "I have been told I am cold-hearted.", domain: 'agreeableness', aspect: 'compassion', reversed: true },

    // Politeness
    { id: 'a_pol_1', text: "I respect authority and superiors.", domain: 'agreeableness', aspect: 'politeness', reversed: false },
    { id: 'a_pol_2', text: "I avoid conflict with others.", domain: 'agreeableness', aspect: 'politeness', reversed: false },
    { id: 'a_pol_3', text: "I am careful with my words.", domain: 'agreeableness', aspect: 'politeness', reversed: false },
    { id: 'a_pol_4', text: "I speak my mind clearly.", domain: 'agreeableness', aspect: 'politeness', reversed: true },
    { id: 'a_pol_5', text: "I try to win arguments.", domain: 'agreeableness', aspect: 'politeness', reversed: true },

    // --- Conscientiousness ---
    // Industriousness
    { id: 'c_ind_1', text: "I always carry out my plans.", domain: 'conscientiousness', aspect: 'industriousness', reversed: false },
    { id: 'c_ind_2', text: "I don't waste time and act efficiently.", domain: 'conscientiousness', aspect: 'industriousness', reversed: false },
    { id: 'c_ind_3', text: "I allow myself to persist until the goal is reached.", domain: 'conscientiousness', aspect: 'industriousness', reversed: false },
    { id: 'c_ind_4', text: "I procrastinate on things I should do.", domain: 'conscientiousness', aspect: 'industriousness', reversed: true },
    { id: 'c_ind_5', text: "I get distracted easily.", domain: 'conscientiousness', aspect: 'industriousness', reversed: true },

    // Orderliness
    { id: 'c_ord_1', text: "I like to keep things organized.", domain: 'conscientiousness', aspect: 'orderliness', reversed: false },
    { id: 'c_ord_2', text: "I follow rules and procedures strictly.", domain: 'conscientiousness', aspect: 'orderliness', reversed: false },
    { id: 'c_ord_3', text: "I pay attention to details.", domain: 'conscientiousness', aspect: 'orderliness', reversed: false },
    { id: 'c_ord_4', text: "I don't mind a messy room.", domain: 'conscientiousness', aspect: 'orderliness', reversed: true },
    { id: 'c_ord_5', text: "I do things in a rough manner.", domain: 'conscientiousness', aspect: 'orderliness', reversed: true },

    // --- Extraversion ---
    // Enthusiasm
    { id: 'e_ent_1', text: "I make friends easily.", domain: 'extraversion', aspect: 'enthusiasm', reversed: false },
    { id: 'e_ent_2', text: "I love large parties and crowds.", domain: 'extraversion', aspect: 'enthusiasm', reversed: false },
    { id: 'e_ent_3', text: "People say I'm always smiling and happy.", domain: 'extraversion', aspect: 'enthusiasm', reversed: false },
    { id: 'e_ent_4', text: "I prefer being alone.", domain: 'extraversion', aspect: 'enthusiasm', reversed: true },
    { id: 'e_ent_5', text: "I am not good at expressing my emotions.", domain: 'extraversion', aspect: 'enthusiasm', reversed: true },

    // Assertiveness
    { id: 'e_ass_1', text: "I like to take charge.", domain: 'extraversion', aspect: 'assertiveness', reversed: false },
    { id: 'e_ass_2', text: "I can assert my opinion strongly.", domain: 'extraversion', aspect: 'assertiveness', reversed: false },
    { id: 'e_ass_3', text: "I am good at persuading people.", domain: 'extraversion', aspect: 'assertiveness', reversed: false },
    { id: 'e_ass_4', text: "I dislike being the center of attention.", domain: 'extraversion', aspect: 'assertiveness', reversed: true },
    { id: 'e_ass_5', text: "I prefer to follow others' lead.", domain: 'extraversion', aspect: 'assertiveness', reversed: true },

    // --- Openness/Intellect ---
    // Intellect
    { id: 'o_int_1', text: "I understand things quickly.", domain: 'openness', aspect: 'intellect', reversed: false },
    { id: 'o_int_2', text: "I enjoy thinking about abstract ideas.", domain: 'openness', aspect: 'intellect', reversed: false },
    { id: 'o_int_3', text: "I enjoy philosophical discussions.", domain: 'openness', aspect: 'intellect', reversed: false },
    { id: 'o_int_4', text: "I avoid reading difficult material.", domain: 'openness', aspect: 'intellect', reversed: true },
    { id: 'o_int_5', text: "I don't like to deal with complex problems.", domain: 'openness', aspect: 'intellect', reversed: true },

    // Openness
    { id: 'o_ope_1', text: "I am often moved by the beauty of nature.", domain: 'openness', aspect: 'openness', reversed: false },
    { id: 'o_ope_2', text: "I get deeply immersed in art or music.", domain: 'openness', aspect: 'openness', reversed: false },
    { id: 'o_ope_3', text: "I have a vivid imagination.", domain: 'openness', aspect: 'openness', reversed: false },
    { id: 'o_ope_4', text: "I think daydreaming is a waste of time.", domain: 'openness', aspect: 'openness', reversed: true },
    { id: 'o_ope_5', text: "I prefer the status quo over change.", domain: 'openness', aspect: 'openness', reversed: true },
];

export const LOVE_QUESTIONS_EN: Question[] = [
    // Attachment Anxiety
    { id: 'l_anx_1', text: "I worry that my partner will stop loving me.", domain: 'neuroticism', aspect: 'volatility', category: 'attachment_anxiety', reversed: false },
    { id: 'l_anx_2', text: "I worry about being abandoned if I don't hear from them.", domain: 'neuroticism', aspect: 'withdrawal', category: 'attachment_anxiety', reversed: false },
    { id: 'l_anx_3', text: "I feel that my partner doesn't care about me as much as I care about them.", domain: 'neuroticism', aspect: 'withdrawal', category: 'attachment_anxiety', reversed: false },
    { id: 'l_anx_4', text: "I am very possessive.", domain: 'neuroticism', aspect: 'volatility', category: 'attachment_anxiety', reversed: false },
    { id: 'l_anx_5', text: "I tend to underestimate my worth in relationships.", domain: 'neuroticism', aspect: 'withdrawal', category: 'attachment_anxiety', reversed: false },

    // Attachment Avoidance
    { id: 'l_avo_1', text: "I feel suffocated when a partner gets too close.", domain: 'extraversion', aspect: 'enthusiasm', category: 'attachment_avoidance', reversed: false },
    { id: 'l_avo_2', text: "I prefer to solve things myself rather than relying on others.", domain: 'agreeableness', aspect: 'politeness', category: 'attachment_avoidance', reversed: false },
    { id: 'l_avo_3', text: "I am not comfortable showing my deep feelings to partners.", domain: 'openness', aspect: 'openness', category: 'attachment_avoidance', reversed: false },
    { id: 'l_avo_4', text: "I want to pull away when a partner gets too close.", domain: 'agreeableness', aspect: 'compassion', category: 'attachment_avoidance', reversed: false },
    { id: 'l_avo_5', text: "I think depending on others is a sign of weakness.", domain: 'conscientiousness', aspect: 'industriousness', category: 'attachment_avoidance', reversed: false },
];

export const BUSINESS_QUESTIONS_EN: Question[] = [
    // Machiavellianism / Low Honesty-Humility
    { id: 'b_mac_1', text: "I don't mind cutting corners to get ahead.", domain: 'agreeableness', aspect: 'politeness', category: 'machiavellianism', reversed: false },
    { id: 'b_mac_2', text: "I am willing to use others to succeed.", domain: 'agreeableness', aspect: 'compassion', category: 'machiavellianism', reversed: false },
    { id: 'b_mac_3', text: "I am good at flattering people when it serves a purpose.", domain: 'extraversion', aspect: 'assertiveness', category: 'machiavellianism', reversed: false },

    // Egoism / Status Seeking
    { id: 'b_ego_1', text: "My own success is more important than the team's.", domain: 'extraversion', aspect: 'assertiveness', category: 'egoism', reversed: false },
    { id: 'b_ego_2', text: "I admire luxury and high status positions.", domain: 'extraversion', aspect: 'assertiveness', category: 'egoism', reversed: false },

    // Autonomy Orientation
    { id: 'b_aut_1', text: "I find joy in the act of learning new skills.", domain: 'openness', aspect: 'intellect', category: 'autonomy', reversed: false },
    { id: 'b_aut_2', text: "Autonomy in my work is more important than the content.", domain: 'openness', aspect: 'intellect', category: 'autonomy', reversed: false },
    { id: 'b_aut_3', text: "I find it rewarding to tackle difficult challenges.", domain: 'conscientiousness', aspect: 'industriousness', category: 'autonomy', reversed: false },

    // External Regulation
    { id: 'b_ext_1', text: "I am motivated mainly by my boss's approval and rewards.", domain: 'conscientiousness', aspect: 'industriousness', category: 'external_regulation', reversed: false },
    { id: 'b_ext_2', text: "I work primarily to avoid criticism or punishment.", domain: 'neuroticism', aspect: 'withdrawal', category: 'external_regulation', reversed: false },
];
