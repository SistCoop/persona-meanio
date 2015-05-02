'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('EditarPersonaNaturalCtrl', function(
    $scope, $state, personaNatural, SGDialog, toastr){

    $scope.view = {
        persona: personaNatural
    };

    $scope.desactivar = function(){
        SGDialog.confirm('Desactivar', 'Estas seguro de querer desactivar el/la persona', function() {
            toastr.info('Las personas no pueden ser desactivadas, solo actualizadas');
        });
    };

});