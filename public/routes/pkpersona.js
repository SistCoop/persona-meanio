'use strict';

angular.module('mean.pkpersona').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('pkpersona', {
                abstract: true,
                url: '/persona',
                templateUrl: 'pkpersona/views/tpls/layout/body.html'
            })
            .state('pkpersona.home', {
                url: '/home',
                templateUrl: 'pkpersona/views/index.html'
            })
            .state('pkpersona.app', {
                url: '/app',
                template: '<ui-view></ui-view>'
            })

            .state('pkpersona.app.personas', {
                url: '/personas',
                template: '<div ui-view></div>'
            })

            .state('pkpersona.app.personas.buscarPersonaNatural', {
                url: '/natural/buscar',
                templateUrl: 'pkpersona/views/natural/form-buscar-personaNatural.html',
                controller: 'BuscarPersonaNaturalCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('pkpersona.app.personas.crearPersonaNatural', {
                url: '/natural?tipoDocumento&numeroDocumento',
                templateUrl: 'pkpersona/views/natural/form-crear-personaNatural.html',
                controller: function($scope, $stateParams) {
                    $scope.params = {};
                    $scope.params.tipoDocumento = $stateParams.tipoDocumento;
                    $scope.params.numeroDocumento = $stateParams.numeroDocumento;
                },
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.crearPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: 'pkpersona/views/natural/form-datosPrincipales.html',
                controller: 'PersonaNaturalDatosPrincipalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaNatural', {
                url: '/natural/{id:[0-9]{1,8}}',
                templateUrl: 'pkpersona/views/natural/form-editar-personaNatural.html',
                resolve: {
                    personaNatural: function($state, $stateParams, SGPersonaNatural) {
                        return SGPersonaNatural.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, personaNatural) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = personaNatural;
                },
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaNatural.resumen', {
                url: '/resumen',
                templateUrl: 'pkpersona/views/natural/form-resumen.html',
                controller: 'PersonaNaturalResumenCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: 'pkpersona/views/natural/form-datosPrincipales.html',
                controller: 'PersonaNaturalDatosPrincipalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaNatural.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'pkpersona/views/natural/form-datosAdicionales.html',
                controller: 'PersonaNaturalDatosAdicionalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            })

            .state('pkpersona.app.personas.buscarPersonaJuridica', {
                url: '/juridica/buscar',
                templateUrl: 'pkpersona/views/juridica/form-buscar-personaJuridica.html',
                controller: 'BuscarPersonaJuridicaCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('pkpersona.app.personas.crearPersonaJuridica', {
                url: '/juridica?tipoDocumento&numeroDocumento',
                templateUrl: 'pkpersona/views/juridica/form-crear-personaJuridica.html',
                controller: function($scope, $stateParams) {
                    $scope.params = {};
                    $scope.params.tipoDocumento = $stateParams.tipoDocumento;
                    $scope.params.numeroDocumento = $stateParams.numeroDocumento;
                },
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.crearPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'pkpersona/views/juridica/form-datosPrincipales.html',
                controller: 'PersonaJuridicaDatosPrincipalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.crearPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'pkpersona/views/juridica/form-representante.html',
                controller: 'PersonaJuridicaRepresentanteLegalCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaJuridica', {
                url: '/juridica/{id:[0-9]{1,8}}',
                templateUrl: 'pkpersona/views/juridica/form-editar-personaJuridica.html',
                resolve: {
                    personaJuridica: function($state, $stateParams, PersonaJuridica) {
                        return PersonaJuridica.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, personaJuridica) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = personaJuridica;
                },
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaJuridica.resumen', {
                url: '/resumen',
                templateUrl: 'pkpersona/views/juridica/form-resumen.html',
                controller: 'PersonaJuridicaResumenCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER', 'PUBLIC'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'pkpersona/views/juridica/form-datosPrincipales.html',
                controller: 'PersonaJuridicaDatosPrincipalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaJuridica.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'pkpersona/views/juridica/form-datosAdicionales.html',
                controller: 'PersonaJuridicaDatosAdicionalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'pkpersona/views/juridica/form-representante.html',
                controller: 'PersonaJuridicaRepresentanteLegalCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            }).state('pkpersona.app.personas.editarPersonaJuridica.crearAccionista', {
                url: '/accionista',
                templateUrl: 'pkpersona/views/juridica/form-accionista.html',
                controller: 'PersonaJuridicaDatosAdicionalesCtrl',
                module: 'PERSONA',
                roles: ['ADMIN', 'USER'],
                operator: 'OR'
            });
    }
]);