$(document).on("scroll",function (e) {
    if($(this).scrollTop()>200){
        $(".goTop li:last-of-type").css("opacity","1");
    }else{
        $(".goTop li:last-of-type").css("opacity","0");
    }
});
var list2015 = template("imglist",data.pic2015);
var list2016 = template("imglist",data.pic2016);
var list2017 = template("imglist",data.pic2017);
document.querySelector("#picsList2015").innerHTML = list2015;
document.querySelector("#picsList2016").innerHTML = list2016;
document.querySelector("#picsList2017").innerHTML = list2017;

document.querySelector("#demo-slider2015 .am-slides").innerHTML = list2015;
document.querySelector("#demo-slider2016 .am-slides").innerHTML = list2016;
document.querySelector("#demo-slider2017 .am-slides").innerHTML = list2017;



$(function() {
    $('#demo-slider2015.am-slider').flexslider({
        animationLoop: false,directionNav: false,slideshow: false, animation: "fade"
    });
    $('#demo-slider2016.am-slider').flexslider({
        animationLoop: false,directionNav: false,slideshow: false, animation: "fade"
    });
    $('#demo-slider2017.am-slider').flexslider({
        animationLoop: false,directionNav: false,slideshow: false, animation: "fade"
    });
});
$("#eventPhotos").find(".picsList li").on("click", function (e) {
    var $contain = $('#demo-slider2015.am-slider');
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        console.log("weixin");
    }else{
        if($(this).closest(".picsList").hasClass("picsList2015")){
            $('#demo-slider2015').show().siblings(".am-slider").hide();
            $contain = $('#demo-slider2015.am-slider');
        }
    }

    if($(this).closest(".picsList").hasClass("picsList2016")){
        $('#demo-slider2016').show().siblings(".am-slider").hide();
        $contain = $('#demo-slider2016.am-slider');
    }
    if($(this).closest(".picsList").hasClass("picsList2017")){
        $('#demo-slider2017').show().siblings(".am-slider").hide();
        $contain = $('#demo-slider2017.am-slider');
    }
    var $index = $(this).index();
    $contain.flexslider($index);
    var time = setTimeout(function () {
        $("#slidemodel").css("opacity", "1").css("z-index", "999");
    }, 300);


});

$("#slidemodel").find(".model_close").on("click", function () {
    $("#slidemodel").css("opacity", "0").css("z-index", "-1");
});

