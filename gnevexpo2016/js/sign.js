$('.business-form .btn').click(function () {

    if ($('.business-form .realname').val()==='') {
        alert('姓名不能为空');
        return false;
    }
    if ($('.business-form .email').val()==='') {
        alert('邮箱不能为空');
        return false;
    }
    if($('.business-form .phone').val()===""){
        alert('手机不能为空');
        return false;
    }
    if ($('.business-form .company').val()==='') {
        alert('公司不能为空');
        return false;
    }
    if ($('.business-form .medianame').val()==='') {
        alert('媒体名称不能为空');
        return false;
    }
    if ($('.business-form .job').val()==='') {
        alert('职位不能为空');
        return false;
    }
    if ($('.business-form .product').val()==='') {
        alert('展示的产品或服务不能为空');
        return false;
    }
    if ($('.business-form .area').val()==='') {
        alert('所需展位大小不能为空');
        return false;
    }
    if ($('.business-form .url').val()==='') {
        alert('公司网站不能为空');
        return false;
    }
    if((/^[0-9]{11}$/).test($('.business-form .phone').val())===false){
        alert('手机格式不正确');
        return false;
    }


});
