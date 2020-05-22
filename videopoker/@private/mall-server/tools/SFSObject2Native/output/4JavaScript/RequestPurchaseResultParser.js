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
    if (dataIn.purchaseData != null) {
      v0.put("purchaseData", dataIn.purchaseData, 8);
    }
    if (dataIn.signatureData != null) {
      v0.put("signatureData", dataIn.signatureData, 8);
    }
    if (dataIn.packageName != null) {
      v0.put("packageName", dataIn.packageName, 8);
    }
    return v0;
  },

  decode: function (dataIn, tagMap) {
    let v0 = {};
    let v1 = tagMap || {};
    if (dataIn.containsKey("orderNo")) {
      v0["orderNo"] = dataIn.get("orderNo", 8);
    }
    if (dataIn.containsKey("purchaseData")) {
      v0["purchaseData"] = dataIn.get("purchaseData", 8);
    }
    if (dataIn.containsKey("signatureData")) {
      v0["signatureData"] = dataIn.get("signatureData", 8);
    }
    if (dataIn.containsKey("packageName")) {
      v0["packageName"] = dataIn.get("packageName", 8);
    }
    return v0;
  },
}
module.exports["req"] = _req;

let _rsp = {
  encode: function (dataIn, tagMap) {
    let v2 = new SFS2X.SFSObject();
    let v15 = tagMap || {};
    if (dataIn.data != null) {
      let v3 = new SFS2X.SFSObject();
      if (dataIn.data.debugUser != null) {
        v3.put("debugUser", dataIn.data.debugUser, 1);
      }
      if (dataIn.data.goodsList != null) {
        let v4 = new SFS2X.SFSArray();
        for (let v6 = 0; v6 < dataIn.data.goodsList.length; v6++) {
          let v7 = dataIn.data.goodsList[v6];
          if (v7 != null) {
            let v5 = new SFS2X.SFSObject();
            if (v7.goodsCode != null) {
              v5.put("goodsCode", v7.goodsCode, 8);
            }
            if ((v7.amount > (-1 - (1 << 31))) || (v7.amount < (1 << 31)) || !!(v7.amount % 1)) {
              if (v7.amount != null) {
                v5.put("amount", v7.amount, 7);
              }
            } else {
              if (v7.amount != null) {
                v5.put("amount", v7.amount, 4);
              }
            };
            if (v7.extraInfo != null) {
              v5.put("extraInfo", v7.extraInfo, 8);
            }
            if ((v7.balance > (-1 - (1 << 31))) || (v7.balance < (1 << 31)) || !!(v7.balance % 1)) {
              if (v7.balance != null) {
                v5.put("balance", v7.balance, 7);
              }
            } else {
              if (v7.balance != null) {
                v5.put("balance", v7.balance, 4);
              }
            };
            if (v5 != null) {
              v4.add(v5, 18);
            }
          }
        }
        if (v4 != null) {
          v3.put("goodsList", v4, 17);
        }
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
    let v15 = tagMap || {};
    let v8 = dataIn.get("data", 18);
    let v9 = null;
    if (v8 != null) {
      v9 = {};
      if (v8.containsKey("debugUser")) {
        v9["debugUser"] = v8.get("debugUser", 1);
      }
      let v10 = v8.get("goodsList", 17);
      let v11 = null;
      if (v10 != null) {
        v11 = [];
        for (let v12 = 0; v12 < v10.size(); v12++) {
          let v13 = v10.get(v12, 18);
          let v14 = null;
          if (v13 != null) {
            v14 = {};
            if (v13.containsKey("goodsCode")) {
              v14["goodsCode"] = v13.get("goodsCode", 8);
            }
            if (v13.containsKey("amount")) {
              v14["amount"] = v13.get("amount") || 0;
            }
            if (v13.containsKey("extraInfo")) {
              v14["extraInfo"] = v13.get("extraInfo", 8);
            }
            if (v13.containsKey("balance")) {
              v14["balance"] = v13.get("balance") || 0;
            }
          }
          v11.push(v14);
        }
      }
      if (v11 != null) {
        v9["goodsList"] = v11;
      }
    }
    if (v9 != null) {
      v2["data"] = v9;
    }
    if (dataIn.containsKey("status")) {
      v2["status"] = dataIn.get("status", 4);
    }
    return v2;
  },
}
module.exports["rsp"] = _rsp;

