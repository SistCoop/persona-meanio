'use strict';

angular.module('mean.persona-meanio').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('personaMeanio', {
                abstract: true,
                url: '/persona',
                templateUrl: 'persona-meanio/views/tpls/layout/body.html'
            })
            .state('personaMeanio.home', {
                url: '/home',
                templateUrl: 'persona-meanio/views/index.html'
            })
            .state('personaMeanio.app', {
                url: '/app',
                template: '<ui-view></ui-view>'
            })

            .state('personaMeanio.app.personas', {
                url: '/personas',
                template: '<div ui-view></div>'
            })

            .state('personaMeanio.app.personas.buscarPersonaNatural', {
                url: '/natural/buscar',
                templateUrl: 'persona-meanio/views/natural/form-buscar-personaNatural.html',
                controller: 'BuscarPersonaNaturalCtrl'
            }).state('personaMeanio.app.personas.crearPersonaNatural', {
                url: '/natural?tipoDocumento&numeroDocumento',
                templateUrl: 'persona-meanio/views/natural/form-crear-personaNatural.html',
                controller: function($scope, $stateParams) {
                    $scope.params = {};
                    $scope.params.tipoDocumento = $stateParams.tipoDocumento;
                    $scope.params.numeroDocumento = $stateParams.numeroDocumento;
                }
            }).state('personaMeanio.app.personas.crearPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona-meanio/views/natural/form-datosPrincipales.html',
                controller: 'PersonaNaturalDatosPrincipalesCtrl'
            }).state('personaMeanio.app.personas.editarPersonaNatural', {
                url: '/natural/{id:[0-9]{1,8}}',
                templateUrl: 'persona-meanio/views/natural/form-editar-personaNatural.html',
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
            }).state('personaMeanio.app.personas.editarPersonaNatural.resumen', {
                url: '/resumen',
                templateUrl: 'persona-meanio/views/natural/form-resumen.html',
                controller: 'PersonaNaturalResumenCtrl'
            }).state('personaMeanio.app.personas.editarPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona-meanio/views/natural/form-datosPrincipales.html',
                controller: 'PersonaNaturalDatosPrincipalesCtrl'
            }).state('personaMeanio.app.personas.editarPersonaNatural.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'persona-meanio/views/natural/form-datosAdicionales.html',
                controller: 'PersonaNaturalDatosAdicionalesCtrl'
            })

            .state('personaMeanio.app.personas.buscarPersonaJuridica', {
                url: '/juridica/buscar',
                templateUrl: 'persona-meanio/views/juridica/form-buscar-personaJuridica.html',
                controller: 'BuscarPersonaJuridicaCtrl'
            }).state('personaMeanio.app.personas.crearPersonaJuridica', {
                url: '/juridica?tipoDocumento&numeroDocumento',
                templateUrl: 'persona-meanio/views/juridica/form-crear-personaJuridica.html',
                controller: function($scope, $stateParams) {
                    $scope.params = {};
                    $scope.params.tipoDocumento = $stateParams.tipoDocumento;
                    $scope.params.numeroDocumento = $stateParams.numeroDocumento;
                }
            }).state('personaMeanio.app.personas.crearPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona-meanio/views/juridica/form-datosPrincipales.html',
                controller: 'PersonaJuridicaDatosPrincipalesCtrl'
            }).state('personaMeanio.app.personas.crearPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'persona-meanio/views/juridica/form-representante.html',
                controller: 'PersonaJuridicaRepresentanteLegalCtrl'
            }).state('personaMeanio.app.personas.editarPersonaJuridica', {
                url: '/juridica/{id:[0-9]{1,8}}',
                templateUrl: 'persona-meanio/views/juridica/form-editar-personaJuridica.html',
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
            }).state('personaMeanio.app.personas.editarPersonaJuridica.resumen', {
                url: '/resumen',
                templateUrl: 'persona-meanio/views/juridica/form-resumen.html',
                controller: 'PersonaJuridicaResumenCtrl'
            }).state('personaMeanio.app.personas.editarPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona-meanio/views/juridica/form-datosPrincipales.html',
                controller: 'PersonaJuridicaDatosPrincipalesCtrl'
            }).state('personaMeanio.app.personas.editarPersonaJuridica.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'persona-meanio/views/juridica/form-datosAdicionales.html',
                controller: 'PersonaJuridicaDatosAdicionalesCtrl'
            }).state('personaMeanio.app.personas.editarPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'persona-meanio/views/juridica/form-representante.html',
                controller: 'PersonaJuridicaRepresentanteLegalCtrl'
            }).state('personaMeanio.app.personas.editarPersonaJuridica.crearAccionista', {
                url: '/accionista',
                templateUrl: 'persona-meanio/views/juridica/form-accionista.html',
                controller: 'PersonaJuridicaDatosAdicionalesCtrl'
            });
    }
]);
