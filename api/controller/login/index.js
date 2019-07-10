/**
 * @ Author: minchao
 * @ Create Time: 2019-07-10 10:04:55
 * @ Modified by: minchao
 * @ Modified time: 2019-07-10 13:40:36
 * @ Description: 登录模块
 */

var Util = require('../../../util/util')
var BaseModel = require('../../model/baseModel');


exports.longin = (req, res, next) =>{
    var phone = req.body.phone ? req.body.phone : "";
    var password = req.body.password ? req.body.password : "";
    var equipment = req.body.equipment?req.body.equipment:"未知"
    if (phone == "" || password == "") {
      res.json(Util.returnMes("0", {}, "用户名或密码不能为空!"));
      return;
    }
    var baseModel = new BaseModel();//创建baseModel实例
    var table_name = 'h_users';
    var whereJson = {
      "and": [{
        "key": "phone",
        "opts": "=",
        "value": "'" + phone + "'"
      }],
      "or": []
    };
  
    var handleLogin = function (result) {
  
      if (!result[0]) {
        res.json(Util.returnMes("0", {}, "用户名不存在!"));
        return;
      }
      if (result[0].password !== password) {
        res.json(Util.returnMes("0", {}, "密码不正确!"));
        return;
      }
      var person = result[0];
      var user_name = person.user_name;
      var account_id = person.id;
      var token = Util.generateToken({ user_name, account_id});
      var ip = Util.getIp(req);//获取ip地址
      var loginRecord = {
        "user_id": result[0].id,
        "ip": ip,
        "login_time": Util.toDataString(new Date()),
        "equipment":equipment
      }
      var data = person;
      data.token = token;
      baseModel.insert("h_login", loginRecord, function () {
        if (result) {
          res.json(Util.returnMes("1", data, "登录成功!"));
        } else {
          res.json(Util.returnMes("0", {}, "登录记录插入失败!"));
        }
  
      })
  
    };
    baseModel.find(table_name, whereJson, null, [], [], handleLogin);
  }