var App = angular.module('App', []);

App.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {
    $scope.loadButtonText="Load";
    $scope.loadFeed=function(){
        Feed.parseFeed($scope.feedSrc).then(function(res){
            $scope.feeds=res.data.responseData.feed.entries;
        });
    }
}]);

App.factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);