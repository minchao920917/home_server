/**
 * @ Author: minchao
 * @ Create Time: 2019-07-10 11:41:49
 * @ Modified by: minchao
 * @ Modified time: 2019-08-26 14:58:45
 * @ Description: 用户成员模块
 */

var Util = require('../../../util/util')
var BaseModel = require('../../model/baseModel');
var md5 = require('md5-node');

// 获取成员列表
exports.getUserList = (req, res, next) => {
    var pageSize =req.body.pageSize?req.body.pageSize:"";
    var pageNum =req.body.pageNum?req.body.pageNum:"";
    var home_id =req.body.home_id?req.body.home_id:"";
    var baseModel = new BaseModel(); //创建baseModel实例

    baseModel.find("h_users", {
        'and': [{
            'key':'home_id',
            'opts':'=',
            'value':home_id
        }],
        'or': []
    }, {
        'key': 'create_time',
        'type': 'desc'
    }, [(pageNum-1)*pageSize,pageSize], ["id","user_name","phone","home_id","role","nick_name","head_url","create_time"], (results) => {
        console.log(results);
        if (results) {
            res.json(Util.returnMes("1", results, "获取用户列表成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取用户列表失败!"));
        }
    })
}
//根据id查找家庭成员
exports.getUserInfoById = (req, res, next) => {
    var baseModel = new BaseModel(); //创建baseModel实例
    var idJson = {
        "id": req.body.id
    }
    baseModel.findOneById("h_users", idJson, (result) => {
        console.log(result);
        if (result) {
            res.json(Util.returnMes("1", result, "获取用户成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "改用户不存在!"));
        }
    })
}

//新增家庭成员
exports.createUser = (req, res, next) => {
    var baseModel = new BaseModel(); //创建baseModel实例
    var userObject = {
        "user_name": req.body.user_name,
        "password": md5('123456'),
        "phone": req.body.phone,
        "home_id": req.body.home_id,
        "role": '0',
        "nick_name": req.body.nick_name,
        "head_url":"",
        "create_time": Util.toDataString(new Date()),
        "update_time": "",
    }
    var whereJson = {
        "and": [{
            "key": "phone",
            "opts": "=",
            "value": "'" + userObject.phone + "'"
        }],
        "or": []
    };
    var handleFind = function (result) {
        console.log(result);
        if (!result[0]) {
            baseModel.insert("h_users", userObject, function () {
                if (result) {
                    res.json(Util.returnMes("1", {}, "添加用户成功!"));
                } else {
                    res.json(Util.returnMes("0", {}, "添加用户失败!"));
                }
            })
        } else {
            res.json(Util.returnMes("0", {}, "该用户电话号码已经注册"));

        }
    }
    baseModel.find("h_users", whereJson, null, [], [], handleFind);


}
//编辑家庭成员
exports.editUser = (req, res, next) => {
    var userObject = {
        "user_name": req.body.user_name,
        "phone": req.body.phone,
        "nick_name": req.body.nick_name,
        "update_time": Util.toDataString(new Date())
    }
    var idJson = {
        'id': req.body.id ? req.body.id : -1
    };
    var baseModel = new BaseModel(); //创建baseModel实例
    var handleModify = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "该用户修改成功"));
        } else {
            res.json(Util.returnMes("0", {}, "该用户修改失败"));
        }
    }
    baseModel.findOneById("h_users", idJson, (result) => {
        if (result) {
            baseModel.modify("h_users", idJson, userObject, handleModify);
        } else {
            res.json(Util.returnMes("0", {}, "该用户不存在!"));
        }
    })
}
//删除家庭成员
exports.deleteUser = (req, res, next) => {
    var idJson = {
        'id': req.body.id ? req.body.id : -1
    };
    var baseModel = new BaseModel(); //创建baseModel实例
    var handleDelete = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "该用户已成功删除"));
        } else {
            res.json(Util.returnMes("0", {}, "该用户删除失败"));
        }
    }
    baseModel.findOneById("h_users", idJson, (result) => {
        if (result) {
            baseModel.remove("h_users", idJson, handleDelete);
        } else {
            res.json(Util.returnMes("0", {}, "该用户不存在!"));
        }
    })
}