'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('CrearPersonaNaturalCtrl', function($scope, $state, SGPersonaNatural, Notification){

    $scope.view = {
        persona: SGPersonaNatural.$build()
    };

    $scope.loadParams = function(){
        $scope.view.persona.tipoDocumento = $scope.params.tipoDocumento;
        $scope.view.persona.numeroDocumento = $scope.params.numeroDocumento;
    };
    $scope.loadParams();

    $scope.loadDefaultConfiguration = function() {
        $scope.view.persona.codigoPais = 'PER';
    };
    $scope.loadDefaultConfiguration();

    $scope.submit = function(){
        if ($scope.form.$valid) {
            var save = function(){
                $scope.view.persona.$save().then(
                    function(response){
                        Notification.success('Persona creada');
                        $state.go('^.^.editarPersonaNatural.resumen', {id: response.id});
                    },
                    function error(err){
                        Notification.error(err.data.message);
                    }
                );
            };
            SGPersonaNatural.$findByTipoNumeroDocumento($scope.view.persona.tipoDocumento, $scope.view.persona.numeroDocumento).then(function(data){
                if(data) {
                    Notification.error('Documento de identidad no disponible');
                } else {
                    save();
                }
            });
        }
    };

});
       