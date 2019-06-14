var express = require('express');
var Util = require('../util/util.js')
var router = express.Router();


var BaseModel = require('../model/base_model.js');

router.all('/',function(req, res, next){
  
  console.log(req.header('Authorization'));
  var token = req.header('Authorization');
  if(token){
    var rs = Util.verifyToken(token);
    if(rs.code === 1){
      next();
    }else{
      res.json(Util.returnMes("0", {}, rs.mes));
    }
  }else{
    res.json(Util.returnMes("0", data, "未获取到token信息!"));
    next();
  }
  
})

/* post search listing. */
router.post('/list', function(req, res, next) {
  var token = req.header('Authorization');
  if(token){
    var rs = Util.verifyToken(token);
    if(rs.code === 1){
      var list = ['11','22','33','44'];
      let data ={};
      data.list = list;
      data.account_id =  rs.account_id;
      res.json(Util.returnMes("0", data, "获取数据成功!"));
    }else{
      res.json(Util.returnMes("0", {}, rs.mes));
    }
  }else{
    res.json(Util.returnMes("0", data, "未获取到token信息!"));
  }

});


module.exports = router;

