var app = angular.module("mrj", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/principal', {
        templateUrl: 'principal.html',
        controller: 'PrincipalCtrl'
    })
    .when('/sobre', {
        templateUrl: 'sobre.html',
        controller: 'PrincipalCtrl'
    })
    .when('/servicos', {
        templateUrl: 'servicos.html',
        controller: 'ServicosCtrl'
    })
    .when('/contato', {
        templateUrl: 'contato.html',
        controller: 'ContatoCtrl'
    })
    .otherwise({redirectTo:'/principal'});
}]);


app.controller('PrincipalCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('servicos.json').then(function(response){
        $scope.servicos = response.data;
    });
}]);

app.controller('ServicosCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('servicos.json').then(function(response){
        $scope.servicos = response.data;
    });
}]);

app.controller('ContatoCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('localizacao.json').then(function(response){
        $scope.localizacao = response.data;
    });
}]);
