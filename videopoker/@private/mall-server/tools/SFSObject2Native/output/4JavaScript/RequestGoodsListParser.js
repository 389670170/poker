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
    return v0;
  },

  decode: function (dataIn, tagMap) {
    let v0 = {};
    let v1 = tagMap || {};
    if (dataIn.containsKey("billingCode")) {
      v0["billingCode"] = dataIn.get("billingCode", 8);
    }
    return v0;
  },
}
module.exports["req"] = _req;

let _rsp = {
  encode: function (dataIn, tagMap) {
    let v2 = new SFS2X.SFSObject();
    let v24 = tagMap || {};
    if (dataIn.data != null) {
      let v3 = new SFS2X.SFSObject();
      if (dataIn.data.items != null) {
        let v5 = new SFS2X.SFSArray();
        for (let v11 = 0; v11 < dataIn.data.items.length; v11++) {
          let v12 = dataIn.data.items[v11];
          if (v12 != null) {
            let v6 = new SFS2X.SFSObject();
            if (v12.paymentId != null) {
              v6.put("paymentId", v12.paymentId, 4);
            }
            if (v12.sku != null) {
              v6.put("sku", v12.sku, 8);
            }
            if (v12.goodsDetail != null) {
              let v7 = new SFS2X.SFSArray();
              for (let v9 = 0; v9 < v12.goodsDetail.length; v9++) {
                let v10 = v12.goodsDetail[v9];
                if (v10 != null) {
                  let v8 = new SFS2X.SFSObject();
                  if (v10.goodsCode != null) {
                    v8.put("goodsCode", v10.goodsCode, 8);
                  }
                  if (v10.amount != null) {
                    v8.put("amount", v10.amount, 4);
                  }
                  if (v8 != null) {
                    v7.add(v8, 18);
                  }
                }
              }
              if (v7 != null) {
                v6.put("goodsDetail", v7, 17);
              }
            }
            if (v6 != null) {
              v5.add(v6, 18);
            }
          }
        }
        if (v5 != null) {
          v3.put("items", v5, 17);
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
    let v24 = tagMap || {};
    let v4 = dataIn.get("data", 18);
    let v13 = null;
    if (v4 != null) {
      v13 = {};
      let v14 = v4.get("items", 17);
      let v15 = null;
      if (v14 != null) {
        v15 = [];
        for (let v16 = 0; v16 < v14.size(); v16++) {
          let v17 = v14.get(v16, 18);
          let v18 = null;
          if (v17 != null) {
            v18 = {};
            if (v17.containsKey("paymentId")) {
              v18["paymentId"] = v17.get("paymentId", 4);
            }
            if (v17.containsKey("sku")) {
              v18["sku"] = v17.get("sku", 8);
            }
            let v19 = v17.get("goodsDetail", 17);
            let v20 = null;
            if (v19 != null) {
              v20 = [];
              for (let v21 = 0; v21 < v19.size(); v21++) {
                let v22 = v19.get(v21, 18);
                let v23 = null;
                if (v22 != null) {
                  v23 = {};
                  if (v22.containsKey("goodsCode")) {
                    v23["goodsCode"] = v22.get("goodsCode", 8);
                  }
                  if (v22.containsKey("amount")) {
                    v23["amount"] = v22.get("amount", 4);
                  }
                }
                v20.push(v23);
              }
            }
            if (v20 != null) {
              v18["goodsDetail"] = v20;
            }
          }
          v15.push(v18);
        }
      }
      if (v15 != null) {
        v13["items"] = v15;
      }
    }
    if (v13 != null) {
      v2["data"] = v13;
    }
    if (dataIn.containsKey("status")) {
      v2["status"] = dataIn.get("status", 4);
    }
    return v2;
  },
}
module.exports["rsp"] = _rsp;

