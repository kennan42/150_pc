/*------------------------------------------------------------
 // Copyright (C) 2016 正益无线（北京）科技有限公司  版权所有。
 // 文件名：if.js
 // 文件功能描述：移除黑名单,封装了该接口
 //
 // 创 建 人：杨尚飞
 // 创建日期：2015.1.23
 //
 // 修 改 人：
 // 修改日期：
 // 修改描述：
 //-----------------------------------------------------------*/

var MEAP = require("meap");

function run(Param, Robot, Request, Response, IF) {
    Response.setHeader("Content-type", "text/json;charset=utf-8");
    var option = {
        method : "POST",
        url : global.its + "/its-gwy/userBusi/removeBlackUser.json",
        Cookie : "true",
        agent : "false",
        Enctype : "application/json",
        Body : Param.body.toString()
    };

    MEAP.AJAX.Runner(option, function(err, res, data) {
        if (!err) {
            Response.end(data);
        } else {
            Response.end(JSON.stringify({
                status : '1',
                message : JSON.stringify(err)
            }));
        }
    }, Robot);
}

exports.Runner = run;

