
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



