'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('PersonaJuridicaDatosAdicionalesCtrl', function($scope, $state){

    $scope.goTabRepresentante = function(){
        if($scope.form.$valid){
            $state.go('^.^.crearPersonaJuridica.representante');
        } else {
            $scope.form.$setSubmitted();
        }
    };

});




        