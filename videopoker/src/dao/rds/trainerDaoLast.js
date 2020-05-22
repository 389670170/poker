"use strict";
const pg = require('pg');
const conString = require('../../../config/Config').dbConfig.conString;
module.exports = {
    client: null,
    pgConnect: async function () {
        this.client = new pg.Client(conString);
        await this.client.connect();
        return this.client;
    },
    asyncFind: async function (sql) {
        let upperCaseSql = sql.toUpperCase();
        if ((upperCaseSql.indexOf("UPDATE ") !== -1 || upperCaseSql.indexOf("DELETE ") !== -1)
            && upperCaseSql.toUpperCase().indexOf("WHERE ") === -1) {
            throw new Error(sql + " sql is error");
        }
        let client = await this.pgConnect();
        let result = null;
        try {
            result = await client.query(sql);
            let items = upperCaseSql.indexOf("SELECT ") !== -1 ? result.rows : result;
            client.end();
            return items;
        }
        catch (e) {
            client.end();
            if (client._ending) {
                await this.pgConnect();
            }
            throw e;
        }
    },
    asyncInsert: async function (tableName, data) {
        return (await this.asyncFind(this.buildInsertStatement(tableName, data))).rows;
    },
    buildInsertStatement: function (tableName, data) {
        let keys = '';
        let values = '';
        for (let key in data) {
            keys += `${key},`;
            let val = data[key];
            if (typeof val === 'string') {
                values += `'${val}',`;
            }
            else if (typeof val === 'object') {
                values += `'${JSON.stringify(val)}',`;
            }
            else {
                values += `${val},`;
            }
        }
        if (keys.length === 0 || values.length === 0) {
            throw new Error('buildInsertStatement failed for ' + tableName);
        }
        keys = keys.substr(0, keys.length - 1);
        values = values.substr(0, values.length - 1);
        // console.log("values:",values);
        return `insert into ${tableName} (${keys}) values (${values});`;
    },
    asyncInsertMany: async function (data) {
        return (await this.asyncFind(`insert into poker_combination (combination) values ('${data[0]}'),('${data[1]}'),('${data[2]}'),('${data[3]}'),('${data[4]}'),('${data[5]}'),('${data[6]}'),('${data[7]}'),('${data[8]}'),('${data[9]}'),('${data[10]}'),('${data[11]}'),('${data[12]}'),('${data[13]}'),('${data[14]}'),('${data[15]}'),('${data[16]}'),('${data[17]}'),('${data[18]}'),('${data[19]}'),('${data[20]}'),('${data[21]}'),('${data[22]}'),('${data[23]}'),('${data[24]}'),('${data[25]}'),('${data[26]}'),('${data[27]}'),('${data[28]}'),('${data[29]}');`)).rows;
    },
    queryMany: async function (firstId, secondId) {
        return (await this.asyncFind(`select * from poker_combination where id >=${firstId} and id <= ${secondId}`));
    }
};
