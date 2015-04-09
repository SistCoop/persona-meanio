'use strict';

/* jshint -W098 */
angular.module('mean.persona-meanio').controller('PersonaNaturalDatosPrincipalesCtrl', function($scope, $state, SGCountryCode, SGSexo, SGEstadoCivil, SGPersonaNatural, SGTipoDocumento, Notification){

    $scope.refreshPage = function(){
        $scope.form.$setPristine();
    };
    $scope.refreshPage();

    $scope.combo = {
        pais: SGCountryCode.$search().$object,
        tipoDocumento: SGTipoDocumento.$search({tipoPersona: 'natural'}).$object,
        sexo: SGSexo.$search().$object,
        estadoCivil: SGEstadoCivil.$search().$object
    };
    $scope.combo.selected = {
        pais: undefined,
        tipoDocumento: undefined,
        sexo: undefined,
        estadoCivil: undefined
    };

    $scope.check = function($event){
        if(!angular.isUndefined($event))
            $event.preventDefault();
        if(!angular.isUndefined($scope.combo.selected.tipoDocumento) && !angular.isUndefined($scope.view.persona.numeroDocumento)){
            SGPersonaNatural.$findByTipoNumeroDocumento($scope.combo.selected.tipoDocumento.abreviatura, $scope.view.persona.numeroDocumento).then(function(data){
                if(!data)
                    Notification.info('Documento de identidad disponible');
                else
                    Notification.warn('Documento de identidad no disponible');
            });
        }
    };

    $scope.submit = function(){

    };

});