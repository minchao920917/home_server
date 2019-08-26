var express = require('express');
var router = express.Router();
const myrouter = require('./router.js')

// 登录模块接口
router.post('/login', myrouter.longin)
router.post('/regist', myrouter.regist)
//用户模块接口
router.post('/getUserList', myrouter.getUserList)
router.post('/createUser', myrouter.createUser)
router.post('/editUser', myrouter.editUser)
router.post('/getUserInfoById', myrouter.getUserInfoById)
router.post('/deleteUser', myrouter.deleteUser)

// 通知模块接口
router.post('/getMyNotifyList', myrouter.getMyNotifyList)
router.post('/getOtherNotifyList', myrouter.getOtherNotifyList)
router.post('/addNotifies', myrouter.addNotifies)
router.post('/getNotifyById', myrouter.getNotifyById)
router.post('/editNotify', myrouter.editNotify)
router.post('/removeNotify', myrouter.removeNotify)

//账单模块接口
router.post('/getFinacialList', myrouter.getFinacialList)
router.post('/addFinacial', myrouter.addFinacial)
router.post('/getFinacialyById', myrouter.getFinacialyById)
router.post('/editFinacial', myrouter.editFinacial)
router.post('/removeFinacial', myrouter.removeFinacial)

//名片夹模块
router.post('/getContactsList', myrouter.getContactsList)
router.post('/addContacts', myrouter.addContacts)
router.post('/getContactsById', myrouter.getContactsById)
router.post('/editContacts', myrouter.editContacts)
router.post('/removeContacts', myrouter.removeContacts)

//地址管理模块
router.post('/getAddressList', myrouter.getAddressList)
router.post('/addAddress', myrouter.addAddress)
router.post('/getAddressById', myrouter.getAddressById)
router.post('/editAddress', myrouter.editAddress)
router.post('/removeAddress', myrouter.removeAddress)

module.exports = router