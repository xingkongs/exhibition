!(function(){

    function scrollTo(target) {
        var $target = $(target);
        $("html,body").animate({
            scrollTop: $target.offset().top-50
        }, 'slow')
    }
//拿到sectionTopList
    var $amTopbar = $('.am-collapse');
//nav click
    $amTopbar.on('click', '.am-nav a', function (e) {
        e.preventDefault();
        var $a = $(this);
        var target = $a.attr('href');
        $target = $(target);
        scrollTo($target)
    });
    $amTopbar.on('click','.am-nav',function(){
        $(this).closest('.am-collapse').removeClass('am-in')
    })
    $amTopbar.on('touchmove',function(){
        var $Topbar=$(this)
        setTimeout(function(){
            $Topbar.closest('.am-collapse').removeClass('am-in')
        },1000)
    })
    $('.jion').click(function(){
        $(this).find(".jion--re").toggleClass("jion--rev")
    })

})();
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

if(window.location.href.search('baidu')>0){
	addCookie('source','baidu',1);
}else if(window.location.href.search('360')>0){
	addCookie('source','360',1);
}else if(window.location.href.search('duanxin')>0){
	addCookie('source','duanxin',1);
}else{
	
}


