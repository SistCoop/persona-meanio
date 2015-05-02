'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('PersonaNaturalDatosPrincipalesCtrl', function(
    $scope, $state, personaNatural, SGCountryCode, SGSexo, SGEstadoCivil, SGPersonaNatural, SGTipoDocumento, toastr){

    $scope.view = {
        persona: personaNatural
    };

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
                    toastr.info('Documento de identidad disponible', 'Info');
                else
                    toastr.warning('Documento de identidad no disponible', 'Warning');
            });
        }
    };

    $scope.submit = function(){
        if ($scope.form.$valid) {
            var save = function(){
                $scope.view.persona.$save().then(
                    function(response){
                        toastr.success('Persona actualizada', 'Success');
                        $scope.view.personaDB = angular.copy($scope.view.persona);
                    },
                    function error(err){
                        toastr.error(err.data.message, 'Error');
                    }
                );
            };
            SGPersonaNatural.$findByTipoNumeroDocumento($scope.view.persona.tipoDocumento, $scope.view.persona.numeroDocumento).then(function(data){
                if(data && data.id !== $scope.view.persona.id){
                    toastr.error('Documento de identidad no disponible', 'Error');
                }
                else {
                    save();
                }
            });
        }
    };

});