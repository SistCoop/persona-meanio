var module = angular.module('demoApp', ['restangular', 'sg-persona']);

module.config(function(sgPersonaProvider){

    sgPersonaProvider.restUrl = 'https://someweb';

});

module.controller('PruebaController', function($scope, Restangular, SGPersonaNatural, PersonaRestangular, sgPersona){

    $scope.obj = SGPersonaNatural.$search();

});