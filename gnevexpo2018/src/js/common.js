$(document).on("scroll",function (e) {
    if($(this).scrollTop()>200){
        $(".goTop li:last-of-type").css("opacity","1");
    }else{
        $(".goTop li:last-of-type").css("opacity","0");
    }
});