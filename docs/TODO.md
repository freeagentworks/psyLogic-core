# 開発 TODO リスト

## Phase 1: The Void (環境構築 & 3D基盤)
- [x] Next.js 16 プロジェクトの初期化 (App Router, TypeScript, TailwindCSS)
- [x] 依存関係のインストール: `framer-motion`, `@react-three/fiber`, `@react-three/drei`, `zustand`, `lucide-react`, `clsx`, `tailwind-merge`
- [x] `shadcn/ui` の設定
- [x] 3D Canvas を含むグローバルレイアウトの実装
- [x] `components/3d/VoidBackground.tsx` の作成 (パーティクルエフェクト, マウスインタラクション)
- [x] Framer Motion を使用したページ遷移の設定

## Phase 2: The Engine (ロジック & UI)
- [x] Zustand ストアのセットアップ (`src/lib/store/useQuizStore.ts`)
- [x] `QuestionCard` コンポーネントの実装 (Glassmorphism, AnimatePresence)
- [x] `ProgressBar` コンポーネントの実装
- [x] ビッグファイブ計算ロジックの実装 (`src/lib/logic/bigFive.ts`)
- [x] 愛着スタイル計算ロジックの実装 (`src/lib/logic/attachment.ts`)
- [x] モード選択ページ (Landing) の作成

## Phase 3: The Revelation (結果表示 & LLM)
- [x] 結果ページレイアウトの実装
- [x] `recharts` (またはカスタム SVG/Canvas) を使用したレーダーチャートの作成
- [x] 結果に基づいた 3D クリスタルオブジェクトの生成処理
- [x] レポート生成のための Vercel AI SDK のセットアップ
- [x] API ルート `app/api/generate/route.ts` の作成
- [x] UI/UX の仕上げ (アニメーション, 調整)

## Phase 4: Release & Optimization (リリース & 最適化)
- [x] SEO 最適化 (Metadata)
- [ ] パフォーマンスチューニング (3D アセット, バンドルサイズ)
- [ ] Vercel へのデプロイ
