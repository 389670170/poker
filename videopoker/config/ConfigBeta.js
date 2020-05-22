module.exports = {
    /**
     * pg连接字符串配置
     */
    decodeType: 'ws',
    isProd: true,
    dbConfig: {
        conString: 'postgres://videopoker:sSrAgLxHWgS5iymicvNt@videopoker.cwkqbcxrsbsf.us-west-2.rds.amazonaws.com/video_poker'
    },
    /**
     * dynamo相关配置
     */
    dynamoConfig: {
        clientConfig: {
            region: "us-west-2",
            httpOptions: {
                connectTimeout: 1000,
                timeout: 1000
            },
            maxRetries: 0,
            sslEnabled: false,
            paramValidation: false,
            convertResponseTypes: false,
            apiVersion: "2012-08-10"
        }
    },
    /**
     * sqs相关配置
     */
    sqsConfig: {
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
            host: "videopoker-redis.ikr6qx.clustercfg.usw2.cache.amazonaws.com",
            port: 6379
        },
        cluster: {
            servers: [
                {
                    host: "videopoker-redis.ikr6qx.clustercfg.usw2.cache.amazonaws.com",
                    port: 6379
                }
            ],
            options: {
                detect_buffers: true
            }
        }
    },
    isOnline: true,
    isSandbox: true,
    logLevel: 'trace',
    firehoseConfig: {
        clientConfig: {
            region: 'us-west-2'
        },
        stream: 'videopoker',
        commonField: ['clientIp', 'deviceName', 'emailId', 'userId', 'adjustAdid', 'adjustIdfa', 'adjustGpsAdid'],
        firstIndex: 0,
        separator: '\t|\t'
    },
    lambdaConfig: {
        isInvokeDirect: true,
        localUrl: 'http://localhost:5006/slots/lambda/www',
        invokeAlias: 'PROD',
        clientConfig: {
            apiVersion: '2015-03-31',
            region: "us-west-2"
        }
    },
    mallSnapshotConfig: {
        tableName: 'videopoker_mall_goodsSnapshot'
    }
};

