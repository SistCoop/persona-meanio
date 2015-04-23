'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Persona = new Module('persona');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Persona.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Persona.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Persona.menus.add({
        title: 'Persona',
        link: 'persona.app',
        roles: ['all'],
        menu: 'main'
    });

    Persona.aggregateAsset('css', 'persona.css');

    //angular-sannitize
    Persona.aggregateAsset('js', '../lib/angular-sanitize/angular-sanitize.js');

    //angular-messages
    Persona.aggregateAsset('js', '../lib/angular-messages/angular-messages.js');

    //ng autofocus
    Persona.aggregateAsset('js', '../lib/ng-autofocus/dist/ng-autofocus.js');

    //sidebar dependences
    Persona.aggregateAsset('js', '../lib/angular-recursion/angular-recursion.js');
    Persona.aggregateAsset('js', '../lib/sg-sidebar-dropdown/src/sg-sidebar-dropdown.js');

    //ui-grid
    Persona.aggregateAsset('js', '../lib/angular-ui-grid/ui-grid.js');
    Persona.aggregateAsset('css', '../lib/angular-ui-grid/ui-grid.css');

    //angular-input-masks
    Persona.aggregateAsset('js', '../lib/angular-input-masks/angular-input-masks.js');

    //ui-select
    Persona.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
    Persona.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');

    //ui-select-utils
    Persona.aggregateAsset('js', '../lib/angular-ui-select-utils/dist/select.utils.js');

    //ui-select-utils
    Persona.aggregateAsset('js', '../lib/angular-ui-utils/ui-utils.js');

    //restangular
    Persona.aggregateAsset('js', '../lib/underscore/underscore.js');
    Persona.aggregateAsset('js', '../lib/restangular/dist/restangular.js');

    Persona.aggregateAsset('js', '../lib/angular-ui-notification/dist/angular-ui-notification.min.js');
    Persona.aggregateAsset('css', '../lib/angular-ui-notification/dist/angular-ui-notification.min.css');

    //sg-iso3166
    Persona.aggregateAsset('js', '../lib/sg-iso3166/dist/sg-iso3166.js');

    //sg-persona
    Persona.aggregateAsset('js', '../lib/sg-persona/dist/sg-persona.js');


    Persona.angularDependencies([
        'ngSanitize',
        'ngMessages',
        'ng-autofocus',
        'sgSidebarDropdown',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.select',
        'ui.select.utils',
        'ui.utils',
        'restangular',
        'ui-notification',
        'ui.utils.masks',
        'sg-iso3166',
        'sg-persona'
    ]);

    return Persona;
});
