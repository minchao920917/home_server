var express = require('express');
var Util = require('../util/util.js')
var router = express.Router();


var BaseModel = require('../model/base_model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var baseModel = new BaseModel();//创建baseModel实例
  res.send('respond with a resource');
});


/* GET users listing. */
router.get('/a', function(req, res, next) {

  var baseModel = new BaseModel();//创建baseModel实例
  res.send('ss');
});

/** 
 * name:"login"
 * type:post
 * by:minchao
*/
router.post('/login', function(req, res, next) {
  var user_name = req.body.username?req.body.username:"";
  var password = req.body.password?req.body.password:"";
  if(user_name == "" || password == ""){
    res.json(Util.returnMes("1",{},"用户名或密码不能为空!"));
    return;
  }
  var baseModel = new BaseModel();//创建baseModel实例
  var table_name = 'h_users';
  var whereJson = {
    "and":[{
      "key":"user_name",
      "opts":"=",
      "value":"'"+user_name+"'"
    }],
    "or":[]
  };

  var handleLogin = function(result){
    if(!result[0]){
      res.json(Util.returnMes("1",{},"用户名不存在!"));
      return;
    } 
    if(result[0].password !== password){
      res.json(Util.returnMes("1",{},"密码不正确!"));
      return;
    }
   var ip= Util.getIp(req);//获取ip地址
   var loginRecord = {
     "user_id":result[0].id,
     "ip":ip,
     "login_time":Util.toDataString(new Date())
   }
   baseModel.insert("h_login",loginRecord,function(newId){
     if(result){
      res.json(Util.returnMes("1",{},"登录成功!"));
     }else{
      res.json(Util.returnMes("1",{},"登录记录插入失败!"));
     }
    
   })
  
  };
  baseModel.find(table_name, whereJson, null, [], [], handleLogin);
});

module.exports = router;
