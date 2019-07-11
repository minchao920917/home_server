/**
 * @ Author: minchao
 * @ Create Time: 2019-07-11 18:36:44
 * @ Modified by: minchao
 * @ Modified time: 2019-07-12 15:18:16
 * @ Description: 名片夹管理 h_contacts
 */

var Util = require('../../../util/util')
var BaseModel = require('../../model/baseModel');

//获取名片列表
exports.getContactsList = (req, res, next)=>{
    var pageSize =req.body.pageSize?req.body.pageSize:"";
    var pageNum =req.body.pageNum?req.body.pageNum:"";
    
    var baseModel = new BaseModel(); //创建baseModel实例

    baseModel.find("h_contacts", {
        'and': [],
        'or': []
    }, {
        'key': 'create_time',
        'type': 'desc'
    }, [(pageNum-1)*pageSize,pageSize], [], (results) => {
        console.log(results);
        if (results) {
            res.json(Util.returnMes("1", results, "获取名片夹列表成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取名片夹列表失败!"));
        }
    })
}

//新增名片
exports.addContacts = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var contacts = {
        "contact_name": req.body.contact_name,
        "contact_tel": req.body.contact_tel,
        "contact_desc": req.body.contact_desc,
        "create_time": Util.toDataString(new Date()),
        "person_id": req.body.person_id
    }
    baseModel.insert("h_contacts", contacts, function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "添加名片夹成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "添加名片夹失败!"));
        }
    })
}
//根据id查找名片
exports.getContactsById = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var idJson = {
        "id": req.body.id
    }
    baseModel.findOneById("h_contacts", idJson, (result) => {
        if (result) {
            res.json(Util.returnMes("1", result, "获取名片夹成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取名片夹失败!"));
        }
    })
}
//修改名片
exports.editContacts = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var contacts = {
        "id": req.body.id,
        "contact_name": req.body.contact_name,
        "contact_tel": req.body.contact_tel,
        "contact_desc": req.body.contact_desc,
        "update_time": Util.toDataString(new Date()),
        "person_id": req.body.person_id
    }
    var idJson = {
        'id': contacts.id
    };
    var handleModify = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "名片夹修改成功"));
        } else {
            res.json(Util.returnMes("0", {}, "名片夹修改失败"));
        }
    }
    baseModel.findOneById("h_contacts", idJson, (result) => {
        if (result) {
            baseModel.modify("h_contacts", idJson, contacts, handleModify);
        } else {
            res.json(Util.returnMes("0", {}, "名片夹不存在!"));
        }
    })
}
//删除名片
exports.removeContacts = (req, res, next)=>{
    var idJson = {
        'id': req.body.id ? req.body.id : -1
    };
    var baseModel = new BaseModel(); //创建baseModel实例
    var handleDelete = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "名片夹已成功删除"));
        } else {
            res.json(Util.returnMes("0", {}, "名片夹删除失败"));
        }
    }
    baseModel.findOneById("h_contacts", idJson, (result) => {
        if (result) {
            baseModel.remove("h_contacts", idJson, handleDelete);
        } else {
            res.json(Util.returnMes("0", {}, "名片夹不存在!"));
        }
    })
}