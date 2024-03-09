# egg-minio-typescript

## Install

```bash
npm i egg-minio-typescript --save

# or

yarn add egg-minio-typescript
```

## Usage

```js
// {app_root}/config/plugin.js
exports.minio = {
  enable: true,
  package: "egg-minio-typescript",
};
```

## Configuration

```js
// {app_root}/config/config.default.js
config.minio = {
  client: {
    endPoint: MINIO_END_POINT,
    port: parseInt(MINIO_PORT),
    useSSL: false,
    accessKey: MINIO_ACCESS_KEY,
    secretKey: MINIO_SECRET_KEY,
  },
};
```

## License

[MIT](LICENSE)
