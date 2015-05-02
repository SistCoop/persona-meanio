'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('EditarPersonaNaturalCtrl', function(
    $scope, $state, personaNatural, SGPersonaNatural, toastr){

    $scope.view = {
        persona: personaNatural
    };

});