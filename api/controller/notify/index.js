/**
 * @ Author: minchao
 * @ Create Time: 2019-07-10 18:18:03
 * @ Modified by: minchao
 * @ Modified time: 2019-07-12 14:34:28
 * @ Description: 通知管理
 */

 
var Util = require('../../../util/util')
var BaseModel = require('../../model/baseModel');

//新增一条通知
exports.addNotifies = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var notifies = {
        "authority": req.body.authority,
        "title": req.body.title,
        "content": req.body.content,
        "create_time": Util.toDataString(new Date()),
        "person_id": req.body.person_id,
        "home_id": req.body.home_id,
    }
    baseModel.insert("h_notify", notifies, function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "添加通知成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "添加通知失败!"));
        }
    })
}

//获取通知列表
exports.getNotifyList = (req, res, next)=>{
    var pageSize =req.body.pageSize?req.body.pageSize:"";
    var pageNum =req.body.pageNum?req.body.pageNum:"";
    
    var baseModel = new BaseModel(); //创建baseModel实例

    baseModel.find("h_notify", {
        'and': [],
        'or': []
    }, {
        'key': 'create_time',
        'type': 'desc'
    }, [(pageNum-1)*pageSize,pageSize], [], (results) => {
        console.log(results);
        if (results) {
            res.json(Util.returnMes("1", results, "获取通知列表成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取通知列表失败!"));
        }
    })
}

//根据id查找通知
exports.getNotifyById = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var idJson = {
        "id": req.body.id
    }
    baseModel.findOneById("h_notify", idJson, (result) => {
        if (result) {
            res.json(Util.returnMes("1", result, "获取通知成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取通知失败!"));
        }
    })
}

//修改通知
exports.editNotify = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var notifies = {
        "id": req.body.id,
        "authority": req.body.authority,
        "title": req.body.title,
        "content": req.body.content,
        "update_time": Util.toDataString(new Date())
    }
    var idJson = {
        'id': notifies.id
    };
    var handleModify = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "该通知修改成功"));
        } else {
            res.json(Util.returnMes("0", {}, "该通知修改失败"));
        }
    }
    baseModel.findOneById("h_notify", idJson, (result) => {
        if (result) {
            baseModel.modify("h_notify", idJson, notifies, handleModify);
        } else {
            res.json(Util.returnMes("0", {}, "该通知不存在!"));
        }
    })
}

//删除通知
exports.removeNotify = (req, res, next)=>{
    var idJson = {
        'id': req.body.id ? req.body.id : -1
    };
    var baseModel = new BaseModel(); //创建baseModel实例
    var handleDelete = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "该通知已成功删除"));
        } else {
            res.json(Util.returnMes("0", {}, "该通知删除失败"));
        }
    }
    baseModel.findOneById("h_notify", idJson, (result) => {
        if (result) {
            baseModel.remove("h_notify", idJson, handleDelete);
        } else {
            res.json(Util.returnMes("0", {}, "该通知不存在!"));
        }
    })
}