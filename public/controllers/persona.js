'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('PersonaController', ['$scope', 'Global', 'Persona',
    function($scope, Global, Persona) {
        $scope.global = Global;
        $scope.package = {
            name: 'persona'
        };
    }
]);