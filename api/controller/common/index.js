/**
 * @ Author: minchao
 * @ Create Time: 2019-07-11 18:38:34
 * @ Modified by: minchao
 * @ Modified time: 2019-07-12 15:06:42
 * @ Description: 公共接口
 */

var Util = require('../../../util/util')
var BaseModel = require('../../model/baseModel');


//获取全部的省和直辖市
exports.getAllprovince = (req, res, next) => {
    var baseModel = new BaseModel(); //创建baseModel实例
    var getAllprovinces = (result) => {
     

        result.forEach((el) => {
            console.log(el);
        });
        res.json(Util.returnMes("1", result, "获取地址列表成功!"));
    }
    baseModel.find("h_area", {
        'and': [{
            'key': 'level',
            "opts": "=",
            "value": "1"
        }],
        'or': []
    }, {
        'key': 'areaCode',
        'type': 'asc'
    }, [], ['areaCode','areaName'], getAllprovinces)

}
