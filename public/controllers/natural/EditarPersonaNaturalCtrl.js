'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('EditarPersonaNaturalCtrl', function($scope, $state, SGPersonaNatural, Notification){

    $scope.view = {
        persona: undefined,
        personaDB: undefined
    };

    $scope.loadParams = function(){
        $scope.view.persona = $scope.params.object;
        $scope.view.personaDB = angular.copy($scope.params.object);
    };
    $scope.loadParams();

    $scope.submit = function(){
        if ($scope.form.$valid) {
            var save = function(){
                $scope.view.persona.$save().then(
                    function(response){
                        Notification.success('Persona actualizada');
                        $scope.view.personaDB = angular.copy($scope.view.persona);
                    },
                    function error(err){
                        Notification.error(err.data.message);
                    }
                );
            };
            SGPersonaNatural.$findByTipoNumeroDocumento($scope.view.persona.tipoDocumento, $scope.view.persona.numeroDocumento).then(function(data){
                if(data && data.id !== $scope.view.persona.id){
                    Notification.error('Documento de identidad no disponible');
                }
                else {
                    save();
                }
            });
        }
    };
});