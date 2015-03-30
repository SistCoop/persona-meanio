'use strict';

/* jshint -W098 */
angular.module('mean.pkpersona').controller('PersonaJuridicaResumenCtrl', function($scope, $state){
    $scope.verPersona = function(item){
        $state.go('^.^.editarPersonaNatural.resumen', {id: item.id});
    };
});

