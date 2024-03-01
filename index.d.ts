import * as Minio from 'minio'

declare module 'egg' {
    interface Application {
        minio: Minio.Client
    }

    interface EggMinioConfig {
        client: Minio.ClientOptions
    }

    interface EggAppConfig {
        minio: EggMinioConfig
    }
}
