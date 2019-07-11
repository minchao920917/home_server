/**
 * @ Author: minchao
 * @ Create Time: 2019-07-11 18:38:34
 * @ Modified by: minchao
 * @ Modified time: 2019-07-12 15:06:42
 * @ Description: 地址管理 h_address
 */

var Util = require('../../../util/util')
var BaseModel = require('../../model/baseModel');

//获取地址列表
exports.getAddressList = (req, res, next)=>{
    var pageSize =req.body.pageSize?req.body.pageSize:"";
    var pageNum =req.body.pageNum?req.body.pageNum:"";
    
    var baseModel = new BaseModel(); //创建baseModel实例

    baseModel.find("h_address", {
        'and': [],
        'or': []
    }, {
        'key': 'create_time',
        'type': 'desc'
    }, [(pageNum-1)*pageSize,pageSize], [], (results) => {
        console.log(results);
        if (results) {
            res.json(Util.returnMes("1", results, "获取地址列表成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取地址列表失败!"));
        }
    })
}

//新增地址
exports.addAddress = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var address = {
        "address_name": req.body.address_name,
        "address_tel": req.body.address_tel,
        "address_code": req.body.address_code,
        "address_detail": req.body.address_detail,
        "create_time": Util.toDataString(new Date()),
        "person_id": req.body.person_id
    }
    baseModel.insert("h_address", address, function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "添加地址成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "添加地址失败!"));
        }
    })
}
//根据id查找地址
exports.getAddressById = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var idJson = {
        "id": req.body.id
    }
    baseModel.findOneById("h_address", idJson, (result) => {
        if (result) {
            res.json(Util.returnMes("1", result, "获取地址成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取地址失败!"));
        }
    })
}
//修改地址
exports.editAddress = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var address = {
        "id": req.body.id,
        "address_name": req.body.address_name,
        "address_tel": req.body.address_tel,
        "address_code": req.body.address_code,
        "address_detail": req.body.address_detail,
        "update_time": Util.toDataString(new Date())
    }
    var idJson = {
        'id': address.id
    };
    var handleModify = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "地址修改成功"));
        } else {
            res.json(Util.returnMes("0", {}, "地址修改失败"));
        }
    }
    baseModel.findOneById("h_address", idJson, (result) => {
        if (result) {
            baseModel.modify("h_address", idJson, address, handleModify);
        } else {
            res.json(Util.returnMes("0", {}, "地址不存在!"));
        }
    })
}
//删除地址
exports.removeAddress = (req, res, next)=>{
    var idJson = {
        'id': req.body.id ? req.body.id : -1
    };
    var baseModel = new BaseModel(); //创建baseModel实例
    var handleDelete = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "地址已成功删除"));
        } else {
            res.json(Util.returnMes("0", {}, "地址删除失败"));
        }
    }
    baseModel.findOneById("h_address", idJson, (result) => {
        if (result) {
            baseModel.remove("h_address", idJson, handleDelete);
        } else {
            res.json(Util.returnMes("0", {}, "地址不存在!"));
        }
    })
}