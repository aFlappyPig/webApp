/****
 * 这个文件是主文件，也是js调用的入口文件，也就是第一个调用的js文件
 * 这里一般放置需要预先设置的全局变量和常量
 * angular应用需要在这个文件声明主模块及其依赖，配置run方法，配置路由等
 * 这个文件中的主控制器会包含$rootscope，所以事件的转发需要在这里配置
 * 还有一些需要全局配置的事项必须在这里实现，比如登录验证，定时刷新，websocket等
 ****/
(function (angular) {
    "use strict";

    angular.module('directives', []);
    angular.module('services', []);
    angular.module('myWebApp', ['ui.router', 'ui.bootstrap', 'ngCookies', 'ngFileUpload', 'directives', 'services']);



})(angular);