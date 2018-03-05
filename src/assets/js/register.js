$(".user-phone").blur(function () {
    //1、定义规则：
    //手机号码的规则，1开头，第二位是（3,4,5,7,8,9），一共十一位纯数字
    var regObj = /^1[345789]\d{9}$/i;
    if (regObj.test(this.value)) {
        $(".reg-error").html("√");
    } else {
        $(".reg-error").html("×")
    }
})
$(".user-test").blur(function () {
    //1、定义规则：
    //手机号码的规则，1开头，第二位是（3,4,5,7,8,9），一共十一位纯数字
    var regObj = /54pfl/i;
    if (regObj.test(this.value)) {      
    } else {
        $(".user-test").val("验证码输入错误")
    }
})
$(".reg-ag").click(function () {
    $(this).removeClass("reg-ag");
    $(this).addClass("reg-right")
})
$(".reg-goback").click(function () {
    history.back();
})