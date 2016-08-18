
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
    $('.select li:eq(' + $(this).index() + ')').addClass('on').siblings().removeClass("on")
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
// //返回顶部
!(function($) {
    var $backToTopTxt = "",
        $backToTopEle = $('<div class="backToTop"></div>')
            .appendTo($("body")).text($backToTopTxt).attr("title",$backToTopTxt)
            .click(function() {
                $("html, body").animate({ scrollTop:0 },500);
            }),
        $backToTopFun = function() {
            var st = $(document).scrollTop(),
                winh = $(window).height();
            (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
        };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });

})(jQuery);

//增加cookie
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

if(getCookie('source')){
	$("input[type='submit']").before('<input type="hidden" value="'+getCookie('source')+'" name="source">');
}






