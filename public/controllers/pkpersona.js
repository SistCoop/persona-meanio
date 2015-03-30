'use strict';

/* jshint -W098 */
angular.module('mean.pkpersona').config(function(sgPersonaProvider) {

    sgPersonaProvider.restUrl = 'https://someweb';

}).controller('PkpersonaSidebarController', ['$scope', '$menuItemsPersona',
    function($scope, $menuItemsPersona) {

        $scope.menuItems = $menuItemsPersona.prepareSidebarMenu().getAll();

    }
]).controller('PkpersonaController', ['$scope', 'Global', 'Pkpersona',
    function($scope, Global, Pkpersona) {
        $scope.global = Global;
        $scope.package = {
            name: 'pkpersona'
        };
    }
]);