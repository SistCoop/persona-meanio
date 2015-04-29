'use strict';

/* jshint -W098 */

angular.module('mean.persona').controller('PersonaSidebarController', ['$scope', '$menuItemsPersona',
    function($scope, $menuItemsPersona) {

        $scope.menuItems = $menuItemsPersona.prepareSidebarMenu().getAll();

    }
]);
