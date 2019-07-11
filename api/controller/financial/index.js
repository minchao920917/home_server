/**
 * @ Author: minchao
 * @ Create Time: 2019-07-10 18:18:03
 * @ Modified by: minchao
 * @ Modified time: 2019-07-11 18:31:18
 * @ Description: 账单管理 h_financial
 */

 
var Util = require('../../../util/util')
var BaseModel = require('../../model/baseModel');

//新增一条账单
exports.addFinacial = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var finacial = {
        "type": req.body.type,
        "figure_number": req.body.figure_number,
        "reason": req.body.reason,
        "create_time": Util.toDataString(new Date()),
        "person_id": req.body.person_id,
        "home_id": req.body.home_id
    }
    baseModel.insert("h_financial", finacial, function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "账单记录成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "账单记录失败!"));
        }
    })
}

//获取账单列表
exports.getFinacialList = (req, res, next)=>{
    var pageSize =req.body.pageSize?req.body.pageSize:"";
    var pageNum =req.body.pageNum?req.body.pageNum:"";
    
    var baseModel = new BaseModel(); //创建baseModel实例

    baseModel.find("h_financial", {
        'and': [],
        'or': []
    }, {
        'key': 'create_time',
        'type': 'desc'
    }, [(pageNum-1)*pageSize,pageSize], [], (results) => {
        console.log(results);
        if (results) {
            res.json(Util.returnMes("1", results, "获取账单列表成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取账单列表失败!"));
        }
    })
}

//根据id查找账单
exports.getFinacialyById = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var idJson = {
        "id": req.body.id
    }
    baseModel.findOneById("h_financial", idJson, (result) => {
        if (result) {
            res.json(Util.returnMes("1", result, "获取账单成功!"));
        } else {
            res.json(Util.returnMes("0", {}, "获取账单失败!"));
        }
    })
}

//修改账单
exports.editFinacial = (req, res, next)=>{
    var baseModel = new BaseModel(); //创建baseModel实例
    var notifies = {
        "id": req.body.id,
        "type": req.body.type,
        "figure_number": req.body.figure_number,
        "reason": req.body.reason,
        "update_time": Util.toDataString(new Date())
    }
    var idJson = {
        'id': notifies.id
    };
    var handleModify = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "该账单修改成功"));
        } else {
            res.json(Util.returnMes("0", {}, "该账单修改失败"));
        }
    }
    baseModel.findOneById("h_financial", idJson, (result) => {
        if (result) {
            baseModel.modify("h_financial", idJson, notifies, handleModify);
        } else {
            res.json(Util.returnMes("0", {}, "该账单不存在!"));
        }
    })
}

//删除账单
exports.removeFinacial = (req, res, next)=>{
    var idJson = {
        'id': req.body.id ? req.body.id : -1
    };
    var baseModel = new BaseModel(); //创建baseModel实例
    var handleDelete = function (result) {
        if (result) {
            res.json(Util.returnMes("1", {}, "该账单已成功删除"));
        } else {
            res.json(Util.returnMes("0", {}, "该账单删除失败"));
        }
    }
    baseModel.findOneById("h_financial", idJson, (result) => {
        if (result) {
            baseModel.remove("h_financial", idJson, handleDelete);
        } else {
            res.json(Util.returnMes("0", {}, "该账单不存在!"));
        }
    })
}