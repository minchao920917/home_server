/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50644
Source Host           : localhost:3306
Source Database       : home

Target Server Type    : MYSQL
Target Server Version : 50644
File Encoding         : 65001

Date: 2019-06-10 17:07:32
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
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_login
-- ----------------------------
INSERT INTO `h_login` VALUES ('1', '1', '::1', '2019-05-30 15:33:37', '');
INSERT INTO `h_login` VALUES ('2', '1', '::1', '2019-05-30 15:37:43', '');
INSERT INTO `h_login` VALUES ('3', '1', '::1', '2019-05-30 16:03:59', '');
INSERT INTO `h_login` VALUES ('4', '1', '::1', '2019-05-30 16:10:04', '');
INSERT INTO `h_login` VALUES ('5', '1', '::1', '2019-05-30 16:10:25', '');
INSERT INTO `h_login` VALUES ('6', '1', '::1', '2019-05-30 17:03:26', '');
INSERT INTO `h_login` VALUES ('7', '1', '::1', '2019-05-30 17:06:22', '');
INSERT INTO `h_login` VALUES ('8', '1', '::1', '2019-05-30 17:08:47', '');
INSERT INTO `h_login` VALUES ('9', '1', '::1', '2019-05-30 17:14:07', '');
INSERT INTO `h_login` VALUES ('10', '1', '::1', '2019-05-31 20:04:01', '');
INSERT INTO `h_login` VALUES ('11', '1', '::1', '2019-06-10 10:27:04', '');
INSERT INTO `h_login` VALUES ('12', '1', '::1', '2019-06-10 13:48:10', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNDU2NDQsImV4cCI6MTU2MDE0OTI0NH0.DtefyBrM0T2lmPerVWVCncUSru2tSt2bO8Qlr1Tnk40');
INSERT INTO `h_login` VALUES ('13', '1', '::1', '2019-06-10 13:58:46', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNDYzMjMsImV4cCI6MTU2MDE0OTkyM30.V4AEuzrW0Yke32YHi0xZOHvValdTa5tutVtN861iX9c');
INSERT INTO `h_login` VALUES ('14', '1', '::1', '2019-06-10 14:05:42', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNDY3NDIsImV4cCI6MTU2MDE1MDM0Mn0.ZZTQN82sFmaQnb_pFShIu61qP1EWxSemsUONdNWqAaI');
INSERT INTO `h_login` VALUES ('15', '1', '::1', '2019-06-10 15:23:26', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTE0MDYsImV4cCI6MTU2MDE1NTAwNn0.bDyIeadaCZPF8Hh5XEn2MGGudL_uwp4XwKQzD8sGFlU');
INSERT INTO `h_login` VALUES ('16', '1', '::1', '2019-06-10 15:25:28', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTE1MjgsImV4cCI6MTU2MDE1NTEyOH0.XKjqztKXY-UcbYZDIP_kSxyeM7VrOuToJLnVi55wazM');
INSERT INTO `h_login` VALUES ('17', '1', '::1', '2019-06-10 15:25:29', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTE1MjksImV4cCI6MTU2MDE1NTEyOX0.-7H1MMtUeBpkzoMAKCps79t85i7e0YkBTmHLVtrmJ0U');
INSERT INTO `h_login` VALUES ('18', '1', '::1', '2019-06-10 15:26:50', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTE2MTAsImV4cCI6MTU2MDE1NTIxMH0.0m1VUpBe7J_pgJiN79pLazQ78yH_GtxH58xl6UfuvsM');
INSERT INTO `h_login` VALUES ('19', '1', '::1', '2019-06-10 16:05:38', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTM5MzgsImV4cCI6MTU2MDE1NzUzOH0.8AEEr8SevSWfosPqKHY1pSaxWtOA7HnLlcbcgadiaCY');
INSERT INTO `h_login` VALUES ('20', '1', '::1', '2019-06-10 16:11:21', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTQyODEsImV4cCI6MTU2MDE1Nzg4MX0.q-FRtYCQhv5qs5QNl5jV7VcSLYx1z5Ah5wSxQT7-agQ');
INSERT INTO `h_login` VALUES ('21', '1', '::1', '2019-06-10 16:20:55', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTQ4NTUsImV4cCI6MTU2MDE1ODQ1NX0.9710Asb6306QBiUkD3oBn_TpXEAh8Le-9mvm00ve1SY');
INSERT INTO `h_login` VALUES ('22', '1', '::1', '2019-06-10 16:24:37', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTUwNzcsImV4cCI6MTU2MDE1ODY3N30.UPAqsxrRmmwMg04nRw9TyR_PKNumlVEUjZxfsY8sHFA');
INSERT INTO `h_login` VALUES ('23', '1', '::1', '2019-06-10 16:27:05', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLpl7XotoUiLCJpYXQiOjE1NjAxNTUyMjUsImV4cCI6MTU2MDE1ODgyNX0.1jpcZNYoI3Jmf2DFKoWc8G4noQzmI0Mi4vCpxyVCGr4');

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
