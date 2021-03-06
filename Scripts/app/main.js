angular.module('taylorHarrowApp').controller('mainController', function ($scope, fxRateService) {
    fxRateService.getRates('EUR').then(function(data) {
        $scope.eurRate = data;
    });
    fxRateService.getRates('USD').then(function(data) {
        $scope.usdRate = data;
    });
});

angular.module('taylorHarrowApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/Services', {
            templateUrl: 'pages/services.html'
        })
        .when('/AboutUs', {
            templateUrl: 'pages/aboutUs.html'
        })
        .when('/Contact', {
            templateUrl: 'pages/contact.html'
        });
});