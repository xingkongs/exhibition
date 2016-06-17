
/*焦点图*/
!(function () {
    /*滚动图*/
    $(".banner").slide({ titCell:".num ul" , effect:"fold", mainCell:".pic_con" , autoPlay:true, delayTime:500 , autoPage:true,interTime:4000,mouseOverStop:true});

    /*鼠标移过，左右按钮显示*/
    $(".banner").hover(function(){
        $(this).find(".prev,.next").fadeTo("show",0.3);
    },function(){
        $(this).find(".prev,.next").hide();
    });
})()


$(".select li").hover(function() {

    $('.content2 li:eq(' + $(this).index() + ')').removeAttr("style").show().siblings().hide();
});

$(".blank5 p").click(function(){
    $(".new-s .hidden").removeClass("hidden").addClass("cur");
});

// $(".car_tab a").hover(function() {
//     $(this).addClass("cur").siblings().removeClass("cur");
//     $('.car_tabcon .car_sc:eq(' + $(this).index() + ')').removeAttr("style").show().siblings().hide();
// });

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

