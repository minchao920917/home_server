var loginController = require('./login') // 登录
var userController = require('./user') // 用户
<<<<<<< HEAD
var notifyController = require('./notify') // 通知
var financialController = require('./financial') // 账单
=======
var notifyController = require('./notify') // 用户
>>>>>>> 2b9af9aceeba5f8854bca8972ad3d88246db8726

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

<<<<<<< HEAD

exports.getFinacialList = financialController.getFinacialList //账单列表
exports.addFinacial = financialController.addFinacial //新增账单
exports.getFinacialyById = financialController.getFinacialyById //根据id查找账单
exports.editFinacial = financialController.editFinacial //修改账单
exports.removeFinacial = financialController.removeFinacial //删除账单




=======
>>>>>>> 2b9af9aceeba5f8854bca8972ad3d88246db8726
