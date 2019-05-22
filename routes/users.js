var express = require('express');

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
  console.log(req.body);
  var user_name = req.body.username;
  var password = req.body.password;
  if(user_name == "" || password == ""){
    res.json({
      status:"1",
      data:{},
      msg:"用户名或密码不能为空"
    })
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
      res.json({
        status:"1",
        data:{
        },
        msg:"用户名不存在"
      })
      return;
    } 
    if(result[0].password !== password){
      res.json({
        status:"1",
        data:{
        },
        msg:"密码不正确"
      })
      return;
    }
    
      res.json({
        status:"1",
        data:{
        },
        msg:"登录成功"
      })
    
  };
  baseModel.find(table_name, whereJson, null, [], [], handleLogin);

});

module.exports = router;
