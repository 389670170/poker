// This is a auto generate file, don't change it!


let SFS2X = require("sfs2x-api")

module.exports = {}

let _req = {
  encode: function (dataIn, tagMap) {
    let v0 = new SFS2X.SFSObject();
    let v1 = tagMap || {};
    if (dataIn.orderNo != null) {
      v0.put("orderNo", dataIn.orderNo, 8);
    }
    if (dataIn.state != null) {
      v0.put("state", dataIn.state, 4);
    }
    if (dataIn.errorMsg != null) {
      v0.put("errorMsg", dataIn.errorMsg, 8);
    }
    return v0;
  },

  decode: function (dataIn, tagMap) {
    let v0 = {};
    let v1 = tagMap || {};
    if (dataIn.containsKey("orderNo")) {
      v0["orderNo"] = dataIn.get("orderNo", 8);
    }
    if (dataIn.containsKey("state")) {
      v0["state"] = dataIn.get("state", 4);
    }
    if (dataIn.containsKey("errorMsg")) {
      v0["errorMsg"] = dataIn.get("errorMsg", 8);
    }
    return v0;
  },
}
module.exports["req"] = _req;

