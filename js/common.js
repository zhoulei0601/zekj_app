mui.extend({
	//请求后台服务基础地址
	baseUrl: function(){
	        // return  "http://172.200.100.200:8980/js/f/";
			 return  "http://192.168.1.115:8980/js/f/";

	    },
	baseLoginUrl: function(){
	        return  "http://192.168.1.115:8980/js/a/";
	
	    },
	imageUrl: function(){
		    return  "http://172.200.100.100:8980/js/f/static/images/PatrolRepairImages/";
		},
	
	//获取列集合
	getDataColumns:function(data) {
			var columns = {};
			$.each(data.defCols, function(key){
				columns[key] = {
					"name" : data.defCols[key]["name"],
					"type" : data.defCols[key]["type"]
				};
			});
			return columns;
		},
	
	//获取属性内容
	getResultData:function(dataResult,param){
			var result;
			if(param.indexOf("Time")>-1){
				result=dataResult[param+"Str"]==undefined?"":dataResult[param+"Str"];
			}else{
				result=dataResult[param]==undefined?"":dataResult[param];
			}
			return result;
		},
	hiddenCommitButton:function(){
		$(".btnCommit").each(function(){
			this.style.display="none";
		});
	},
	showCommitButton:function(){
		$(".btnCommit").each(function(){
			this.style.display="";
		});
	},
	
	hideDiv:function (count){
		for(var i=1;i<count;i++){
			$("#divInput"+i)[0].style.display="none";
		}
	},
	appendLoading:function (){
		var pDiv = $('#middlediv').append("<div id='divLoading' class='divLoading'></div>");
		
	},
	showLoading:function (){
		$('#divLoading').css("display","block");
	},
	hideLoading:function (){
		$('#divLoading').css("display","none");
	}
	
});
	
	

// jQuery.extend({
// 		//请求后台服务基础地址
// 		baseUrl: function(){
// 	        return  "http://192.168.1.173:8980/js/a/";
// 	    },
// });

