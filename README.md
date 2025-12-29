# PsyLogic Core

**PsyLogic Core** は、ビッグファイブ性格特性とアタッチメント理論（愛着理論）に基づいた、没入型の深層心理分析アプリケーションです。
3Dグラフィックスによる視覚体験と、生成AIによるパーソナライズされた分析レポートを組み合わせ、ユーザーの深層心理を「高解像度」で可視化します。

## 🚀 主な機能

- **Dual Assessment Modes**:
  - **Love Mode**: 恋愛や対人関係における「愛着スタイル（不安型・回避型）」を診断。
  - **Business Mode**: 仕事やキャリアにおける「成長要因」と「阻害要因」を診断。
- **Immersive 3D Experience**: React Three Fiber を使用した、美しくインタラクティブな3D空間とパーティクルエフェクト。
- **Scientific Analysis**: 
  - ビッグファイブの10アスペクト尺度を使用。
  - SLOAN記法によるタイプ分類。
- **AI Integration**: Vercel AI SDK (Groq/LLM) を活用し、診断結果に基づいた詳細なアドバイスをリアルタイム生成。
- **Modern UI/UX**:
  - レスポンシブデザイン（Mobile / Desktop 完全対応）。
  - 日英多言語サポート。
  - SNSシェア機能。

## 🛠 技術スタック

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/), [Drei](https://github.com/pmndrs/drei)
- **Animation**: Framer Motion
- **State Management**: Zustand (Persist Middleware)
- **AI/LLM**: Vercel AI SDK, Groq API (Llama 3 / Mixtral etc.)
- **Charting**: Recharts

## 🏁 開発の始め方

1. **リポジトリのクローン**:
   ```bash
   git clone <repository-url>
   cd psyLogic-core
   ```

2. **依存関係のインストール**:
   ```bash
   npm install
   ```

3. **環境変数の設定**:
   `.env.local` ファイルを作成し、以下の変数を設定してください。
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **開発サーバーの起動**:
   ```bash
   npm run dev
   ```
   ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

## 📁 プロジェクト構造

```
src/
├── app/              # Next.js App Router ページ
├── components/       # UI コンポーネント
│   ├── 3d/           # R3F 3D オブジェクト (Hero, Crystal, Background)
│   ├── assessment/   # 診断プロセス用コンポーネント (Quiz, Progress)
│   └── result/       # 結果表示用コンポーネント (Chart, Report)
├── lib/
│   ├── data/         # 質問データ (日英対応)
│   ├── logic/        # 心理分析ロジック (BigFive, Attachment)
│   ├── store/        # Zustand ストア
│   └── i18n/         # 翻訳定義
└── docs/             # ドキュメント
```

## 📜 ライセンス

[MIT](LICENSE)
