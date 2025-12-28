# **PsyLogic Core: Vibecoding Master Plan**

このドキュメントは、Next.js 16 \+ Three.jsを用いた高精度性格診断アプリ「PsyLogic Core」の開発を、AI（Cursor/Windsurf等）と共に進めるための包括的な設計書です。

## **1\. プロジェクト要件定義 (Requirements Definition)**

### **コンセプト**

* **名称:** PsyLogic Core  
* **体験:** 無機質なフォームではなく、深層心理の宇宙（Virtual Void）を旅する没入型体験。  
* **目的:**  
  * **Love Mode:** 恋愛スタイルの現状把握と的中率（アタッチメント理論）。  
  * **Business Mode:** 自己成長と行動変容（SDT/HEXACO）。  
* **コア機能:**  
  * ビッグファイブ10側面に基づく精密検査（60-100問）。  
  * 3D空間でのインタラクティブな回答体験。  
  * LLMによる超パーソナライズされた診断レポート生成。

## **2\. 技術スタック & アーキテクチャ (Tech Stack)**

AIにプロジェクトの基盤を理解させるための定義です。

* **Core Framework:** Next.js 16 (App Router)  
* **Language:** TypeScript  
* **Styling:** TailwindCSS  
* **UI Components:** shadcn/ui (Radix UI) \+ Lucide Icons  
* **3D / Creative:**  
  * three.js: 3D演算  
  * @react-three/fiber (R3F): Reactコンポーネント化  
  * @react-three/drei: 3Dヘルパー（Stars, Sparkles等）  
  * glsl-random: シェーダーエフェクト用（必要な場合）  
* **Animation:**  
  * framer-motion: UI遷移、テキストエフェクト  
* **State Management:** zustand (3Dシーンと回答状態の同期)  
* **AI Engine:** Vercel AI SDK (OpenAI GPT-4o)

## **3\. ディレクトリ構造設計 (Directory Structure)**

AIにファイルをどこに作成すべきか指示するためのマップです。

src/  
├── app/  
│   ├── layout.tsx        \# Global Layout (includes 3D Canvas Background)  
│   ├── page.tsx          \# Landing / Mode Selection  
│   ├── assessment/  
│   │   ├── page.tsx      \# Question UI Overlay  
│   │   └── layout.tsx    \# Assessment Specific Layout  
│   ├── result/  
│   │   └── page.tsx      \# Dashboard & AI Report  
│   └── api/  
│       └── generate/     \# LLM Streaming Endpoint  
├── components/  
│   ├── 3d/               \# R3F Components  
│   │   ├── StarField.tsx \# Background particles  
│   │   └── Crystal.tsx   \# Result object representation  
│   ├── ui/               \# shadcn/ui generic components  
│   ├── assessment/  
│   │   ├── QuestionCard.tsx  
│   │   └── ProgressBar.tsx  
│   └── result/  
│       ├── RadarChart.tsx  
│       └── AIReport.tsx  
├── lib/  
│   ├── logic/  
│   │   ├── bigFive.ts    \# Scoring algorithm (BFAS/BFI-2-J)  
│   │   ├── attachment.ts \# Scoring algorithm (ECR-R)  
│   │   └── norms.ts      \# Japanese Norm data (Mean/SD)  
│   ├── store/  
│   │   └── useQuizStore.ts \# Zustand store  
│   └── types/  
│       └── index.ts      \# Type definitions  
└── prompts/              \# LLM System Prompts

## **4\. データスキーマ (TypeScript Definitions)**

ロジックの一貫性を保つための型定義です。

// src/lib/types/index.ts

export type AssessmentMode \= 'LOVE' | 'BUSINESS';

// Big Five 10 Aspects Structure  
export interface BigFiveAspects {  
  neuroticism: { volatility: number; withdrawal: number };  
  agreeableness: { compassion: number; politeness: number };  
  conscientiousness: { industriousness: number; orderliness: number };  
  extraversion: { enthusiasm: number; assertiveness: number };  
  openness: { intellect: number; openness: number };  
}

// User Response Object  
export interface UserResponse {  
  questionId: string;  
  value: number; // 1-5 or 1-7  
  reversed: boolean; // Is reverse keyed?  
}

// Computed Result  
export interface AnalysisResult {  
  sloanType: string; // e.g. "RCOAI"  
  tScores: BigFiveAspects; // Normalized scores (Mean 50\)  
  attachment?: {  
    anxiety: number;  
    avoidance: number;  
    style: 'Secure' | 'Preoccupied' | 'Dismissing' | 'Fearful';  
  };  
  business?: {  
    honestyHumility: number; // HEXACO H-factor  
    motivationType: 'Autonomous' | 'Controlled' | 'Impersonal';  
  };  
}

## **5\. 開発ロードマップ (Development Roadmap)**

AIエディタに対して、どの順番でタスクを投げるかの計画です。

### **Phase 1: The Void (環境構築 & 3D基盤)**

* Next.js 16 プロジェクトの初期化。  
* Three.js (R3F) のセットアップ。  
* マウス操作に反応する「深淵（Void）」のようなパーティクル背景の実装。  
* Framer Motionを使った滑らかなページ遷移の実装。

### **Phase 2: The Engine (診断ロジック & UI)**

* Zustandストアの実装（回答状況の管理）。  
* 「Speed Mode」UIの実装（1問1答形式、キーボードショートカット対応）。  
* Awwwards級のUIコンポーネント作成（Glassmorphismカード、磁力ボタン）。  
* **Core Logic:** ビッグファイブ10側面およびアタッチメントスタイルの計算ロジック実装。

### **Phase 3: The Revelation (結果表示 & LLM)**

* 3Dオブジェクト（性格の結晶）の生成ロジック。  
* Rechartsを用いたレーダーチャートの実装。  
* Vercel AI SDKを用いた、リアルタイム・レポート生成機能の実装。

## **6\. バイブコーディング用プロンプト集 (Vibecoding Prompts)**

以下のプロンプトを順番にAIエディタに入力して開発を進めてください。

### **Prompt 1: プロジェクト初期化と3D背景**

@Workspace  
Next.js 16 (App Router), TypeScript, TailwindCSS, shadcn/ui を使用してプロジェクトの基盤を作成してください。  
また、\`framer-motion\` と \`@react-three/fiber\`, \`@react-three/drei\` をインストールしてください。

最初のタスクとして、アプリ全体の背景となる \`components/3d/VoidBackground.tsx\` を作成してください。  
要件:  
1\. 画面全体を覆うCanvas。  
2\. 宇宙空間のような暗いパーティクル表現（StarField）。  
3\. マウスの動きに合わせてパーティクルが微妙に揺らぐインタラクション。  
4\. 色調は Deep Dark Blue (\#020617) をベースにした神秘的な雰囲気。

### **Prompt 2: 診断エンジンのUI実装**

@Workspace  
\`src/lib/store/useQuizStore.ts\` にZustandストアを作成し、現在の質問インデックスと回答履歴を管理できるようにしてください。

次に、\`components/assessment/QuizContainer.tsx\` を作成してください。  
デザイン要件:  
1\. Glassmorphism（すりガラス）スタイルのカードを画面中央に配置。  
2\. 質問文を大きく表示。  
3\. Framer Motionを使い、回答するとカードが左に飛び去り、新しいカードが右から現れるアニメーション（AnimatePresence）。  
4\. キーボードの数字キー（1-5）でも回答できるようにする。

### **Prompt 3: 計算ロジックの実装（PDFの知見活用）**

@Workspace  
性格診断の計算ロジック \`src/lib/logic/bigFive.ts\` を実装してください。  
添付されているPDF（性格特性の測定と分類法.pdf）の知識に基づき、以下の機能を実装します。

1\. 逆転項目（Reverse Scoring）の処理: \`score \= (Max \+ Min) \- raw\`  
2\. 10側面（Aspects）ごとのRaw Score算出。  
3\. Tスコア（偏差値）への変換関数。  
   \- 仮のNorm（基準値）として、Mean=3.5, SD=0.7 をデフォルトで使用（後で調整可能に）。  
4\. SLOANタイプ（例: "SCOAI"）の判定ロジック。

### **Prompt 4: LLMレポート生成**

@Workspace  
Vercel AI SDKを使用して、診断結果に基づくパーソナライズされたレポートを生成するAPI \`app/api/generate/route.ts\` を作成してください。

System Promptの要件:  
あなたは熟練した心理分析官です。ユーザーの「SLOANタイプ」「10側面のスコア」「アタッチメントスタイル」を入力として受け取ります。  
\- Love Modeの場合: 恋愛においてなぜ失敗するか、どうすればうまくいくかを、少し辛口だが愛のあるトーンでアドバイスしてください。  
\- 出力はMarkdown形式で見やすく整形してください。  
