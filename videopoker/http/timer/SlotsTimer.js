require('../../../config/Config');
let schedule = require('node-schedule');
let index = require('../../..');
require("../../../config/Config");

module.exports = {
  doSchedules: function () {
    // 每5分0秒执行
    schedule.scheduleJob('0 */5 * * * *', async () => {
      console.log('Time Schedule 0 */5 * * * *: ' + (new Date().toString()));
      let context = {};
      await index.handler({'data': {}, 'requestType': 'machineRank/scheduleCacheRoomBigWinRank'}, context, callback);
    });

    // 每5分30秒执行
    schedule.scheduleJob('30 */5 * * * *', async () => {
      console.log('Time Schedule 30 */5 * * * *:' + (new Date().toString()));
      let context = {};
      await index.handler({'data': {}, 'requestType': 'machineRank/scheduleCacheRoomBigWinRecord'}, context, callback);
    });

    // 每6分0秒执行
    schedule.scheduleJob('0 */6 * * * *', async () => {
      console.log('Time Schedule 0 */6 * * * *: ' + (new Date().toString()));
      let context = {};
      await index.handler({'data': {}, 'requestType': 'machineRank/scheduleCacheRoomTotalWinRank'}, context, callback);
    });

    // 每7分0秒执行
    schedule.scheduleJob('0 */7 * * * *', async () => {

    });

    // 每周1，0点15分执行
    schedule.scheduleJob('0 15 0 * * 1', async () => {
      console.log('Time Schedule 0 15 0 * * 1: ' + (new Date().toString()));
      let context = {};
      await index.handler({'data': {}, 'requestType': 'machineRank/scheduleClearRoomRankAll'}, context, callback);
    });

    // 每周1，0点30分执行
    schedule.scheduleJob('0 30 0 * * 1', () => {

    });

    schedule.scheduleJob('0 */1 * * * *', async () => {
      console.log('Time Schedule 0 */1 * * * *: ' + (new Date().toString()));
      let context = {};
      await index.handler({'data': {}, 'requestType': 'room/updateRoomInfo'}, context, callback);
    });
  }
};

function callback(error, data) {
  console.log(JSON.stringify(data, null, 2));
}