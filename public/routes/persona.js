'use strict';

angular.module('mean.persona').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('persona', {
                abstract: true,
                url: '/persona',
                templateUrl: 'persona/views/_body.html'
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
            .state('persona.app.administracion', {
                url: '/administracion',
                template: '<div ui-view></div>'
            })

            //tipoDocumento
            .state('persona.app.administracion.buscarTipoDocumento', {
                url: '/tipoDocumento/buscar',
                templateUrl: 'persona/views/tipoDocumento/form-buscar-tipoDocumento.html',
                controller: 'BuscarTipoDocumentoCtrl'
            })
            .state('persona.app.administracion.crearTipoDocumento', {
                url: '/tipoDocumento',
                templateUrl: 'persona/views/tipoDocumento/form-crear-tipoDocumento.html',
                controller: 'CrearTipoDocumentoCtrl'
            })
            .state('persona.app.administracion.editarTipoDocumento', {
                url: '/tipoDocumento/editar/:id',
                templateUrl: 'persona/views/tipoDocumento/form-editar-tipoDocumento.html',
                resolve: {
                    tipoDocumento: function($state, $stateParams, SGTipoDocumento) {
                        return SGTipoDocumento.$find($stateParams.id);
                    }
                },
                controller: 'EditarTipoDocumentoCtrl'
            })

            //Personas
            .state('persona.app.personas.buscarPersonaNatural', {
                url: '/buscarPersonaNatural',
                templateUrl: 'persona/views/natural/form-buscar-personaNatural.html',
                controller: 'BuscarPersonaNaturalCtrl'
            }).state('persona.app.personas.crearPersonaNatural', {
                url: '/natural?tipoDocumento&numeroDocumento',
                templateUrl: 'persona/views/natural/form-crear-personaNatural.html',
                controller: 'CrearPersonaNaturalCtrl'
            }).state('persona.app.personas.editarPersonaNatural', {
                url: '/natural/{id:[0-9]{1,8}}',
                templateUrl: 'persona/views/natural/form-editar-personaNatural.html',
                resolve: {
                    personaNatural: function($state, $stateParams, SGPersonaNatural) {
                        return SGPersonaNatural.$find($stateParams.id);
                    }
                },
                controller: 'EditarPersonaNaturalCtrl'
            }).state('persona.app.personas.editarPersonaNatural.resumen', {
                url: '/resumen',
                templateUrl: 'persona/views/natural/form-editar-resumen.html',
                controller: 'PersonaNaturalResumenCtrl'
            }).state('persona.app.personas.editarPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/natural/form-editar-datosPrincipales.html',
                controller: 'PersonaNaturalDatosPrincipalesCtrl'
            }).state('persona.app.personas.editarPersonaNatural.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'persona/views/natural/form-editar-datosAdicionales.html',
                controller: 'PersonaNaturalDatosAdicionalesCtrl'
            })

            .state('persona.app.personas.buscarPersonaJuridica', {
                url: '/juridica/buscar',
                templateUrl: 'persona/views/juridica/form-buscar-personaJuridica.html',
                controller: 'BuscarPersonaJuridicaCtrl'
            }).state('persona.app.personas.crearPersonaJuridica', {
                url: '/juridica?tipoDocumento&numeroDocumento',
                templateUrl: 'persona/views/juridica/form-crear-personaJuridica.html',
                controller: 'CrearPersonaJuridicaCtrl'
            }).state('persona.app.personas.crearPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/juridica/form-crear-datosPrincipales.html',
                controller: 'CrearPersonaJuridica_DatosPrincipalesCtrl'
            }).state('persona.app.personas.crearPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'persona/views/juridica/form-crear-representante.html',
                controller: 'CrearPersonaJuridica_RepresentanteCtrl'
            })

            .state('persona.app.personas.editarPersonaJuridica', {
                url: '/juridica/{id:[0-9]{1,8}}',
                templateUrl: 'persona/views/juridica/form-editar-personaJuridica.html',
                resolve: {
                    personaJuridica: function($state, $stateParams, SGPersonaJuridica) {
                        return SGPersonaJuridica.$find($stateParams.id);
                    }
                },
                controller: 'EditarPersonaJuridicaCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.resumen', {
                url: '/resumen',
                templateUrl: 'persona/views/juridica/form-editar-resumen.html',
                controller: 'EditarPersonaJuridica_ResumenCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/juridica/form-editar-datosPrincipales.html',
                controller: 'EditarPersonaJuridica_DatosPrincipalesCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'persona/views/juridica/form-editar-datosAdicionales.html',
                controller: 'EditarPersonaJuridica_DatosAdicionalesCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'persona/views/juridica/form-editar-representante.html',
                controller: 'EditarPersonaJuridica_RepresentanteCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.crearAccionista', {
                url: '/accionista',
                templateUrl: 'persona/views/juridica/form-editar-accionistas.html',
                controller: 'EditarPersonaJuridica_Accionistas'
            });
    }
]);
