var loginController = require('./login') // 登录
var userController = require('./user') // 登录

exports.longin = loginController.longin // 登录
exports.getUserList = userController.getUserList //获取用户列表 
exports.createUser = userController.createUser //创建用户 
exports.editUser = userController.editUser //编辑用户信息 
exports.getUserInfoById = userController.getUserInfoById //根据id获取用户 
exports.deleteUser = userController.deleteUser //删除用户