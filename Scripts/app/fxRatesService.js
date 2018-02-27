angular.module('taylorHarrowApp').service('fxRateService', function($http, $q) {

    this.getRates = function(ccy) {
        if (!ccy)
            return undefined;

        var promise = $http.get('https://api.fixer.io/latest?base=GBP')
            .then(function(response) {
                return response.data.rates[ccy];
            });

        return promise;
    };
});