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
    });})();/**
 
