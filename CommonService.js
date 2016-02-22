/**
 * Created by lvly on 2016/2/22.
 */
    //公共模块
var commonModule=angular.module("common.service",[]);
commonModule.factory('MathService',[function(){
    return {
        add:function(a,b){
            return a+b;
        },
        subtract:function(a,b){
            return a-b;
        }
    }
}]);
commonModule.factory('ZTBCountdown', [function() {

    var __systemDate;
    function getAdayBeginTime() {
        var time = new Date(__systemDate);
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);
        time.setMilliseconds(0);

        return time.getTime();
    };

    /**
     * 智投保倒计时
     */
    return function ztbCountdown(systemDate) {
        if(systemDate) __systemDate = systemDate;

        var sd = new Date(__systemDate);

        if(sd.getHours() >= 10) {
            if(sd.getMinutes() > 1 || sd.getSeconds() > 2)
                return {h: '00', m: '00', s: '00', flag: false, notload: true};

            return {h: '00', m: '00', s: '00', flag: false};
        }

        var adbt = getAdayBeginTime();
        var diffDate = new Date(adbt - __systemDate + adbt + (1000*60*60*10))

        __systemDate += 1000;
        return {
            h: diffDate.getHours() < 10 ? '0'+ diffDate.getHours() : diffDate.getHours(),
            m: diffDate.getMinutes() < 10 ? '0'+ diffDate.getMinutes() : diffDate.getMinutes(),
            s: diffDate.getSeconds() < 10 ? '0'+ diffDate.getSeconds() : diffDate.getSeconds()
        }
    }
}]);

