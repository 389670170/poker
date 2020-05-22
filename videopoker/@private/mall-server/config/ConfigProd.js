module.exports = {
    /**
     * pg连接池配置
     */
    dbConfig: {
        conString: process.env['DB_CON_URL']
    },
    /**
     * pg连接池配置
     */
    // dbPoolConfig: {
    //     user: "",
    //     database: "",
    //     password: "",
    //     port: 5432,
    //     host: "",
    //     max: 30,
    //     min: 5,
    //     idleTimeoutMillis: 3000
    // },
    /**
     * dynamo相关配置
     */
    dynamoConfig: {
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
    },
    /**
     * sqs相关配置
     */
    sqsConfig: {
        region: "us-west-2",
        apiVersion: '2012-11-05',
        httpOptions: {
            connectTimeout: 1000,
            timeout: 1000
        },
        maxRetries: 0
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
    logLevel: 'error',
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