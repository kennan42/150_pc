var MEAP=require("meap");
var path = require("path");

function run(Param,Robot,Request,Response,IF)
{
	var arg = JSON.parse(Param.body.toString());
	var option={
		//wsdl:global.TX_TRAVEL_URL_PRE  + "/EM_TRVL_InfQry/EMTRVLInfQryImplBean?wsdl",
		wsdl:path.join(__dirname.replace(IF.name,""),global.wsdl,"EM_TRVL_InfQry.xml"),
		func:"EM_TRVL_InfQry.EM_TRVL_InfQry_Port.EM_TRVL_InfQry",
		Params:arg,
		BasicAuth:global.TXSOAPAuth
	};
	
	MEAP.SOAP.Runner(option,function(err,res,data){
		Response.setHeader("Content-type","text/json;charset=utf-8");
		if(!err)
		{
			Response.end(JSON.stringify(data));
		}
		else
		{
			Response.end(JSON.stringify({status:'-1',message:'Error'}));
		}
	});
}

exports.Runner = run;