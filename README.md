hono を触ってみた

## refs

- https://github.com/honojs/hono-minimal
- https://yusukebe.com/posts/2022/hono-40-things/

## 作業ログ

```
npx wrangler generate try-hono honojs/hono-minimal
```

でひな形作ったが、パッケージが古かったのでアップデートした。

```
npx wrangler kv:namespace create COUNTERS
```

で KV を作って wrangler.toml に書き込み。

ローカルで src/index.html を開いてアクセスカウンターが動くのを確認。
