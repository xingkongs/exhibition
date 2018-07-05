var arrimg="";
var arrvedio="";
var head="";
var state;
var change = {
	goupUuidArray:[],
	design_width: 750,
	api: 'http://123.56.67.7:84/api/0100',
	//api:'http://api.bridgeev.com:82/api/0100',
	//api2: 'http://123.56.67.7:84/api/0200',
	api2: 'http://api.bridgeev.com:82/api/0200',
	appVer:'2.1',
	IsIos:function(){
		var userInfo=navigator.useaarAgent;
		if(userInfo.indexOf("iPhone")!=-1){
			return 1;
		}else{
			return 0;
		}
	},
	IsPC: function() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
			"SymbianOS", "Windows Phone",
			"iPad",
			"iPod"
		];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	},
	url_attr: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	},
	url_attr_cn: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = decodeURI(window.location.href).substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	},
	body: document.getElementsByTagName('html')[0],
	action: function() {
		if (this.IsPC()) {
			this.view_width = document.documentElement.clientWidth > this.design_width ? this.design_width : document.documentElement.clientWidth;
			this.body.className = 'pc';
		} else {
			this.view_width = document.documentElement.clientWidth < 320 ? 320 : document.documentElement.clientWidth;
		}
		this.body.style.opacity = 1;
		this.body.style.fontSize = this.view_width * 100 / this.design_width + 'px';
	},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
	/*isWeiXin:function(){
		var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	        return true;
	    }else{
	        return false;
	    }
	}*/
}
change.action();
window.addEventListener('resize', function() {
	change.action();
})
var tost_tt;
var my = {
	system: 'ios',
	toast: function(obj) {
		document.getElementById("toast").innerHTML = obj;
		document.getElementById("toast").style.display = 'block';
		tost_tt = setTimeout(function() {
			document.getElementById("toast").style.display = 'none';
		}, 2000)
	},
	json_s: function(obj) {
		if (typeof obj != 'string') {
			return obj
		} else {
			return eval("(" + obj + ")")
		}
	},
	verson: 0
}
if (!(navigator.userAgent).match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
	my.system = 'a';
}
window.addEventListener('load', function() {
	var toast = document.createElement("section");
	toast.id = 'toast';
	document.querySelector('body').appendChild(toast);
})

var needLoading = true;
var loading = function(){
	needLoading = true;
	setTimeout(function(){
		if(!needLoading){
			return;
		}
		var loadingElement = '<div id="m-load-container"><div class="loading"></div></div>';
		$("body").append(loadingElement);
		//$("body").css("position","fixed");
	},500);
}
var unloading = function(){
	$("#m-load-container").remove();
	needLoading = false;
	//$("body").css("position","static");
}
//取出a链接带过来的参数
    function getUrlParam(url,name){
        var pattern = new RegExp("[?&]" + name +"\=([^&]+)","g");
        var matcher = pattern.exec(url);
        var items = null;
        if(matcher != null){
            try{
                items = decodeURIComponent(decodeURIComponent(matcher[1]));   
            }catch(e){
                try{
                    items = decodeURIComponent(matcher[1]);
                }catch(e){
                    items = matcher[1];
                }
            }
        }
        return items;
}
//详细地址是直辖市的时候 不显示省的字段
function judgeMunicipality(data){//一个字段包括省市区
	    var data = arguments[0];
	    if(data.indexOf("北京市") != -1 || data.indexOf("天津市") != -1 || data.indexOf("重庆市") != -1 || data.indexOf("上海市") != -1){
	    	    data =  data.substring(3);
	    	    return data;
	    }else{
	    	    return data;
	    }
}
////百度统计
//var _hmt = _hmt || [];
//(function() {
//var hm = document.createElement("script");
//hm.src = "//hm.baidu.com/hm.js?f3c309c187927b03d38788b1f04232bc";
//var s = document.getElementsByTagName("script")[0]; 
//s.parentNode.insertBefore(hm, s);
//})();

