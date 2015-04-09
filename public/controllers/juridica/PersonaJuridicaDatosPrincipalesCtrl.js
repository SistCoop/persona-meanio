'use strict';

/* jshint -W098 */
angular.module('mean.persona-meanio').controller('PersonaJuridicaDatosPrincipalesCtrl', function($scope, $state, SGCountryCode, SGTipoDocumento, SGTipoEmpresa, SGPersonaJuridica, Notification){

    $scope.combo = {
        pais: SGCountryCode.$search().$object,
        tipoDocumento: SGTipoDocumento.$search({tipoPersona: 'juridica'}).$object,
        tipoEmpresa: SGTipoEmpresa.$search().$object
    };
    $scope.combo.selected = {
        pais: undefined,
        tipoDocumento: undefined,
        tipoEmpresa: undefined
    };

    $scope.checkPersona = function($event){
        if(!angular.isUndefined($event))
            $event.preventDefault();
        if(!angular.isUndefined($scope.combo.selected.tipoDocumento) && !angular.isUndefined($scope.view.persona.numeroDocumento)){
            SGPersonaJuridica.$findByTipoNumeroDocumento($scope.combo.selected.tipoDocumento.abreviatura, $scope.view.persona.numeroDocumento).then(function(data){
                if(!data)
                    Notification.info('Documento de identidad disponible.');
                else
                    Notification.warn('Documento de identidad no disponible');
            });
        }
    };

    $scope.goTabRepresentante = function(){
        if($scope.form.$valid){
            $state.go('app.administracion.personas.crearPersonaJuridica.representante');
        } else {
            $scope.form.$setSubmitted();
        }
    };

});

        