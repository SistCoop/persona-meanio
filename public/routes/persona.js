'use strict';

angular.module('mean.persona').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('persona', {
                abstract: true,
                url: '/persona',
                templateUrl: 'persona/views/tpls/layout/body.html',
                controller: 'PersonaSidebarController'
            })
            .state('persona.home', {
                url: '/home',
                templateUrl: 'persona/views/index.html'
            })
            .state('persona.app', {
                url: '/app',
                templateUrl: 'persona/views/app.html'
            })

            .state('persona.app.personas', {
                url: '/personas',
                template: '<div ui-view></div>'
            })

            .state('persona.app.personas.buscarPersonaNatural', {
                url: '/natural/buscar',
                templateUrl: 'persona/views/natural/form-buscar-personaNatural.html',
                controller: 'BuscarPersonaNaturalCtrl'
            }).state('persona.app.personas.crearPersonaNatural', {
                url: '/natural?tipoDocumento&numeroDocumento',
                templateUrl: 'persona/views/natural/form-crear-personaNatural.html',
                controller: function($scope, $stateParams) {
                    $scope.params = {};
                    $scope.params.tipoDocumento = $stateParams.tipoDocumento;
                    $scope.params.numeroDocumento = $stateParams.numeroDocumento;
                }
            }).state('persona.app.personas.crearPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/natural/form-datosPrincipales.html',
                controller: 'PersonaNaturalDatosPrincipalesCtrl'
            }).state('persona.app.personas.editarPersonaNatural', {
                url: '/natural/{id:[0-9]{1,8}}',
                templateUrl: 'persona/views/natural/form-editar-personaNatural.html',
                resolve: {
                    personaNatural: function($state, $stateParams, SGPersonaNatural) {
                        return SGPersonaNatural.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, personaNatural) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = personaNatural;
                }
            }).state('persona.app.personas.editarPersonaNatural.resumen', {
                url: '/resumen',
                templateUrl: 'persona/views/natural/form-resumen.html',
                controller: 'PersonaNaturalResumenCtrl'
            }).state('persona.app.personas.editarPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/natural/form-datosPrincipales.html',
                controller: 'PersonaNaturalDatosPrincipalesCtrl'
            }).state('persona.app.personas.editarPersonaNatural.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'persona/views/natural/form-datosAdicionales.html',
                controller: 'PersonaNaturalDatosAdicionalesCtrl'
            })

            .state('persona.app.personas.buscarPersonaJuridica', {
                url: '/juridica/buscar',
                templateUrl: 'persona/views/juridica/form-buscar-personaJuridica.html',
                controller: 'BuscarPersonaJuridicaCtrl'
            }).state('persona.app.personas.crearPersonaJuridica', {
                url: '/juridica?tipoDocumento&numeroDocumento',
                templateUrl: 'persona/views/juridica/form-crear-personaJuridica.html',
                controller: function($scope, $stateParams) {
                    $scope.params = {};
                    $scope.params.tipoDocumento = $stateParams.tipoDocumento;
                    $scope.params.numeroDocumento = $stateParams.numeroDocumento;
                }
            }).state('persona.app.personas.crearPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/juridica/form-datosPrincipales.html',
                controller: 'PersonaJuridicaDatosPrincipalesCtrl'
            }).state('persona.app.personas.crearPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'persona/views/juridica/form-representante.html',
                controller: 'PersonaJuridicaRepresentanteLegalCtrl'
            }).state('persona.app.personas.editarPersonaJuridica', {
                url: '/juridica/{id:[0-9]{1,8}}',
                templateUrl: 'persona/views/juridica/form-editar-personaJuridica.html',
                resolve: {
                    personaJuridica: function($state, $stateParams, PersonaJuridica) {
                        return PersonaJuridica.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, personaJuridica) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = personaJuridica;
                }
            }).state('persona.app.personas.editarPersonaJuridica.resumen', {
                url: '/resumen',
                templateUrl: 'persona/views/juridica/form-resumen.html',
                controller: 'PersonaJuridicaResumenCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/juridica/form-datosPrincipales.html',
                controller: 'PersonaJuridicaDatosPrincipalesCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'persona/views/juridica/form-datosAdicionales.html',
                controller: 'PersonaJuridicaDatosAdicionalesCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'persona/views/juridica/form-representante.html',
                controller: 'PersonaJuridicaRepresentanteLegalCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.crearAccionista', {
                url: '/accionista',
                templateUrl: 'persona/views/juridica/form-accionista.html',
                controller: 'PersonaJuridicaDatosAdicionalesCtrl'
            });
    }
]);
