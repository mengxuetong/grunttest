/**
 * Created by mengxt on 2015/3/12.
 */
var app = angular.module('bootleModule',['ngRoute']);
app.run(function($location){
    $location.path('/reg');
});
app.config(function($routeProvider){
    $routeProvider.when('/reg',{
        templateUrl: './views/reg.html',
        controller: 'regCtrl'
    }).when('/throw',{
        templateUrl: './views/throw.html',
        controller: 'throwCtrl'
    }).when('/pick',{
        templateUrl: './views/pick.html',
        controller: 'pickCtrl'
    }).when('/view',{
        templateUrl: './views/view.html',
        controller: 'view'
    }).otherwise({
        redirectTo: '/reg'
    });
});
app.controller('regCtrl',['$scope','$http','$location', function($scope,$http,$location){
    $scope.reg = function(){
        $http({method: 'POST',url:'/reg'}).
            success(function(data,status,headers,config){
            $location.path('/throw')
            console.log(data);
        })
    }
}]);
app.controller('throwCtrl',['$scope','$http','$location', function($scope,$http,$location){
    $scope.send = function(){
        $http({method: 'POST',url:'/throw'})
        .success(function(data,status,headers,config){
            $location.path('/reg');
            console.log(data);
        })
    }
}]);
app.controller('pickCtrl',['$scope','$http', function($scope,$http){
    $scope.pick = function(){
        $http({method: 'POST',url:'/pick'}).
            success(function(data,status,headers,config){
                console.log(data);
            })
    }
}]);