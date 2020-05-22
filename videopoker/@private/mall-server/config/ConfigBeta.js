module.exports = {
    /**
     * pg连接字符串配置
     */
    dbConfig: {
        conString: "postgres://postgres:password@172.31.12.177:5432/winningslots"
    },
    /**
     * dynamo相关配置
     */
    dynamoConfig: {
        region: "cn-northwest-1",
        httpOptions: {
            connectTimeout: 1000,
            timeout: 1000
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
        region: "cn-northwest-1",
        apiVersion: '2012-11-05'
    },
    /**
     * redis相关配置
     */
    redisConfig: {
        host: "10.10.10.7",
        port: 63792
    },
    local: false,
    isOnline: true,
    logLevel: 'trace',
    firehoseConfig: {
        clientConfig: {
            region: 'us-west-2'
        },
        stream: 'test',
        commonField: ['clientIp', 'deviceName', 'emailId', 'userId', 'adjustAdid', 'adjustIdfa', 'adjustGpsAdid'],
        firstIndex: 0,
        separator: '\t|\t'
    },
    mallSnapshotConfig: {
        tableName: ''
    }
};
