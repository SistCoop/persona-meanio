'use strict';

/* jshint -W098 */

angular.module('mean.persona').controller('PersonaSidebarController',
    function ($scope, Auth, $menuItemsPersona) {

        $scope.menuItems = $menuItemsPersona.prepareSidebarMenu().getAll();

    }
);
