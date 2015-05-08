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

    //Persona.aggregateAsset('css', 'persona.css');

    return Persona;
});
