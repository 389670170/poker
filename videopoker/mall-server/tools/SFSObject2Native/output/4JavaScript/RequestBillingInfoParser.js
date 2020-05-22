// This is a auto generate file, don't change it!


let SFS2X = require("sfs2x-api")

module.exports = {}

let _req = {
  encode: function (dataIn, tagMap) {
    let v0 = new SFS2X.SFSObject();
    let v1 = tagMap || {};
    if (dataIn.pageCode != null) {
      v0.put("pageCode", dataIn.pageCode, 8);
    }
    return v0;
  },

  decode: function (dataIn, tagMap) {
    let v0 = {};
    let v1 = tagMap || {};
    if (dataIn.containsKey("pageCode")) {
      v0["pageCode"] = dataIn.get("pageCode", 8);
    }
    return v0;
  },
}
module.exports["req"] = _req;

let _rsp = {
  encode: function (dataIn, tagMap) {
    let v2 = new SFS2X.SFSObject();
    let v42 = tagMap || {};
    if (dataIn.data != null) {
      let v3 = new SFS2X.SFSObject();
      if (dataIn.data.pageCode != null) {
        v3.put("pageCode", dataIn.data.pageCode, 8);
      }
      if (dataIn.data.billingList != null) {
        let v4 = new SFS2X.SFSArray();
        for (let v18 = 0; v18 < dataIn.data.billingList.length; v18++) {
          let v19 = dataIn.data.billingList[v18];
          if (v19 != null) {
            let v5 = new SFS2X.SFSObject();
            if (v19.billingCode != null) {
              v5.put("billingCode", v19.billingCode, 8);
            }
            if (v19.billingName != null) {
              v5.put("billingName", v19.billingName, 8);
            }
            if (v19.billingDes != null) {
              v5.put("billingDes", v19.billingDes, 8);
            }
            if (v19.isFirstBuy != null) {
              v5.put("isFirstBuy", v19.isFirstBuy, 1);
            }
            if (v19.items != null) {
              let v6 = new SFS2X.SFSArray();
              for (let v16 = 0; v16 < v19.items.length; v16++) {
                let v17 = v19.items[v16];
                if (v17 != null) {
                  let v7 = new SFS2X.SFSObject();
                  if (v17.paymentId != null) {
                    v7.put("paymentId", v17.paymentId, 4);
                  }
                  if (v17.sku != null) {
                    v7.put("sku", v17.sku, 8);
                  }
                  if (v17.clientType != null) {
                    v7.put("clientType", v17.clientType, 8);
                  }
                  if (v17.originPrice != null) {
                    v7.put("originPrice", v17.originPrice, 7);
                  }
                  if (v17.price != null) {
                    v7.put("price", v17.price, 7);
                  }
                  if (v17.isBest != null) {
                    v7.put("isBest", v17.isBest, 1);
                  }
                  if (v17.isPopular != null) {
                    v7.put("isPopular", v17.isPopular, 1);
                  }
                  if (v17.mainDetail != null) {
                    let v12 = new SFS2X.SFSArray();
                    for (let v14 = 0; v14 < v17.mainDetail.length; v14++) {
                      let v15 = v17.mainDetail[v14];
                      if (v15 != null) {
                        let v13 = new SFS2X.SFSObject();
                        if (v15.goodsCode != null) {
                          v13.put("goodsCode", v15.goodsCode, 8);
                        }
                        if ((v15.amount > (-1 - (1 << 31))) || (v15.amount < (1 << 31)) || !!(v15.amount % 1)) {
                          if (v15.amount != null) {
                            v13.put("amount", v15.amount, 7);
                          }
                        } else {
                          if (v15.amount != null) {
                            v13.put("amount", v15.amount, 4);
                          }
                        };
                        if (v15.extraInfo != null) {
                          v13.put("extraInfo", v15.extraInfo, 8);
                        }
                        if (v13 != null) {
                          v12.add(v13, 18);
                        }
                      }
                    }
                    if (v12 != null) {
                      v7.put("mainDetail", v12, 17);
                    }
                  }
                  if (v17.extraDetail != null) {
                    let v8 = new SFS2X.SFSArray();
                    for (let v10 = 0; v10 < v17.extraDetail.length; v10++) {
                      let v11 = v17.extraDetail[v10];
                      if (v11 != null) {
                        let v9 = new SFS2X.SFSObject();
                        if (v11.goodsCode != null) {
                          v9.put("goodsCode", v11.goodsCode, 8);
                        }
                        if ((v11.amount > (-1 - (1 << 31))) || (v11.amount < (1 << 31)) || !!(v11.amount % 1)) {
                          if (v11.amount != null) {
                            v9.put("amount", v11.amount, 7);
                          }
                        } else {
                          if (v11.amount != null) {
                            v9.put("amount", v11.amount, 4);
                          }
                        };
                        if (v11.extraInfo != null) {
                          v9.put("extraInfo", v11.extraInfo, 8);
                        }
                        if (v9 != null) {
                          v8.add(v9, 18);
                        }
                      }
                    }
                    if (v8 != null) {
                      v7.put("extraDetail", v8, 17);
                    }
                  }
                  if (v7 != null) {
                    v6.add(v7, 18);
                  }
                }
              }
              if (v6 != null) {
                v5.put("items", v6, 17);
              }
            }
            if (v5 != null) {
              v4.add(v5, 18);
            }
          }
        }
        if (v4 != null) {
          v3.put("billingList", v4, 17);
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
    let v42 = tagMap || {};
    let v20 = dataIn.get("data", 18);
    let v21 = null;
    if (v20 != null) {
      v21 = {};
      if (v20.containsKey("pageCode")) {
        v21["pageCode"] = v20.get("pageCode", 8);
      }
      let v22 = v20.get("billingList", 17);
      let v23 = null;
      if (v22 != null) {
        v23 = [];
        for (let v24 = 0; v24 < v22.size(); v24++) {
          let v25 = v22.get(v24, 18);
          let v26 = null;
          if (v25 != null) {
            v26 = {};
            if (v25.containsKey("billingCode")) {
              v26["billingCode"] = v25.get("billingCode", 8);
            }
            if (v25.containsKey("billingName")) {
              v26["billingName"] = v25.get("billingName", 8);
            }
            if (v25.containsKey("billingDes")) {
              v26["billingDes"] = v25.get("billingDes", 8);
            }
            if (v25.containsKey("isFirstBuy")) {
              v26["isFirstBuy"] = v25.get("isFirstBuy", 1);
            }
            let v27 = v25.get("items", 17);
            let v28 = null;
            if (v27 != null) {
              v28 = [];
              for (let v29 = 0; v29 < v27.size(); v29++) {
                let v30 = v27.get(v29, 18);
                let v31 = null;
                if (v30 != null) {
                  v31 = {};
                  if (v30.containsKey("paymentId")) {
                    v31["paymentId"] = v30.get("paymentId", 4);
                  }
                  if (v30.containsKey("sku")) {
                    v31["sku"] = v30.get("sku", 8);
                  }
                  if (v30.containsKey("clientType")) {
                    v31["clientType"] = v30.get("clientType", 8);
                  }
                  if (v30.containsKey("originPrice")) {
                    v31["originPrice"] = v30.get("originPrice", 7);
                  }
                  if (v30.containsKey("price")) {
                    v31["price"] = v30.get("price", 7);
                  }
                  if (v30.containsKey("isBest")) {
                    v31["isBest"] = v30.get("isBest", 1);
                  }
                  if (v30.containsKey("isPopular")) {
                    v31["isPopular"] = v30.get("isPopular", 1);
                  }
                  let v37 = v30.get("mainDetail", 17);
                  let v38 = null;
                  if (v37 != null) {
                    v38 = [];
                    for (let v39 = 0; v39 < v37.size(); v39++) {
                      let v40 = v37.get(v39, 18);
                      let v41 = null;
                      if (v40 != null) {
                        v41 = {};
                        if (v40.containsKey("goodsCode")) {
                          v41["goodsCode"] = v40.get("goodsCode", 8);
                        }
                        if (v40.containsKey("amount")) {
                          v41["amount"] = v40.get("amount") || 0;
                        }
                        if (v40.containsKey("extraInfo")) {
                          v41["extraInfo"] = v40.get("extraInfo", 8);
                        }
                      }
                      v38.push(v41);
                    }
                  }
                  if (v38 != null) {
                    v31["mainDetail"] = v38;
                  }
                  let v32 = v30.get("extraDetail", 17);
                  let v33 = null;
                  if (v32 != null) {
                    v33 = [];
                    for (let v34 = 0; v34 < v32.size(); v34++) {
                      let v35 = v32.get(v34, 18);
                      let v36 = null;
                      if (v35 != null) {
                        v36 = {};
                        if (v35.containsKey("goodsCode")) {
                          v36["goodsCode"] = v35.get("goodsCode", 8);
                        }
                        if (v35.containsKey("amount")) {
                          v36["amount"] = v35.get("amount") || 0;
                        }
                        if (v35.containsKey("extraInfo")) {
                          v36["extraInfo"] = v35.get("extraInfo", 8);
                        }
                      }
                      v33.push(v36);
                    }
                  }
                  if (v33 != null) {
                    v31["extraDetail"] = v33;
                  }
                }
                v28.push(v31);
              }
            }
            if (v28 != null) {
              v26["items"] = v28;
            }
          }
          v23.push(v26);
        }
      }
      if (v23 != null) {
        v21["billingList"] = v23;
      }
    }
    if (v21 != null) {
      v2["data"] = v21;
    }
    if (dataIn.containsKey("status")) {
      v2["status"] = dataIn.get("status", 4);
    }
    return v2;
  },
}
module.exports["rsp"] = _rsp;

