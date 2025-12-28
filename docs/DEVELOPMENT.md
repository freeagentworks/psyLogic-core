# 開発ガイド

## 概要
psyLogic-core は、ビッグファイブ性格特性、愛着スタイル、行動変容 (HEXACO/SDT) を組み合わせた、高忠実度の 3D インタラクティブ体験を提供する心理診断プラットフォームです。

## 技術スタック
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui, Lucide Icons, Radix UI
- **Animation**: framer-motion
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **State Management**: Zustand
- **AI/LLM**: Vercel AI SDK (OpenAI GPT-4o)

## ディレクトリ構造
```
src/
├── app/
│   ├── layout.tsx        # グローバルレイアウト (3D Canvas 背景を含む)
│   ├── page.tsx          # ランディング / モード選択
│   ├── assessment/       # 質問 UI オーバーレイ
│   ├── result/           # ダッシュボード & AI レポート
│   └── api/              # API ルート (LLM ストリーミング)
├── components/
│   ├── 3d/               # R3F コンポーネント (VoidBackground, Crystal)
│   ├── ui/               # shadcn/ui 汎用コンポーネント
│   ├── assessment/       # クイズ関連コンポーネント
│   └── result/           # チャート & レポート関連
├── lib/
│   ├── logic/            # 計算アルゴリズム (Big Five, Attachment)
│   ├── store/            # Zustand ストア
│   └── types/            # 型定義
└── prompts/              # LLM システムプロンプト
```

## 開発ワークフロー
1.  **プロジェクト初期化 (Phase 1)**: セットアップコマンドを実行します。
2.  **開発サーバー**: `npm run dev`
3.  **UI コンポーネント**: `npx shadcn@latest add [component]` を使用して追加します。
4.  **AI プロンプト**: 開発を進めるための AI アシスタントへの指示は `syLogic_Core_Vibecoding_Master_Plan.md` の "Vibecoding Prompts" を参照してください。

## 注意事項
- `.gitignore` で node_modules が除外されていることを確認してください。
- アクセシビリティのためにセマンティック HTML と適切な ARIA ラベルを使用してください。
