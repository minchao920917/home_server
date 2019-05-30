/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50644
Source Host           : localhost:3306
Source Database       : home

Target Server Type    : MYSQL
Target Server Version : 50644
File Encoding         : 65001

Date: 2019-05-30 18:35:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `h_financial`
-- ----------------------------
DROP TABLE IF EXISTS `h_financial`;
CREATE TABLE `h_financial` (
  `id` int(11) NOT NULL COMMENT 'id',
  `type` int(11) NOT NULL COMMENT '类型：0支出，1收入',
  `figure_number` decimal(10,2) NOT NULL COMMENT '数额',
  `reason` varchar(255) NOT NULL COMMENT '收入/支出原因',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_financial
-- ----------------------------

-- ----------------------------
-- Table structure for `h_location`
-- ----------------------------
DROP TABLE IF EXISTS `h_location`;
CREATE TABLE `h_location` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_location
-- ----------------------------

-- ----------------------------
-- Table structure for `h_login`
-- ----------------------------
DROP TABLE IF EXISTS `h_login`;
CREATE TABLE `h_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `user_id` varchar(11) NOT NULL COMMENT '登录人id',
  `ip` varchar(20) NOT NULL COMMENT '登录ip',
  `login_time` varchar(50) NOT NULL COMMENT '登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_login
-- ----------------------------
INSERT INTO `h_login` VALUES ('1', '1', '::1', '2019-05-30 15:33:37');
INSERT INTO `h_login` VALUES ('2', '1', '::1', '2019-05-30 15:37:43');
INSERT INTO `h_login` VALUES ('3', '1', '::1', '2019-05-30 16:03:59');
INSERT INTO `h_login` VALUES ('4', '1', '::1', '2019-05-30 16:10:04');
INSERT INTO `h_login` VALUES ('5', '1', '::1', '2019-05-30 16:10:25');
INSERT INTO `h_login` VALUES ('6', '1', '::1', '2019-05-30 17:03:26');
INSERT INTO `h_login` VALUES ('7', '1', '::1', '2019-05-30 17:06:22');
INSERT INTO `h_login` VALUES ('8', '1', '::1', '2019-05-30 17:08:47');
INSERT INTO `h_login` VALUES ('9', '1', '::1', '2019-05-30 17:14:07');

-- ----------------------------
-- Table structure for `h_notify`
-- ----------------------------
DROP TABLE IF EXISTS `h_notify`;
CREATE TABLE `h_notify` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '通知条数',
  `authority` int(11) NOT NULL COMMENT '权重:1极重要 2一般重用',
  `title` varchar(255) NOT NULL COMMENT '通知标题',
  `content` varchar(255) NOT NULL COMMENT '通知内容',
  `create_time` varchar(255) NOT NULL COMMENT '发布时间',
  `person_id` int(11) NOT NULL COMMENT '发布人id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_notify
-- ----------------------------

-- ----------------------------
-- Table structure for `h_users`
-- ----------------------------
DROP TABLE IF EXISTS `h_users`;
CREATE TABLE `h_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_name` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(20) NOT NULL COMMENT '登录密码',
  `phone` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_users
-- ----------------------------
INSERT INTO `h_users` VALUES ('1', '闵超', '123456', '13656241819');
