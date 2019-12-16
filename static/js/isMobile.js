function isMobile() {
    var userAgentInfo = navigator.userAgent;
    var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
    var mobile_flag = false;
    //根据userAgent判断是否是手机
    for(var v = 0; v < mobileAgents.length; v++) {
        if(userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            return mobile_flag;
        }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;
    //根据屏幕分辨率判断是否是手机
    if(screen_width < 826 && screen_height < 813) {
        mobile_flag = true;
    }
    return mobile_flag;
}