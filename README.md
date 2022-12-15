# Pan's profile

<!-- LTeX: language=zh-TW -->

## 概述 / Abstract

這個 Profile 是 GitHub 上 README 的延伸，另外具有「簡歷」跟「作品集」的功能。

採 Next.js、Tailwind CSS，與設計師合作聯手打造出充滿細節、且有著舒適閱讀體驗的作品。

## 前言、介紹與心得 / Introduction & Opinions

我把這部份內容放在 blog 上面，可以點接下來的連結查看：
<https://link.pan93.com/personal-readme-introduction>

## 技術結構 / Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- SCSS

## 專案特點 / Features

- 採用前沿功能，如 Next.js 13 appdir 跟 Data-fetching suspense
- 導入 Docker 和 Next.js standalone mode
- 內建相當嚴格的 ESLint 跟 Prettier 設定
- 有以專案為單位的 VS Code 設定、延伸功能和 Code Snipeets
- 專案架構分明

## 開發 / Development

### 環境需求 // Requirements

- 需要 Node.js 16 以上版本，v18 最好。

### 設定環境變數 // Configuration

將 `.env.local.example` 拷貝為 `.env.local`，並填入相關資訊：

- `TWITTER_API_BEARER_TOKEN`: 可存取 [Twitter API v1.1](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api) 的 token。
- `GH_API_BEARER_TOKEN`: 可存取 [GitHub GraphQL API v4](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28) 的 Token。
- `SITE_URL`: 你網站的 URL，例如 `https://pan93.com`。

### 安裝套件 // Install dependencies

執行 corepack enable 啟用 pnpm，然後執行 `pnpm i` 安裝套件。

```bash
corepack enable
pnpm i
```

### Lint & Formatting

```bash
# Lint with ESLint
pnpm lint
# Format with Prettier
pnpm fmt
```

### 啟動開發伺服器 // Start development server

```bash
pnpm dev
```

## 部署 / Deploying

### 建置與執行生產版本 // Build & Serve for production

```bash
corepack enable
pnpm i -P
pnpm build
pnpm start
```

### 建置 Docker image // Build Docker image

```bash
docker build -t pan-homepage:latest .
```

### On Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpan93412%2Fhomepage&env=TWITTER_API_BEARER_TOKEN,GH_API_BEARER_TOKEN)

## 貢獻 / Contributing

請參閱 [./CONTRIBUTING.md](./CONTRIBUTING.md)。本檔案包含樣式指南等貢獻須知文件。

## TODOs

See [./TODO.md](./TODO.md).

## License

AGPL-3.0-only
