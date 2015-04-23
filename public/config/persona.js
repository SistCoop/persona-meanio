'use strict';

/* jshint -W098 */

angular.module('mean.persona').config(function(sgIso3166Provider) {
    sgIso3166Provider.restUrl = 'http://localhost:8080/iso3166/rest';
});

angular.module('mean.persona').config(function(sgPersonaProvider) {
    sgPersonaProvider.restUrl = 'http://localhost:8080/persona/rest';
});

angular.module('mean.persona').controller('PersonaSidebarController', ['$scope', '$menuItemsPersona', '$menuItemsAngulr',
    function($scope, $menuItemsPersona, $menuItemsAngulr) {
        $menuItemsAngulr.setMenuItems($menuItemsPersona.prepareSidebarMenu().getAll());
    }
]);
