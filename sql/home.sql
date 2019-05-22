/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50644
Source Host           : localhost:3306
Source Database       : home

Target Server Type    : MYSQL
Target Server Version : 50644
File Encoding         : 65001

Date: 2019-05-22 17:51:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `h_login`
-- ----------------------------
DROP TABLE IF EXISTS `h_login`;
CREATE TABLE `h_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `user_id` varchar(11) NOT NULL COMMENT '登录人id',
  `ip` varchar(20) NOT NULL COMMENT '登录ip',
  `address_name` varchar(50) NOT NULL COMMENT '登录地名',
  `login_time` varchar(50) NOT NULL COMMENT '登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_login
-- ----------------------------

-- ----------------------------
-- Table structure for `h_users`
-- ----------------------------
DROP TABLE IF EXISTS `h_users`;
CREATE TABLE `h_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_name` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(20) NOT NULL COMMENT '登录密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_users
-- ----------------------------
INSERT INTO `h_users` VALUES ('1', 'minchao', '123456');
