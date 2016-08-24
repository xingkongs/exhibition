/**
 * Created by admin on 2016/7/4.
 */

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

