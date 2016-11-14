/****
 * 这个文件是主文件，也是js调用的入口文件，也就是第一个调用的js文件
 * 这里一般放置需要预先设置的全局变量和常量
 * angular应用需要在这个文件声明主模块及其依赖，配置run方法，配置路由等
 * 这个文件中的主控制器会包含$rootscope，所以事件的转发需要在这里配置
 * 还有一些需要全局配置的事项必须在这里实现，比如登录验证，定时刷新，websocket等
 ****/
(function (angular) {
    var app = angular.module('myApp', []);
    app.controller('htmlctr',function($scope,$http) {
        var url = "https://raw.githubusercontent.com/BelinChung/HiApp/master/src/api/timeline.json?";
        $http.get(url).success(function (response) {
            $scope.newData = response.data;
            $scope.geturl = function(ID) {
                return 'http://lorempixel.com/68/68/people/' + ID
            };
            $scope.gettime = function(ms){
                ms = ms * 1000
                var d_second,d_minutes, d_hours, d_days
                var timeNow = new Date().getTime()
                var d = (timeNow - ms)/1000
                d_days = Math.round(d / (24 * 60 * 60))
                d_hours = Math.round(d / (60 * 60))
                d_minutes = Math.round(d / 60)
                d_second = Math.round(d)
                if (d_days > 0 && d_days < 2) {
                    return d_days + i18n.global.day_ago
                } else if (d_days <= 0 && d_hours > 0) {
                    return d_hours + i18n.global.hour_ago
                } else if (d_hours <= 0 && d_minutes > 0) {
                    return d_minutes + i18n.global.minute_ago
                } else if (d_minutes <= 0 && d_second >= 0) {
                    return i18n.global.just_now
                } else {
                    var s = new Date()
                    s.setTime(ms)
                    return (s.getFullYear() + '-' + f(s.getMonth() + 1) + '-' + f(s.getDate()) + ' '+ f(s.getHours()) + ':'+ f(s.getMinutes()))
                }

                function f(n){
                    return n < 10 ? '0' + n : n
                }
            };
            $scope.names =[
                {text:"Forward"},
                {text:"Comment"},
                {text:"knowabout"}
            ]
        })
    })
})(angular);
