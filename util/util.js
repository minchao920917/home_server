var fs = require('fs')//引入文件模块
    , http = require('http')
    , util = require('util')
    , sys = require('util');//引入常用工具模块
/**
 * 获取json文件中的key的
 * @param fileName 文件路径+文件名
 * @param key 属性名key
 * @returns {*}
 */
exports.get = function (fileName, key) {
    var configJson = {};
    try {
        var str = fs.readFileSync(fileName, 'utf8');//读取json文件
        configJson = JSON.parse(str);//将字符转成对象类型
    } catch (e) {
        sys.debug("JSON 解析错误")
    }
    return configJson[key];//返回key的对象
}

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
 * 根据 ip 获取获取地址信息
 */
exports.getIpInfo = function (ip) {
    var sina_server = 'http://ipquery.market.alicloudapi.com/query?ip=';
    var url = sina_server + ip;
    var add = "";
    http.get(url, function (res) {
        if (res.code === '200') {
            add = data.country + "," + data.region + "," + data.city;
        }
    });
    return add;
};


/**
 * @param {string} ip ip地址
 * @method 根据ip地址获取地理信息
 */
exports.getAddress =function(ip){
    let options = {
        hostname: 'http://ipquery.market.alicloudapi.com',    //接口域
        path: `/query?ip=${ip}`,    //请求地址
        headers: {    //请求头
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "435c4184c2fe4af6ba2537a6f28e3706"
        }
    }
    return new Promise((resolve, reject) => {
        // 发起请求
        let req = http.request(options, res => {
            let chunks = [];
            
            res.on('data', chunk => {
                chunks.push(chunk);
            })
            res.on('end', () => {
                let buffer = Buffer.concat(chunks).toString();
                // 如果接口返回空值
                let data = buffer ? JSON.parse(buffer) : {code: 1, data: 'ip接口没有返回值'};
                resolve(data);
            })
        })
        // 请求出错
        req.on('error', err => {
            console.log('请求接口出错')
            resolve({code: 1, data: "请求ip接口出错"});
        })
        // 请求结束
        req.end();
    })
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