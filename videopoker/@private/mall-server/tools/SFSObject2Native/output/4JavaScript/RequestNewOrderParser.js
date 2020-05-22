// This is a auto generate file, don't change it!


let SFS2X = require("sfs2x-api")

module.exports = {}

let _req = {
  encode: function (dataIn, tagMap) {
    let v0 = new SFS2X.SFSObject();
    let v1 = tagMap || {};
    if (dataIn.billingCode != null) {
      v0.put("billingCode", dataIn.billingCode, 8);
    }
    if (dataIn.paymentId != null) {
      v0.put("paymentId", dataIn.paymentId, 4);
    }
    if (dataIn.sku != null) {
      v0.put("sku", dataIn.sku, 8);
    }
    if (dataIn.extraInfo != null) {
      v0.put("extraInfo", dataIn.extraInfo, 8);
    }
    return v0;
  },

  decode: function (dataIn, tagMap) {
    let v0 = {};
    let v1 = tagMap || {};
    if (dataIn.containsKey("billingCode")) {
      v0["billingCode"] = dataIn.get("billingCode", 8);
    }
    if (dataIn.containsKey("paymentId")) {
      v0["paymentId"] = dataIn.get("paymentId", 4);
    }
    if (dataIn.containsKey("sku")) {
      v0["sku"] = dataIn.get("sku", 8);
    }
    if (dataIn.containsKey("extraInfo")) {
      v0["extraInfo"] = dataIn.get("extraInfo", 8);
    }
    return v0;
  },
}
module.exports["req"] = _req;

let _rsp = {
  encode: function (dataIn, tagMap) {
    let v2 = new SFS2X.SFSObject();
    let v6 = tagMap || {};
    if (dataIn.data != null) {
      let v3 = new SFS2X.SFSObject();
      if (dataIn.data.orderNo != null) {
        v3.put("orderNo", dataIn.data.orderNo, 8);
      }
      if (v3 != null) {
        v2.put("data", v3, 18);
      }
    }
    if (dataIn.status != null) {
      v2.put("status", dataIn.status, 4);
    }
    return v2;
  },

  decode: function (dataIn, tagMap) {
    let v2 = {};
    let v6 = tagMap || {};
    let v4 = dataIn.get("data", 18);
    let v5 = null;
    if (v4 != null) {
      v5 = {};
      if (v4.containsKey("orderNo")) {
        v5["orderNo"] = v4.get("orderNo", 8);
      }
    }
    if (v5 != null) {
      v2["data"] = v5;
    }
    if (dataIn.containsKey("status")) {
      v2["status"] = dataIn.get("status", 4);
    }
    return v2;
  },
}
module.exports["rsp"] = _rsp;

