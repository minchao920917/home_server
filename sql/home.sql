/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50644
Source Host           : localhost:3306
Source Database       : home

Target Server Type    : MYSQL
Target Server Version : 50644
File Encoding         : 65001

Date: 2019-07-10 19:22:40
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
-- Table structure for `h_home`
-- ----------------------------
DROP TABLE IF EXISTS `h_home`;
CREATE TABLE `h_home` (
  `home_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `home_name` varchar(50) NOT NULL COMMENT '家庭名称',
  `home_perId` int(10) NOT NULL COMMENT '所有人id',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`home_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_home
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
  `equipment` varchar(55) NOT NULL COMMENT '登录设备',
  `login_time` varchar(50) NOT NULL COMMENT '登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_login
-- ----------------------------
INSERT INTO `h_login` VALUES ('48', '1', '::1', '未知', '2019-07-09 14:42:12');
INSERT INTO `h_login` VALUES ('49', '1', '::1', 'MacOSX', '2019-07-09 14:46:48');
INSERT INTO `h_login` VALUES ('50', '1', '::1', 'MacOSX', '2019-07-09 14:53:16');
INSERT INTO `h_login` VALUES ('51', '1', '::1', 'MacOSX', '2019-07-09 15:02:27');
INSERT INTO `h_login` VALUES ('52', '1', '::1', 'MacOSX', '2019-07-09 15:03:05');
INSERT INTO `h_login` VALUES ('53', '1', '::1', 'MacOSX', '2019-07-09 15:04:05');
INSERT INTO `h_login` VALUES ('54', '1', '::1', 'MacOSX', '2019-07-09 15:04:26');
INSERT INTO `h_login` VALUES ('55', '1', '::1', 'MacOSX', '2019-07-09 15:05:02');
INSERT INTO `h_login` VALUES ('56', '1', '::1', 'MacOSX', '2019-07-09 15:06:10');
INSERT INTO `h_login` VALUES ('57', '1', '::1', 'MacOSX', '2019-07-09 15:14:24');
INSERT INTO `h_login` VALUES ('58', '1', '::1', 'windows', '2019-07-10 10:46:12');
INSERT INTO `h_login` VALUES ('59', '1', '::1', '未知', '2019-07-10 10:53:19');
INSERT INTO `h_login` VALUES ('60', '1', '::1', '未知', '2019-07-10 10:53:26');
INSERT INTO `h_login` VALUES ('61', '1', '::1', '未知', '2019-07-10 10:55:15');
INSERT INTO `h_login` VALUES ('62', '1', '::1', 'MacOSX', '2019-07-10 10:57:28');
INSERT INTO `h_login` VALUES ('63', '1', '::1', 'MacOSX', '2019-07-10 11:27:29');
INSERT INTO `h_login` VALUES ('64', '1', '::1', '未知', '2019-07-10 15:27:26');

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
  `phone` varchar(11) NOT NULL COMMENT '手机号',
  `home_id` int(11) NOT NULL COMMENT '家庭id',
  `role` int(11) NOT NULL COMMENT '1家庭户主，0普通成员',
  `nick_name` varchar(50) NOT NULL COMMENT '昵称',
  `create_time` varchar(50) NOT NULL COMMENT '创建时间',
  `update_time` varchar(50) NOT NULL COMMENT '更新时间',
  `remarks` varchar(50) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_users
-- ----------------------------
INSERT INTO `h_users` VALUES ('1', '闵超', '123456', '13656241819', '0', '0', '', '', '', null);
INSERT INTO `h_users` VALUES ('2', '闵长峰', '123456', '18151109519', '0', '0', 'minchangfeng', '2019-07-10 14:17:35', '', null);
INSERT INTO `h_users` VALUES ('7', '闵小花', '123456', '18162210123', '0', '0', '闵小花2', '2019-07-10 15:30:11', '2019-07-10 15:56:31', null);
