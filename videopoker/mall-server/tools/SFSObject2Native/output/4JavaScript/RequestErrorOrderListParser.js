// This is a auto generate file, don't change it!


let SFS2X = require("sfs2x-api")

module.exports = {}

let _req = {
  encode: function (dataIn, tagMap) {
    let v0 = new SFS2X.SFSObject();
    let v9 = tagMap || {};
    if (dataIn.errorOrderList != null) {
      let v1 = new SFS2X.SFSArray();
      for (let v2 = 0; v2 < dataIn.errorOrderList.length; v2++) {
        let v4 = dataIn.errorOrderList[v2];
        if (v4 != null) {
          v1.add(v4, 8);
        }
      }
      if (v1 != null) {
        v0.put("errorOrderList", v1, 17);
      }
    }
    if (dataIn.unknownOrderList != null) {
      let v10 = new SFS2X.SFSArray();
      for (let v12 = 0; v12 < dataIn.unknownOrderList.length; v12++) {
        let v14 = dataIn.unknownOrderList[v12];
        if (v14 != null) {
          let v11 = new SFS2X.SFSObject();
          if (v14.sku != null) {
            v11.put("sku", v14.sku, 8);
          }
          if (v14.orderTime != null) {
            v11.put("orderTime", v14.orderTime, 8);
          }
          if (v11 != null) {
            v10.add(v11, 18);
          }
        }
      }
      if (v10 != null) {
        v0.put("unknownOrderList", v10, 17);
      }
    }
    return v0;
  },

  decode: function (dataIn, tagMap) {
    let v0 = {};
    let v9 = tagMap || {};
    let v3 = dataIn.get("errorOrderList", 17);
    let v5 = null;
    if (v3 != null) {
      v5 = [];
      for (let v6 = 0; v6 < v3.size(); v6++) {
        let v7 = v3.get(v6, 8);
        let v8 = v7;
        v5.push(v8);
      }
    }
    if (v5 != null) {
      v0["errorOrderList"] = v5;
    }
    let v13 = dataIn.get("unknownOrderList", 17);
    let v15 = null;
    if (v13 != null) {
      v15 = [];
      for (let v16 = 0; v16 < v13.size(); v16++) {
        let v17 = v13.get(v16, 18);
        let v18 = null;
        if (v17 != null) {
          v18 = {};
          if (v17.containsKey("sku")) {
            v18["sku"] = v17.get("sku", 8);
          }
          if (v17.containsKey("orderTime")) {
            v18["orderTime"] = v17.get("orderTime", 8);
          }
        }
        v15.push(v18);
      }
    }
    if (v15 != null) {
      v0["unknownOrderList"] = v15;
    }
    return v0;
  },
}
module.exports["req"] = _req;

let _rsp = {
  encode: function (dataIn, tagMap) {
    let v19 = new SFS2X.SFSObject();
    let v41 = tagMap || {};
    if (dataIn.data != null) {
      let v20 = new SFS2X.SFSObject();
      if (dataIn.data.errorList != null) {
        let v21 = new SFS2X.SFSArray();
        for (let v27 = 0; v27 < dataIn.data.errorList.length; v27++) {
          let v28 = dataIn.data.errorList[v27];
          if (v28 != null) {
            let v22 = new SFS2X.SFSObject();
            if (v28.orderNo != null) {
              v22.put("orderNo", v28.orderNo, 8);
            }
            if (v28.createTime != null) {
              v22.put("createTime", v28.createTime, 8);
            }
            if (v28.sku != null) {
              v22.put("sku", v28.sku, 8);
            }
            if (v28.paymentId != null) {
              v22.put("paymentId", v28.paymentId, 4);
            }
            if (v28.billingCode != null) {
              v22.put("billingCode", v28.billingCode, 8);
            }
            if (v28.goodsDetail != null) {
              let v23 = new SFS2X.SFSArray();
              for (let v25 = 0; v25 < v28.goodsDetail.length; v25++) {
                let v26 = v28.goodsDetail[v25];
                if (v26 != null) {
                  let v24 = new SFS2X.SFSObject();
                  if (v26.goodsCode != null) {
                    v24.put("goodsCode", v26.goodsCode, 8);
                  }
                  if ((v26.amount > (-1 - (1 << 31))) || (v26.amount < (1 << 31)) || !!(v26.amount % 1)) {
                    if (v26.amount != null) {
                      v24.put("amount", v26.amount, 7);
                    }
                  } else {
                    if (v26.amount != null) {
                      v24.put("amount", v26.amount, 4);
                    }
                  };
                  if (v26.extraInfo != null) {
                    v24.put("extraInfo", v26.extraInfo, 8);
                  }
                  if (v24 != null) {
                    v23.add(v24, 18);
                  }
                }
              }
              if (v23 != null) {
                v22.put("goodsDetail", v23, 17);
              }
            }
            if (v22 != null) {
              v21.add(v22, 18);
            }
          }
        }
        if (v21 != null) {
          v20.put("errorList", v21, 17);
        }
      }
      if (v20 != null) {
        v19.put("data", v20, 18);
      }
    }
    if (dataIn.status != null) {
      v19.put("status", dataIn.status, 4);
    }
    return v19;
  },

  decode: function (dataIn, tagMap) {
    let v19 = {};
    let v41 = tagMap || {};
    let v29 = dataIn.get("data", 18);
    let v30 = null;
    if (v29 != null) {
      v30 = {};
      let v31 = v29.get("errorList", 17);
      let v32 = null;
      if (v31 != null) {
        v32 = [];
        for (let v33 = 0; v33 < v31.size(); v33++) {
          let v34 = v31.get(v33, 18);
          let v35 = null;
          if (v34 != null) {
            v35 = {};
            if (v34.containsKey("orderNo")) {
              v35["orderNo"] = v34.get("orderNo", 8);
            }
            if (v34.containsKey("createTime")) {
              v35["createTime"] = v34.get("createTime", 8);
            }
            if (v34.containsKey("sku")) {
              v35["sku"] = v34.get("sku", 8);
            }
            if (v34.containsKey("paymentId")) {
              v35["paymentId"] = v34.get("paymentId", 4);
            }
            if (v34.containsKey("billingCode")) {
              v35["billingCode"] = v34.get("billingCode", 8);
            }
            let v36 = v34.get("goodsDetail", 17);
            let v37 = null;
            if (v36 != null) {
              v37 = [];
              for (let v38 = 0; v38 < v36.size(); v38++) {
                let v39 = v36.get(v38, 18);
                let v40 = null;
                if (v39 != null) {
                  v40 = {};
                  if (v39.containsKey("goodsCode")) {
                    v40["goodsCode"] = v39.get("goodsCode", 8);
                  }
                  if (v39.containsKey("amount")) {
                    v40["amount"] = v39.get("amount") || 0;
                  }
                  if (v39.containsKey("extraInfo")) {
                    v40["extraInfo"] = v39.get("extraInfo", 8);
                  }
                }
                v37.push(v40);
              }
            }
            if (v37 != null) {
              v35["goodsDetail"] = v37;
            }
          }
          v32.push(v35);
        }
      }
      if (v32 != null) {
        v30["errorList"] = v32;
      }
    }
    if (v30 != null) {
      v19["data"] = v30;
    }
    if (dataIn.containsKey("status")) {
      v19["status"] = dataIn.get("status", 4);
    }
    return v19;
  },
}
module.exports["rsp"] = _rsp;

