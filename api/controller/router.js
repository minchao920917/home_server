var loginController = require('./login') // 登录
var userController = require('./user') // 用户
var notifyController = require('./notify') // 用户

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

