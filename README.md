# oknyyyy.dev

oknyyyyの個人サイトです。
AstroとTailwind CSSで作り、GitHub Pagesで公開しています。

## 必要なもの

- Node.js 26
- npm

## ローカル起動

```sh
mise install   # 初回のみ
npm install
npm run dev
```

## ビルド

```sh
npm run build    # dist/ に出力
npm run preview  # ビルド結果をローカルで確認
```

## デプロイ

`main` ブランチにpushすると、GitHub Actions (`.github/workflows/deploy.yml`) がビルドしてGitHub Pagesに公開します。
Actionsタブから手動で実行することもできます。
