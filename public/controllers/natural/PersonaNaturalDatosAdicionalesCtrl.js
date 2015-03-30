'use strict';

/* jshint -W098 */
angular.module('mean.pkpersona').controller('PersonaNaturalDatosAdicionalesCtrl', function($scope){

    $scope.refreshPage = function(){
        $scope.form.$setPristine();
    };
    $scope.refreshPage();

});
       