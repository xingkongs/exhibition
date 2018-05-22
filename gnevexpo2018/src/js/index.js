function GetRTime(){
    $(".countdown .time").each(function(){
        var $time=$(this).attr("data-time");
        var EndTime= new Date($time);
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
        var d=0;
        var h=0;
        var m=0;
        var s=0;
        if(t>0){
            d=Math.floor(t/1000/60/60/24);
            h=Math.floor(t/1000/60/60%24);
            m=Math.floor(t/1000/60%60);
            s=Math.floor(t/1000%60);
        }else if(t ===0){
            d = h = m = s =0
        }
        var d1 = $(this).find(".day").text();
        var h1 = $(this).find(".hour").text();
        var m1 = $(this).find(".min").text();
        var s1 = $(this).find(".sec").text();
        if(d1.toString()!==d.toString()){
            $(this).find(".day").text(d);
        }
        if(h1!==h.toString()){
            $(this).find(".hour").text(h);
        }
        if(m1!==m.toString()){
            $(this).find(".min").text(m);
        }
        if(s1!==s.toString()){
            $(this).find(".sec").text(s);
        }

    });
}

setInterval(GetRTime,1000);

$(document).on("scroll",function (e) {
    if($(this).scrollTop()>200){
        $(".goTop li:last-of-type").css("opacity","1");
    }else{
        $(".goTop li:last-of-type").css("opacity","0");
    }
});