//关于登录与注册；
!(function () {
    var url = "http://www.d1ev.com/public/getLoginStatus2";
    var enUrl=encodeURIComponent(window.location.href);
    $.ajax({
        type : 'get',
        url : url,
        cache : false,
        dataType: 'json',
        success : function(data){
            if(data['nickname']){
                $(".login").html('您好, <a href="http://www.d1ev.com/member" class="user">'+data['nickname']+' </a><a href="http://www.d1ev.com/logout?forward='+enUrl+'" class="zc"> 安全退出</a>');

            }else{
                //$(".login").html('<span>您好, 请</span> <a href="http://www.d1ev.com/login?forward=http://www.d1ev.com/sale" class="user">登录</a>　<a href="http://www.d1ev.com/register?forward='+enUrl+'" class="zc">免费注册</a>');

                $('.login').html('<a href="http://www.d1ev.com/login?forward='+enUrl+'" class="sign"><i></i>登录</a>|<a href="http://www.d1ev.com/register?forward='+enUrl+'" class="register">注册</a>');
            }
        }
    });})()
	
;//增加cookie
function addCookie(name,value,iDay){
	if(iDay){
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=name+'='+value+';path=/;expires='+oDate;
	}else{
		document.cookie=name+'='+value+';path=/';
	}
}
//获取cookie
function getCookie(name){
	var arr=document.cookie.split('; ');
	for(var i=0; i<arr.length; i++){
		var arr2=arr[i].split('=');
		//arr2[0]  name
		//arr2[1]  value
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	return '';
}


if(window.location.hash.search('baidu')>0){
	addCookie('source','baidu',1);
}else if(window.location.hash.search('360')>0){
	addCookie('source','360',1);
}else if(window.location.hash.search('duanxin')>0){
	addCookie('source','duanxin',1);
}else{	
}

if(getCookie('source')&&$("input[type='submit']")){
	$("input[type='submit']").before('<input type="hidden" value="'+getCookie('source')+'" name="source">');
}
