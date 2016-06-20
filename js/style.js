
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
})();


$(".select li").hover(function() {

    $('.content2 li:eq(' + $(this).index() + ')').removeAttr("style").show().siblings().hide();
});

$(".blank5 p").on("click",function(){
    $(".new-s .hidden").removeClass("hidden");
    $(this).find('.cur1').css("opacity",0)
});
$(".blank2 p").on("click",function(){
    $(".parter .hidden").removeClass("hidden");
    $(this).find('.cur1').css("opacity",0)
});

// $(".car_tab a").hover(function() {
//     $(this).addClass("cur").siblings().removeClass("cur");
//     $('.car_tabcon .car_sc:eq(' + $(this).index() + ')').removeAttr("style").show().siblings().hide();
// });



