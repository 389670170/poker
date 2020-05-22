module.exports = {
    /**
     *   数据解析类型
     *   ws：websocket，sfs：smartfox
     */
    decodeType: 'ws',
    //isProd: true,
    /**
     * pg连接字符串配置
     */
    dbConfig: {
        conString: "postgres://postgres:@10.10.10.10:5432/video_poker",
    },
    /**
     * dynamo相关配置
     */
    dynamoConfig: {
        endpoint: "http://10.10.10.7:9898",
        region: "cn-northwest-1",
        httpOptions: {
            connectTimeout: 10000,
            timeout: 10000
        },
        maxRetries: 0,
        sslEnabled: false,
        paramValidation: false,
        convertResponseTypes: false,
        apiVersion: "2012-08-10"
    },
    /**
     * sqs相关配置
     */
    sqsConfig: {
        endpoint: "http://10.10.10.7:9324",
        region: "us-west-2",
        apiVersion: '2012-11-05'
    },
    /**
     * redis相关配置
     */
    redisConfig: {
        useCluster: true,
        prefix: 'videoPoker_',
        single: {
            host: "10.10.10.7",
            port: 6381
        },
        cluster: {
            servers: [
                {
                    host: "10.10.10.7",
                    port: 6381
                },
                {
                    host: "10.10.10.7",
                    port: 6382
                },
                {
                    host: "10.10.10.7",
                    port: 6383
                }
            ],
            options: {
                detect_buffers: true
            },
            publicHost: "10.10.10.7"
        }
    },
    isOnline: false,
    logLevel: 'trace',
    firehoseConfig: {
        clientConfig: {
            region: 'us-west-2'
        },
        stream: 'test',
       // commonField: ['clientIp', 'deviceId', 'emailId', 'facebookId', 'userId', 'adjustAdid', 'adjustIdfa', 'adjustGpsAdid', 'platform'],
        firstIndex: 0,
        separator: '\t|\t'
    },
    lambdaConfig: {
        isInvokeDirect: true,
        localUrl: 'http://localhost:3000/tools/ws/www.js',
        invokeAlias: 'PROD',
        clientConfig: {
            apiVersion: '2015-03-31',
            region: "us-west-2"
        }
    },
    mallSnapshotConfig: {
    tableName: 'lobbyslots_mall_goodsSnapshot'
}
};
