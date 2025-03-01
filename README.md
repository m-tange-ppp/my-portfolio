# ポートフォリオサイト

Next.js で作成したポートフォリオサイトです。

## 機能

- 制作物の一覧表示
- 各プロジェクトの詳細情報表示
  - プロジェクト名
  - 説明文
  - スクリーンショット
  - 使用技術
  - プロジェクト URL へのリンク

## 技術スタック

- Framework: Next.js 14 (App Router)
- スタイリング: Tailwind CSS
- 画像最適化: Next/Image
- デプロイ: Vercel

## プロジェクト構成

```
src/
  ├── app/
  │   └── portfolio/
  │       ├── components/
  │       │   └── ProjectCard.tsx  # プロジェクトカードコンポーネント
  │       └── page.tsx             # ポートフォリオページ
  └── public/
      └── screenshot_*.png         # プロジェクトのスクリーンショット
```

## 開発環境のセットアップ

```bash
# パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いて確認できます。

## プロジェクトの追加方法

`src/app/portfolio/page.tsx`の`projects`配列に以下の形式でプロジェクト情報を追加します：

```typescript
{
  title: "プロジェクト名",
  description: "プロジェクトの説明",
  imageUrl: "/screenshot_プロジェクト名.png",
  projectUrl: "https://プロジェクトのURL",
  technologies: ["使用技術1", "使用技術2"]
}
```

---
