angular.module('alurapic').controller('FotosController',function($scope,$http){

    $scope.fotos = [];
    
    //$http.get retrna uma promisse, não se pode esquecer
    $http.get('/v1/fotos')
         .success(fotos => $scope.fotos = fotos )
         .error(error => console.log(error));
});