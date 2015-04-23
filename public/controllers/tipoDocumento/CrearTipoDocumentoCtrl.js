'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('CrearTipoDocumentoCtrl', function($scope, $state, SGTipoDocumento, SGTipoPersona, Notification){

    $scope.view = {
        tipoDocumento: SGTipoDocumento.$build()
    };

    $scope.combo = {
        tipoPersona: SGTipoPersona.$search().$object
    };
    $scope.combo.selected = {
        tipoPersona: undefined
    };

    $scope.submit = function(){
        if ($scope.form.$valid) {
            $scope.view.tipoDocumento.$save().then(
                function(response){
                    Notification.success('Tipo documento creado');
                    $state.go('^.editarTipoDocumento', {id: $scope.view.tipoDocumento.abreviatura});
                },
                function error(err){
                    Notification.error(err.data.message);
                }
            );
        }
    };

});
       