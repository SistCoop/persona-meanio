'use strict';

/* jshint -W098 */
angular.module('mean.persona-meanio').controller('PersonaNaturalDatosAdicionalesCtrl', function($scope){

    $scope.refreshPage = function(){
        $scope.form.$setPristine();
    };
    $scope.refreshPage();

});
       