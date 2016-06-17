
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