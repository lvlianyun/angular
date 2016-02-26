/**
 * Created by lvly on 2016/2/26.
 */
var dirAppModule = angular.module('dirAppModule',[]);
dirAppModule.directive('cdHello',function(){
    return {
        restrict:'EAC',
        template:'<h3>hi,code_bunny</h3>',
        replace:true
    }
});