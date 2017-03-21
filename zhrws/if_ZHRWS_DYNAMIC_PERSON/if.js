var MEAP = require("meap");
var path = require("path");

function run(Param, Robot, Request, Response, IF) {
    var arg = JSON.parse(Param.body.toString());
    var option = {
        //wsdl:"http://saperp.cttq.com:8022/sap/bc/srt/wsdl/flv_10002A111AD1/bndg_url/sap/bc/srt/rfc/sap/zhrws_dynamic_person/800/zhrws_dynamic_person/zhrws_dynamic_person?sap-client=800",
        wsdl : path.join(__dirname.replace(IF.name, ""), global.wsdl, "zhrws_dynamic_person.xml"),
        func : "ZHRWS_DYNAMIC_PERSON.ZHRWS_DYNAMIC_PERSON.ZHRWS_DYNAMIC_PERSON",
        Params : arg,
        BasicAuth : global.TXSOAPAuth,
        agent : false
    };

    MEAP.SOAP.Runner(option, function(err, res, data) {
        Response.setHeader("Content-type", "text/json;charset=utf-8");
        if (!err) {
            Response.end(JSON.stringify(data));
        } else {
            Response.end(JSON.stringify({
                status : '-1',
                message : 'Error'
            }));
        }
    });
}

exports.Runner = run;