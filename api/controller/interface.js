var express = require('express');
var router = express.Router();
const myrouter = require('./router.js')

// 登录模块接口
router.post('/login', myrouter.longin)
//用户模块接口
router.post('/getUserList', myrouter.getUserList)
router.post('/createUser', myrouter.createUser)
router.post('/editUser', myrouter.editUser)
router.post('/getUserInfoById', myrouter.getUserInfoById)
router.post('/deleteUser', myrouter.deleteUser)

// 通知模块接口

router.post('/getNotifyList', myrouter.getNotifyList)
router.post('/addNotifies', myrouter.addNotifies)
router.post('/getNotifyById', myrouter.getNotifyById)
router.post('/editNotify', myrouter.editNotify)
router.post('/removeNotify', myrouter.removeNotify)
// router.post('/getUserList', myrouter.getUserList)
module.exports = router