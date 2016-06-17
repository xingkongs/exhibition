$('.business-form .btn').click(function () {

    if ($('.business-form .realname').val()==='') {
        alert('姓名不能为空');
        return false;
    }
    if ($('.business-form .email').val()==='') {
        alert('邮箱不能为空');
        return false;
    }
    if($('.business-form .phone').val()===""){
        alert('手机不能为空');
        return false;
    }
    if ($('.business-form .company').val()==='') {
        alert('公司不能为空');
        return false;
    }
    if ($('.business-form .medianame').val()==='') {
        alert('媒体名称不能为空');
        return false;
    }
    if ($('.business-form .job').val()==='') {
        alert('职位不能为空');
        return false;
    }
    if ($('.business-form .product').val()==='') {
        alert('展示的产品或服务不能为空');
        return false;
    }
    if ($('.business-form .area').val()==='') {
        alert('所需展位大小不能为空');
        return false;
    }
    if ($('.business-form .url').val()==='') {
        alert('公司网站不能为空');
        return false;
    }
    if((/^[0-9]{11}$/).test($('.business-form .phone').val())===false){
        alert('手机格式不正确');
        return false;
    }


});
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