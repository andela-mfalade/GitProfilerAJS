var gitApp = angular.module('gitApp', ['serviceModule']);
gitApp.controller('gitCtrl', ['$scope', 'searchUser', function($scope, searchUser) {
  // console.log(a);
  $scope.resultsShown = false;
  $scope.errorThrown  = false;
  $scope.searchUser = function(query) {
      $scope.resultsShown = true;
      $scope.errorThrown  = false;
      $scope.responseData = searchUser.getUserInfo(query, $scope); 
  };
}]);