var loginController = require('./login') // 登录
var userController = require('./user') // 用户
var notifyController = require('./notify') // 通知
var financialController = require('./financial') // 账单
var addressController = require('./address') // 地址管理
var contactsController = require('./contacts') // 名片夹管理

exports.longin = loginController.longin // 登录
exports.getUserList = userController.getUserList //获取用户列表 
exports.createUser = userController.createUser //创建用户 
exports.editUser = userController.editUser //编辑用户信息 
exports.getUserInfoById = userController.getUserInfoById //根据id获取用户 
exports.deleteUser = userController.deleteUser //删除用户


exports.getNotifyList = notifyController.getNotifyList //获取通知列表
exports.addNotifies = notifyController.addNotifies //增加
exports.getNotifyById = notifyController.getNotifyById //根据id查找通知
exports.editNotify = notifyController.editNotify //根据id修改通知
exports.removeNotify = notifyController.removeNotify //根据id删除通知


exports.getFinacialList = financialController.getFinacialList //账单列表
exports.addFinacial = financialController.addFinacial //新增账单
exports.getFinacialyById = financialController.getFinacialyById //根据id查找账单
exports.editFinacial = financialController.editFinacial //修改账单
exports.removeFinacial = financialController.removeFinacial //删除账单


exports.getAddressList = addressController.getAddressList //地址列表
exports.addAddress = addressController.addAddress //新增地址
exports.getAddressById = addressController.getAddressById //根据id查找地址
exports.editAddress = addressController.editAddress //修改地址
exports.removeAddress = addressController.removeAddress //删除地址


exports.getContactsList = contactsController.getContactsList //名片列表
exports.addContacts = contactsController.addContacts //新增名片
exports.getContactsById = contactsController.getContactsById //根据id查找名片
exports.editContacts = contactsController.editContacts //修改名片
exports.removeContacts = contactsController.removeContacts //删除名片



