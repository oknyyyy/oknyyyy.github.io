---
title: Amazon Linux 2023 に Docker をインストール
description: Amazon Linux 2023 に Docker をインストールする手順をまとめます。
pubDate: 2026-11-18
tags: [AWS, EC2, Docker]
---

Amazon Linux 2023 に Docker をインストールする手順をまとめます。

インスタンスタイプは t4g (linux/arm64) を想定しています。

## 手順

### 0. 前準備

パッケージの更新

```shell
sudo dnf update
```

### 1. Docker インストール

```shell
sudo dnf install docker
sudo systemctl enable --now docker

docker --version
```

`docker` グループにユーザを追加 (ここでは `ec2-user`)

```shell
sudo usermod -aG docker ec2-user
```

グループの変更は今のセッションには反映されないため、一度ログアウトして入り直すか、次のコマンドで反映します。

```shell
newgrp docker
```

`sudo` なしで動くことを確認します。

```shell
docker run --rm hello-world
```

### 2. Docker Compose インストール

最新バージョンは [リリースページ](https://github.com/docker/compose/releases) を参照。

```shell
COMPOSE_VERSION=v5.8.0

sudo mkdir -p /usr/local/lib/docker/cli-plugins

sudo curl -fSL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-linux-aarch64" \
  -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose

docker compose version
```

### 3. Docker Buildx インストール

最新バージョンは [リリースページ](https://github.com/docker/buildx/releases) を参照。

```shell
BUILDX_VERSION=v0.39.0

sudo curl -fSL "https://github.com/docker/buildx/releases/download/${BUILDX_VERSION}/buildx-${BUILDX_VERSION}.linux-arm64" \
  -o /usr/local/lib/docker/cli-plugins/docker-buildx
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-buildx

docker buildx version
```
