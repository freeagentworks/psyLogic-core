# **Project Canvas: PsyLogic Core (High-Precision Immersive Personality Analysis)**

## **1\. プロジェクト概要 (Project Overview)**

* **プロジェクト名:** PsyLogic Core  
* **コンセプト:** "A Journey into Your Psyche"（深層心理への旅）。単なるアンケートフォームではなく、自己の内面を探索する没入型デジタル体験。  
* **コアバリュー:**  
  * **Academic Precision:** ビッグファイブ10側面（Big Five Aspects）やアタッチメント理論に基づく、妥協のない学術的精度。  
  * **Immersive Experience:** Three.jsとFramer Motionを駆使した、Awwwards受賞レベルの3D空間演出により、100問近い回答負荷をエンターテインメントに昇華させる。  
* **ターゲット & モード:**  
  1. **Love Mode (恋活・パートナーシップ):** 「怖いほど当たる」現状把握と、恋愛スタイルの深層分析。  
  2. **Business Mode (自己成長・ビジネス):** 「行動が変わる」実用性と、モチベーション源泉の特定。

## **2\. 技術スタック (Tech Stack)**

* **Framework:** Next.js 16 (App Router)  
* **Language:** TypeScript  
* **Styling:** TailwindCSS  
* **UI Library:** shadcn/ui (Radix UI base, Glassmorphism customization)  
* **3D Environment:**  
  * three.js  
  * @react-three/fiber (R3F)  
  * @react-three/drei (Useful helpers like Stars, Sparkles)  
* **Animation:**  
  * framer-motion (UI transitions, layout animations)  
  * gsap (Optional: for complex timeline sequences if needed)  
* **State Management:** zustand (Progress tracking, 3D scene state)  
* **AI Integration:** Vercel AI SDK (OpenAI GPT-4o) for dynamic report generation.

## **3\. UX/UI デザインコンセプト (The "Ethereal Void")**

ユーザー体験は、無機質なフォームではなく「宇宙空間」や「精神の深淵」を漂うような旅として設計する。

* **Visual Metaphor:**  
  * **Start:** 静寂で暗い空間（Deep Space）。  
  * **Progress:** 質問に答えるたびに、空間内のパーティクル（粒子）が集まり、色が変化する。  
    * *Love Mode:* 暖色系（Deep Pink, Purple, Soft Gold）のオーロラのようなエフェクト。  
    * *Business Mode:* 寒色系（Cyan, Teal, Electric Blue）の幾何学的なグリッドや星座。  
  * **Result:** 診断結果の性格タイプを表す「結晶（Crystal）」または「多面体」が3D空間に生成される。  
* **Interaction Design:**  
  * **Speed Mode:** 1画面1質問。回答ボタンを押すと即座に次へ遷移（Framer Motion AnimatePresence \+ layoutId）。  
  * **Micro-interactions:** ボタンホバー時の磁力効果（Magnetic effect）、回答時の波紋エフェクト。  
  * **Keyboard Shortcuts:** 数字キー（1-5）での回答をサポートし、リズム感を損なわないようにする。

## **4\. 機能要件とアルゴリズム (Core Logic)**

### **Phase 1: オンボーディング**

* 3Dイントロダクションとモード選択。  
* ユーザー属性入力（年齢、性別、職業） \- *※ノーム（基準値）比較のため必須*。

### **Phase 2: コア分析（共通エンジン）**

* **モデル:** ビッグファイブ10側面（Big Five Aspects Scale / BFI-2-J ベース）  
* **項目数:** 60問（BFI-2-J）〜100問（BFAS）  
* **ロジック:**  
  * **逆転項目処理 (Reverse Scoring):** Score \= (Max \+ Min) \- RawValue  
  * **10側面の算出:** 各ドメイン（外向性など）を2つの側面（熱意・自己主張など）に分解してスコアリング。  
  * **SLOANタイプ判定:** スコアの高低に基づき、32タイプ（例: SCOAI）に分類。

### **Phase 3: 特化分析（ブランチ）**

* **分岐A: Love Mode**  
  * **モデル:** 成人アタッチメント尺度 (ECR-R)  
  * **ロジック:** 「不安スコア」と「回避スコア」の2軸座標を算出。4つのアタッチメントスタイル（安定、不安、拒絶回避、恐れ回避）を判定。  
* **分岐B: Business Mode**  
  * **モデル:** HEXACO（H因子: 正直・謙虚さ） \+ SDT（因果志向性）  
  * **ロジック:** 利己的/利他的傾向と、モチベーションタイプ（自律的/統制的）を判定。

### **Phase 4: 結果表示とAIレポート**

* **ダイナミック・レーダーチャート:** Recharts等を使い、3D背景の上にガラスモーフィズムのパネルでグラフを表示。  
* **LLM生成レポート:**  
  * **Input:** ユーザーのSLOANタイプ、10側面のTスコア、アタッチメントスタイル、属性。  
  * **Prompt:** 「あなたは熟練した心理分析官です。このユーザーのスコア（外向性は高いがアタッチメント不安も高い）に基づき、恋愛で自爆しやすいパターンとその対策を、辛口だが愛のあるトーンで解説してください。」  
  * **Streaming UI:** タイピングアニメーションで診断結果が表示される。

## **5\. データ構造定義 (TypeScript Schema)**

// types/assessment.ts

export type AssessmentMode \= 'LOVE' | 'BUSINESS';

// Big Five 10 Aspects  
export interface BigFiveScores {  
  // Neuroticism  
  volatility: number;  
  withdrawal: number;  
  // Agreeableness  
  compassion: number;  
  politeness: number;  
  // Conscientiousness  
  industriousness: number;  
  orderliness: number;  
  // Extraversion  
  enthusiasm: number;  
  assertiveness: number;  
  // Openness/Intellect  
  intellect: number;  
  openness: number;  
}

export interface UserResult {  
  userId: string;  
  mode: AssessmentMode;  
  sloanType: string; // e.g., "RCOAI"  
  scores: {  
    raw: Record\<string, number\>; // QuestionID \-\> Value map  
    bigFive: BigFiveScores;      // T-Scores (Deviation)  
    attachment?: {               // For Love Mode  
      anxiety: number;  
      avoidance: number;  
      style: 'Secure' | 'Preoccupied' | 'Dismissing' | 'Fearful';  
    };  
    business?: {                 // For Business Mode  
      honestyHumility: number;  
      autonomyOrientation: number;  
    };  
  };  
  timestamp: Date;  
}  
