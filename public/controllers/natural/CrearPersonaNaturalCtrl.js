'use strict';

/* jshint -W098 */
angular.module('mean.pkpersona').controller('CrearPersonaNaturalCtrl', function($scope, $state, SGPersonaNatural, Notifications){

    $scope.view = {
        persona: SGPersonaNatural.$build()
    };

    $scope.loadParams = function(){
        $scope.view.persona.tipoDocumento = $scope.params.tipoDocumento;
        $scope.view.persona.numeroDocumento = $scope.params.numeroDocumento;
    };
    $scope.loadParams();

    $scope.submit = function(){
        if ($scope.form.$valid) {
            var save = function(){
                $scope.view.persona.$save().then(
                    function(response){
                        Notifications.success('Persona creada');
                        $state.go('^.^.editarPersonaNatural.resumen', {id: response.id});
                    },
                    function error(err){
                        Notifications.error(err.data.message);
                    }
                );
            };
            SGPersonaNatural.$findByTipoNumeroDocumento($scope.view.persona.tipoDocumento, $scope.view.persona.numeroDocumento).then(function(data){
                if(data) {
                    Notifications.error('Documento de identidad no disponible');
                } else {
                    save();
                }
            });
        }
    };

});
       