# SFSObject2Native
This project provides a way of conversion between SFSObject and native data object like JSON.

### deps
This project run with node.js, you need install it.

### useage
You can just run the make to see the test.

>./make

### proto file
```json
{
  // 双下划线命名由本描述文件保留，有特殊含义，请避免使用
  // 宏（类型常量）定义
  "__macros": {
    "__namespace": "GameEnum",  // 枚举值命名空间
    "__defines": {  // 定义
      "GameStageType": {  // 游戏阶段类型
        "NON": 0,
        "IDLE": 1,
        "NORMAL": 2,
        "FIGHT": 3,
        "SETTLE": 4
      },
      "MapDetail": {
        "1": "MapDetailGold",
        "3": "MapDetailWood",
        "5": "MapDetailWater",
        "7": "MapDetailFire",
        "9": "MapDetailSoil"
      }
    }
  },
  // 协议定义
  // __type 可以为如下字符串内容：
  // bool, byte, short, int, long, float, double, number, string, {}, []
  // 这两个 __type 比较特殊
  // {} - object
  // [] - array
  // ---------------------
  // SFSOBJType    JSType
  //  NULL          object
  //  BOOL          boolean
  //  BYTE          number
  //  SHORT         number
  //  INT           number
  //  LONG          number
  //  FLOAT         number
  //  DOUBLE        number
  //  UTF-STRING    string
  //  SFSOBJECT     object
  //  SFSARRAY      object
  "__common": { // 公用结构
    "MapInfo": {
      "id": "int, MapInfo_id", // 地图 id，整型，并做 tag MapInfo_id ，方便后面引用
      "idx": "int", // 地图排序
      "limit": "int", // 地图等级限制
      "download_url": "string", // 地图下载 url
      "test_info": "TestInfo", // 引用公用类型 test_info
      "map_detail": "GameEnum.MapDetail, MapInfo_id" // 通过 tag MapInfo_id 来确定具体引用哪种类型，类似于枚举
    },
    "TestInfo": {
      "info": "string"
    }
  },
  "__rpc": { // RPC 协议
    "Login": { // 登录协议
      "__req": {
        "uuid": "string"
      },
      "__rsp": {
        "user_base": { // 用户基础信息
          "uin": "string", // 用户信息标志 
          "name": "string", // 用户名
          "exp": "number", // 用户经验, 服务器下发下来的是数字，但是具体类型不确定
          "level": "int" // 用户等级
        },
        "game_info": { // 游戏机信息
          "maps": [ // 地图列表，item 引用类型 MapInfo
            "MapInfo"
          ],
          "activities": [ //活动列表，匿名类型（未命名的类型，其他地方不能引用）
            {
              "type": "int", // 活动类型
              "limit": "int", // 活动等级限制
              "reward": "long" // 活动奖励 
            }
          ]
        }
      }
    }
  }
}
```

### auto generate file

* 4C++ (TODO)

* 4Java (TODO)

* 4JavaScript

  - GameEnum.js

    ```JavaScript
    // This is a auto generate file, don't change it!
    module.exports = {}

    let GameStageType = {
      NON: 0,
      IDLE: 1,
      NORMAL: 2,
      FIGHT: 3,
      SETTLE: 4
    };
    module.exports["GameStageType"] = GameStageType;

    let MapDetail = {
      1: "MapDetailGold",
      3: "MapDetailWood",
      5: "MapDetailWater",
      7: "MapDetailFire",
      9: "MapDetailSoil"
    };
    module.exports["MapDetail"] = MapDetail;
    ```
  
  - LoginParser.js
  
      see the test output

  - MapInfoParser.js

    ```JavaScript
    // This is a auto generate file, don't change it!


    module.exports = {}

    let _encode = function (dataIn) {
      let MapInfo = new SFS2X.SFSObject();
      let MapInfo_tag = {};
      MapInfo.put("id", dataIn.id, 4);
      MapInfo_tag["MapInfo_id"] = dataIn.id;
      MapInfo.put("idx", dataIn.idx, 4);
      MapInfo.put("limit", dataIn.limit, 4);
      MapInfo.put("download_url", dataIn.download_url, 8);
      let __TestInfoParser = require("TestInfoParser");
      let MapInfo_test_info = __TestInfoParser.encode(dataIn.test_info);
      MapInfo.put(MapInfo_test_info, 17);
      let __GameEnum = require("GameEnum");
      let __MapDetail = __GameEnum["MapDetail"];
      let __MapDetailParser = require(__MapDetail[MapInfo_tag["MapInfo_id"]]);
      let MapInfo_map_detail = __MapDetailParser.encode(dataIn.map_detail);
      MapInfo.put(MapInfo_map_detail, 17);
      return MapInfo;
    };
    module.exports["encode"] = _encode;

    let _decode = function (dataIn) {
      let MapInfo = {};
      let MapInfo_tag = {};
      MapInfo["id"] = dataIn.get("id", 4);
      MapInfo_tag["MapInfo_id"] = MapInfo;
      MapInfo["idx"] = dataIn.get("idx", 4);
      MapInfo["limit"] = dataIn.get("limit", 4);
      MapInfo["download_url"] = dataIn.get("download_url", 8);
      let MapInfo_test_info_in = dataIn.get("test_info", 17);
      let MapInfo_test_info_out = null;
      if (MapInfo_test_info_in != null) {
        let __TestInfoParser = require("TestInfoParser");
        MapInfo_test_info_out = __TestInfoParser.decode(MapInfo_test_info_in);
      }
      MapInfo["test_info"] = MapInfo_test_info_out;

      let MapInfo_map_detail_in = dataIn.get("map_detail", 17);
      let MapInfo_map_detail_out = null;
      if (MapInfo_map_detail_in != null) {
        let __GameEnum = require("GameEnum");
        let __MapDetail = __GameEnum["MapDetail"];
        let __MapDetailParser = require(__MapDetail[MapInfo_tag["MapInfo_id"]]);
        MapInfo_map_detail_out = __MapDetailParser.decode(MapInfo_map_detail_in);
      }
      MapInfo["map_detail"] = MapInfo_map_detail_out;

      return MapInfo;
    };
    module.exports["decode"] = _decode;

    ```

- TestInfoParser.js

    see the test output
