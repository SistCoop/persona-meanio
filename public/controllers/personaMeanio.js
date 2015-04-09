'use strict';

/* jshint -W098 */
angular.module('mean.persona-meanio').controller('PersonaMeanioController', ['$scope', 'Global', 'PersonaMeanio',
    function($scope, Global, PersonaMeanio) {
        $scope.global = Global;
        $scope.package = {
            name: 'persona-meanio'
        };
    }
]);

angular.module('mean.persona-meanio').controller('PersonaMeanioSidebarController', ['$scope', '$menuItemsPersona',
    function($scope, $menuItemsPersona) {
        $scope.menuItems = $menuItemsPersona.prepareSidebarMenu().getAll();
    }
]);

angular.module('mean.persona-meanio').config(function(sgPersonaProvider) {
    sgPersonaProvider.restUrl = 'https://someweb';
});