let commons1 = require('@private/lambda-commons');
let dynamoUtils = commons1.DynamoUtils;
module.exports = {
    tableName: "videopoker_cfg_levels",
    updateLevelByIdAndIdx: async function (kid, exp, totalexp, minbet, recommendbet, maxbet, coinbonus, coinamount, dailymessagereward, givencoinamount, basepigcoin,maxpigcoin,facebookcoins,dailysharinglimits,lv_honor_pts,basegoldpig,maxgoldpig,stakegear,basediamondpig,maxdiamondpig) {
        let params = {
            TableName: this.tableName,
            Key: {kid: kid},
            UpdateExpression: "SET exp = :exp, totalexp = :totalexp,minbet = :minbet,recommendbet = :recommendbet,maxbet = :maxbet,coinbonus = :coinbonus, coinamount =:coinamount,dailymessagereward = :dailymessagereward,givencoinamount = :givencoinamount,basepigcoin = :basepigcoin,maxpigcoin =:maxpigcoin,facebookcoins =:facebookcoins,dailysharinglimits=:dailysharinglimits,lv_honor_pts=:lv_honor_pts,basegoldpig=:basegoldpig,maxgoldpig=:maxgoldpig,stakegear=:stakegear,basediamondpig=:basediamondpig,maxdiamondpig=:maxdiamondpig",
            ExpressionAttributeValues: {
                ":exp": exp,
                ":totalexp": totalexp,
                ":minbet": minbet,
                ":recommendbet": recommendbet,
                ":maxbet": maxbet,
                ":coinbonus": coinbonus,
                ":coinamount": coinamount,
                ":dailymessagereward": dailymessagereward,
                ":givencoinamount": givencoinamount,
                ":basepigcoin": basepigcoin,
                ":maxpigcoin": maxpigcoin,
                ":facebookcoins": facebookcoins,
                ":dailysharinglimits":dailysharinglimits,
                ":lv_honor_pts":lv_honor_pts,
                ":basegoldpig":basegoldpig,
                ":maxgoldpig":maxgoldpig,
                ":stakegear":stakegear,
                ":basediamondpig":basediamondpig,
                ":maxdiamondpig":maxdiamondpig
            },
            // ExpressionAttributeNames: {"#t": "id"},
            ReturnValues: "UPDATED_NEW"
        };
        console.log(params);
        return await dynamoUtils.asyncUpdate(params);
    },
    findAch: async function () {
    let params = {
        TableName: this.tableName,
        KeyConditionExpression: "#t = :id",
        ExpressionAttributeValues: {
            ":id": 13100000
        },
        ExpressionAttributeNames: {"#t": "id"},
        ScanIndexForward: false
    };
    return await dynamoUtils.asyncQuery(params)
},
    findAchByid: async function (keyid) {
    let params = {
        TableName: this.tableName,
        KeyConditionExpression: "#t = :id and keyid = :keyid",
        ExpressionAttributeValues: {
            ":id": 13100000,
            ":keyid": keyid
        },
        ExpressionAttributeNames: {"#t": "id"},
        ScanIndexForward: false
    };
    return await dynamoUtils.asyncQuery(params)
},
};