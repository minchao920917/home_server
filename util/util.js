var fs = require('fs')//引入文件模块
    , http = require('http')
    , jwt = require('jsonwebtoken')
    , sys = require('util');//引入常用工具模块

/**
 * 获取客户端的ip地址
 * @param req 请求
 * @returns {*}
 */
exports.getClientIp = function (req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}

/**
 * 获取客户端的ip地址
 * @param req 请求
 * @returns {*}
 */
exports.getIp = function (req) {
    return req.headers['x-real-ip'] ? req.headers['x-real-ip'] : req.ip.replace(/::ffff:/, '');
}


/**
 * 返回json统一方法
 */

exports.returnMes = function (status, dataJson, msg) {
    return {
        "status": status,
        "data": dataJson,
        "msg": msg
    }
}

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 
 * @return {String}
 */
exports.formatPassTime = function (startTime) {
    var currentTime = Date.parse(new Date()),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
}

/**
 * 
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime  
 * @return {String}
 */
exports.formatRemainTime = function (endTime) {
    var startDate = new Date(); //开始时间
    var endDate = new Date(endTime); //结束时间
    var t = endDate.getTime() - startDate.getTime(); //时间差
    var d = 0,
        h = 0,
        m = 0,
        s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

/**
 * @desc   格式化${dataTime} yyyy-mm-dd hh:mm:ss
 * @param  {Date} dataTime 
 * @return {String}
 */
exports.toDataString = function (dataTime) {
    var unixtimestamp = new Date(dataTime);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return (
        year +
        "-" +
        month.substring(month.length - 2, month.length) +
        "-" +
        date.substring(date.length - 2, date.length) +
        " " +
        hour.substring(hour.length - 2, hour.length) +
        ":" +
        minute.substring(minute.length - 2, minute.length) +
        ":" +
        second.substring(second.length - 2, second.length)
    );
}


/**
 * @desc   生成token
 * @param  {data} data 
 * @return {String}
 */
exports.generateToken = function (data) {
    // let created = Math.floor(Date.now() / 1000);
    let cert = 'minchangfeng.com';
    let token = jwt.sign(
        data,
        cert, {
            // expiresIn: 60 * 60 * 1  // 1小时过期
            expiresIn: 60 * 1  // 1分钟过期
        });
    return token;
}

/**
 * @desc   token检验
 * @param  {token} token 
 * @return {Object}
 */
exports.verifyToken = function (token) {
    let cert = 'minchangfeng.com';
    let result = {
        code:1,
        mes:"token校验通过"
    };
    jwt.verify(token, cert,function(err,decoded){
        console.log(err)
        console.log(decoded)
        if(err){
            result.code = 0;
            result.mes = '无效的token';
        }else if(decoded.exp < Math.round(new Date() / 1000)){
            result.code = 0;
            result.mes = 'token已失效，请重新登录';
        }
        //当前判断keyValue如果不等于null/undefined/0/""/等值就执行下面的逻辑
        else{
            result.account_id = decoded.account_id;
        }
    });

    console.log(result)
    return result;

}