if(window.navigator.onLine==true){
	
}else{
	alert("网络出错");
}

$.ajaxSetup({
	timeout:50000,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        if(textStatus == 'timeout') {
            window.location.href = "/html5/view/public/server_busy.html";
        }
    }
});

//弹出框
var strConfirmComm = function(objName, alertContent, buttonContent, str) {//confirm 弹出公共方法
    var _this = $('.' + objName + '');
    if ($(this).parent().hasClass("confirmHide") && buttonContent.length) {
        for (var i = 0, alertButtonContent = ""; i < buttonContent.length; i++) {
            alertButtonContent += '<div class="confirmButton">' + buttonContent[i] + '</div>';
        }
        $(this).parent().show().removeClass("confirmHide")
        $(".confirmButtonArea").html(alertButtonContent);
        _this.html(str);
        return;
    } else if (_this.hasClass("confirmHide")) {
        _this.removeClass("confirmHide").parent().show().addClass("rgbChange");
        _this.html(str);
        return;
    } else {
        $(".bgAlertShadow").remove();
        $("body").append(alertContent);
    }
}
var confirm = function (str, buttonContent, func0, func1) {
   if (typeof buttonContent !== "undefined" && buttonContent.length > 0) {
       for (var i = 0, alertButtonContent = ""; i < buttonContent.length; i++) {
           alertButtonContent += '<div class="confirmButton">' + buttonContent[i] + '</div>';
       }
       var alertContent = '<div class="bgAlertShadow"><div class="confirmBox"><p class="confirmContent">' + str + '</p><div class="confirmButtonArea">' + alertButtonContent + '</div></div></div>';
       strConfirmComm("confirmContent", alertContent, str);

       function confirmHide() {
           $(".bgAlertShadow").hide().addClass("confirmHide");
       }
       $(".confirmButton").click(function() {
           if (typeof func0 == "function" && $(this).index() == 0) func0();
           if (typeof func1 == "function" && $(this).index() == 1) func1();
           confirmHide();
       });
   } else {
       var alertContent = '<div class="bgAlertShadow"><div class="alertDefaultBox">' + str + '</div></div>';
       strConfirmComm("alertDefaultBox", alertContent, str);
       $(".bgAlertShadow").addClass("bgAlertHide");
       window.time = setTimeout(function() {
           $(".bgAlertShadow").removeClass("bgAlertHide").hide();
       }, 1500)
   }
}