/** @format */

'use strict'

const assert = require('assert')

module.exports = app => {
    app.addSingleton('minio', createMinio)
}

function createMinio(config, app) {
    const Minio = app.config.minio.Minio || require('minio')
    let client

    assert(
        config.endPoint && config.port && config.accessKey !== undefined && config.secretKey !== undefined,
        `[egg-minio] 'endPoint: ${config.endPoint}', 'port: ${config.port}', 'accessKey: ${config.accessKey}', 'secretKey: ${config.secretKey}' are required on config`
    )
    app.logger.info('[egg-minio] server connecting minio://%s:%s', config.endPoint, config.port)
    client = new Minio.Client(config)

    // 应用启动前检查
    app.beforeStart(async () => {
        const list = await client.listBuckets()
        app.logger.info('[egg-minio] minio is ready')
        for (const item of list) app.logger.info('[egg-minio] find bucket: %s', item.name)
    })

    return client
}
