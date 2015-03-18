var serviceModule = angular.module('serviceModule', []);

serviceModule.factory('searchUser', ['$http', function($http){
  return {

    getUserInfo: function(q, f) {
      $http.get('https://api.github.com/users/' + q)
      .success(function( data ) {
        f.retrievedInfo = data;
        this.repoURL = data.organizations_url;
      })
      .error(function( err ) {
        f.errorThrown = true;
        f.resultsShown = false;
        f.errMsg = err;
        console.log(err);
      });


      $http.get('https://api.github.com/users/' + q + '/orgs')
      .success(function( data ) {
        f.organizations = data;
      })
      .error(function( err ) {
      });


      $http.get('https://api.github.com/users/' + q + '/repos')
      .success(function( data ) {
        f.repositories = data;
        console.log(f);
      })
      .error(function( err ) {
      });
    }        
  }
}]);


