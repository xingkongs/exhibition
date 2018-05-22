$(document).on("scroll",function (e) {
    if($(this).scrollTop()>200){
        $(".goTop li:last-of-type").css("opacity","1");
    }else{
        $(".goTop li:last-of-type").css("opacity","0");
    }
});
function alerts(ele, str, time1, location) {
    function doalert(ele){
        var $ele = ele || $alert;
        var time = time1 || 2000;
        if ($ele.length > 0) {
            if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0 || window.navigator.userAgent.indexOf("MSIE 8.0") > 0) {
                $ele.css({'margin-left': -$ele.width() / 2, 'margin-top': -$ele.height() / 2});
            }
        } else {
            $ele.css({'margin-left': 0, 'margin-top': 0});
        }
        $ele.show().html(str);
        setTimeout(function () {
            $ele.hide();
            if (Boolean(location)) {
            }
        }, time);
    }
    if(!ele.length){
        var dom = document.createElement("div");
       dom.className = "my_alert";
       document.body.appendChild(dom);
        $alert = $(".my_alert");
        doalert();
    }else{
        doalert(ele);
    }
}
$("#myform").on("submit", function () {
    var $name = $("input[name='info[0][value]']").val();
    var $phone = $("input[name='info[2][value]']").val();
    var $company = $("input[name='info[1][value]']").val();
    var $email = $("input[name='info[3][value]']").val();
    var $data = $("#myform").serialize();
    if($(".form_radio").length>0){
        if(!$("input[name='info[4][value]']:checked").val()){
            return false
        }
    }
    if($email){
        if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g.test($email))){
            return false
        }
    }
    if (/^[\S\s]{2,64}$/g.test($name) && /^1[1-9]\d{9}$/g.test($phone) && /^[\S\s]{2,64}$/g.test($company)) {
        $.ajax({
            type: "POST",
            url: "//www.d1ev.com/form/index/ajax_signup",
            datatype: "json",
            xhrFields: {withCredentials: true},
            data: $data,
            success: function (data) {
                if (data.code === 0) {
                    $('.alert--success').show();
                    var time = setTimeout(function () {
                        window.location.reload();
                    }, 2000)
                } else {
                    alerts($('.my_alert'), data.message, 2000);
                }
            }
        });
    }
    return false
});