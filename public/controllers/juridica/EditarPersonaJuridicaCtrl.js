'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('EditarPersonaJuridicaCtrl', function($scope, $state, $modal, SGPersonaJuridica, Notification){

    $scope.view = {
        persona: undefined,
        personaDB: undefined
    };

    $scope.loadParams = function(){
        $scope.view.personaDB = $scope.params.object;
        $scope.view.personaDB.accionistas = $scope.params.object.$getAccionistas().$object;
        $scope.view.persona = angular.copy($scope.view.personaDB);
    };
    $scope.loadParams();

    $scope.submit = function(){
        if ($scope.form.$valid) {
            var save = function(){
                $scope.view.persona.$save().then(
                    function(data){
                        $scope.view.personaDB = angular.copy($scope.view.persona);
                        Notification.success('Persona actualizada');
                    },
                    function error(err){
                        Notification.error(err.data.message);
                    }
                );
            };
            SGPersonaJuridica.$findByTipoNumeroDocumento($scope.view.persona.tipoDocumento, $scope.view.persona.numeroDocumento).then(function(data){
                if(data && data.id === $scope.view.persona.id){
                    Notification.info('Documento de identidad disponible');
                    save();
                }
                else {
                    Notification.warn('Documento de identidad no disponible');
                }
            });
        }
    };
});

