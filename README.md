# react-training
## 概要
TODOアプリの実装を通してReact-TypeScriptの理解を深める

## 進め方
- 下記に示す機能要件を`getting-started`ブランチをベースに実装
- データ管理については、初めはState管理（フェーズ1）とする。その後、mock管理（フェーズ2）→ローカルデータベース(DB)管理(フェーズ3)に切り替える。

### 機能要件
- TODOタスクが入力できる
- TODOタスクを追加できる
- TODOタスク一覧を表示できる

### 機能要件（Enhance）
こっちは余裕があれば
- TODOタスクに完了マークがつけられる
- ローディング
- デザイン

### データ管理
- (フェーズ１)Component内でState管理
- (フェーズ２)mock管理
- (フェーズ３)ローカルサーバー管理

# 説明

## ブランチ
- `master`: Amplify接続ブランチ（※masterブランチ更新すると自動でAmplify環境を更新）
- `getting-started`: 開発ベースブランチ

## 開始手順
- 本リポジトリクローン（`git clone https://github.com/masashi-morimoto-ambl/react-training.git`）
- `getting-started`ブランチをチェックアウト（`git fetch origin getting-started && git checkout getting-started`）
- 作業ブランチ作成（`git checkout -b 作業ブランチ名`)
- `yarn install`

## アプリ開始
データをmock管理とする場合
```
$ yarn dev:mock
```
データをdockerDB管理とする場合
```
$ yarn dev
```

## DB構築
### 1. イメージ作成＆軌道
```
$ cd db
$ docker compose up -d --build
```

### 2. テーブル作成
```
$ docker compose exec awscli /bin/sh
```
(コンテナ内)
```
$ ./createTable.sh
```

## デプロイ
1. `master`ブランチ向けPR作成
2. PRマージ
  
  ※マージ後、自動でAmplify環境アップデート
