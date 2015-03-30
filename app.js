'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Pkpersona = new Module('pkpersona');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Pkpersona.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Pkpersona.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Pkpersona.menus.add({
        title: 'Persona',
        link: 'pkpersona.app',
        roles: ['all'],
        menu: 'main'
    });

    Pkpersona.aggregateAsset('css', 'pkpersona.css');

    //sidebar dependences
    Pkpersona.aggregateAsset('js', '../lib/angular-recursion/angular-recursion.js');
    Pkpersona.aggregateAsset('js', '../lib/sg-sidebar-dropdown/src/sg-sidebar-dropdown.js');

    //ui-grid
    Pkpersona.aggregateAsset('js', '../lib/angular-ui-grid/ui-grid.js');
    Pkpersona.aggregateAsset('css', '../lib/angular-ui-grid/ui-grid.css');

    //ui-select
    Pkpersona.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
    Pkpersona.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');

    //restangular
    Pkpersona.aggregateAsset('js', '../lib/underscore/underscore.js');
    Pkpersona.aggregateAsset('js', '../lib/restangular/dist/restangular.js');

    //sg-iso3166
    //Pkpersona.aggregateAsset('js', '../lib/sg-iso3166/dist/sg-iso3166.js');

    //sg-persona
    Pkpersona.aggregateAsset('js', '../lib/sg-persona/dist/sg-persona.js');

    Pkpersona.angularDependencies([
        'sgSidebarDropdown',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.select',
        'restangular',
        //'sg-iso3166',
        'sg-persona'
    ]);

    return Pkpersona;
});
