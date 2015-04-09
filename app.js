'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var PersonaMeanio = new Module('persona-meanio');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
PersonaMeanio.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    PersonaMeanio.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    PersonaMeanio.menus.add({
        title: 'Persona',
        link: 'personaMeanio.app',
        roles: ['all'],
        menu: 'main'
    });

    PersonaMeanio.aggregateAsset('css', 'personaMeanio.css');

    //sidebar dependences
    PersonaMeanio.aggregateAsset('js', '../lib/angular-recursion/angular-recursion.js');
    PersonaMeanio.aggregateAsset('js', '../lib/sg-sidebar-dropdown/src/sg-sidebar-dropdown.js');

    //ui-grid
    PersonaMeanio.aggregateAsset('js', '../lib/angular-ui-grid/ui-grid.js');
    PersonaMeanio.aggregateAsset('css', '../lib/angular-ui-grid/ui-grid.css');

    //ui-select
    PersonaMeanio.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
    PersonaMeanio.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');

    //restangular
    PersonaMeanio.aggregateAsset('js', '../lib/underscore/underscore.js');
    PersonaMeanio.aggregateAsset('js', '../lib/restangular/dist/restangular.js');

    PersonaMeanio.aggregateAsset('js', '../lib/angular-ui-notification/dist/angular-ui-notification.min.js');
    PersonaMeanio.aggregateAsset('css', '../lib/angular-ui-notification/dist/angular-ui-notification.min.css');

    //sg-iso3166
    PersonaMeanio.aggregateAsset('js', '../lib/sg-iso3166/dist/sg-iso3166.js');

    //sg-persona
    PersonaMeanio.aggregateAsset('js', '../lib/sg-persona/dist/sg-persona.js');


    PersonaMeanio.angularDependencies([
        'sgSidebarDropdown',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.select',
        'restangular',
        'ui-notification',
        'sg-iso3166',
        'sg-persona'
    ]);

    return PersonaMeanio;
});
