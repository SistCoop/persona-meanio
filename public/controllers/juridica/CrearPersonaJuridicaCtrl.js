'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('CrearPersonaJuridicaCtrl', function($scope, $state, SGPersonaJuridica, Notification){

    $scope.view = {
        persona: SGPersonaJuridica.$build()
    };

    $scope.loadParams = function(){
        $scope.view.persona.tipoDocumento = $scope.params.tipoDocumento;
        $scope.view.persona.numeroDocumento = $scope.params.numeroDocumento;
    };
    $scope.loadParams();

    $scope.submit = function(){
        if ($scope.form.$valid) {

            if(angular.isUndefined($scope.view.persona.representanteLegal)){
                Notification.warn('Representante legal no definido.');
                return;
            }
            if(angular.isUndefined($scope.view.persona.representanteLegal.id)){
                Notification.warn('Representante legal no definido.');
                return;
            }

            SGPersonaJuridica.$findByTipoNumeroDocumento($scope.view.persona.tipoDocumento, $scope.view.persona.numeroDocumento).then(function(response){
                if(response) {
                    Notification.error('Documento de identidad no disponible');
                } else {
                    $scope.save();
                }
            });
        }
    };

    $scope.save = function(){
        $scope.view.persona.representanteLegal = {
            tipoDocumento: $scope.view.persona.representanteLegal.tipoDocumento,
            numeroDocumento: $scope.view.persona.representanteLegal.numeroDocumento
        };
        $scope.view.persona.$save().then(
            function(response){
                Notification.success('Persona creada');
                $state.go('^.^.editarPersonaJuridica.resumen', {id: response.id});
            },
            function error(err){
                Notification.error(err.data.message);
            }
        );
    };

});