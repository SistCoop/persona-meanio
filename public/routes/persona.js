'use strict';

angular.module('mean.persona').config(['$stateProvider',
    function($stateProvider) {

        // Check if user has role
        var checkUserRole = function(role, $q, $timeout, $http, $location, Auth) {

            // Initialize a new promise
            var deferred = $q.defer();

            // Authenticated
            if (Auth.authz.hasResourceRole(role, 'persona')) {
                $timeout(deferred.resolve);
            }

            // Not Authenticated
            else {
                $timeout(deferred.reject);
                //$location.url('/auth/login');
                alert('No tiene los permisos para poder acceder a esta pagina');
            }

            return deferred.promise;
        };

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
                controller: 'BuscarTipoDocumentoCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('persona.app.administracion.crearTipoDocumento', {
                url: '/tipoDocumento',
                templateUrl: 'persona/views/tipoDocumento/form-crear-tipoDocumento.html',
                controller: 'CrearTipoDocumentoCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('ADMIN', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('persona.app.administracion.editarTipoDocumento', {
                url: '/tipoDocumento/editar/:id',
                templateUrl: 'persona/views/tipoDocumento/form-editar-tipoDocumento.html',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('ADMIN', $q, $timeout, $http, $location, Auth)
                    },
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
                controller: 'Persona.BuscarPersonaNaturalController',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.crearPersonaNatural', {
                url: '/natural?tipoDocumento&numeroDocumento',
                templateUrl: 'persona/views/natural/form-crear-personaNatural.html',
                controller: 'Persona.CrearPersonaNaturalController',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.editarPersonaNatural', {
                url: '/natural/{id:[0-9]{1,8}}',
                templateUrl: 'persona/views/natural/form-editar-personaNatural.html',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    },
                    personaNatural: function($state, $stateParams, SGPersonaNatural) {
                        return SGPersonaNatural.$find($stateParams.id);
                    }
                },
                controller: 'Persona.EditarPersonaNaturalController'
            }).state('persona.app.personas.editarPersonaNatural.resumen', {
                url: '/resumen',
                templateUrl: 'persona/views/natural/form-editar-resumen.html',
                controller: 'Persona.EditarPersonaNatural.ResumenController',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.editarPersonaNatural.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/natural/form-editar-datosPrincipales.html',
                controller: 'Persona.EditarPersonaNatural.DatosPrincipalesController',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.editarPersonaNatural.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'persona/views/natural/form-editar-datosAdicionales.html',
                controller: 'Persona.EditarPersonaNatural.DatosAdicionalesController',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            })

            .state('persona.app.personas.buscarPersonaJuridica', {
                url: '/juridica/buscar',
                templateUrl: 'persona/views/juridica/form-buscar-personaJuridica.html',
                controller: 'BuscarPersonaJuridicaCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.crearPersonaJuridica', {
                url: '/juridica?tipoDocumento&numeroDocumento',
                templateUrl: 'persona/views/juridica/form-crear-personaJuridica.html',
                controller: 'CrearPersonaJuridicaCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.crearPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/juridica/form-crear-datosPrincipales.html',
                controller: 'CrearPersonaJuridica_DatosPrincipalesCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.crearPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'persona/views/juridica/form-crear-representante.html',
                controller: 'CrearPersonaJuridica_RepresentanteCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            })

            .state('persona.app.personas.editarPersonaJuridica', {
                url: '/juridica/{id:[0-9]{1,8}}',
                templateUrl: 'persona/views/juridica/form-editar-personaJuridica.html',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    },
                    personaJuridica: function($state, $stateParams, SGPersonaJuridica) {
                        return SGPersonaJuridica.$find($stateParams.id);
                    }
                },
                controller: 'EditarPersonaJuridicaCtrl'
            }).state('persona.app.personas.editarPersonaJuridica.resumen', {
                url: '/resumen',
                templateUrl: 'persona/views/juridica/form-editar-resumen.html',
                controller: 'EditarPersonaJuridica_ResumenCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.editarPersonaJuridica.datosPrincipales', {
                url: '/principal',
                templateUrl: 'persona/views/juridica/form-editar-datosPrincipales.html',
                controller: 'EditarPersonaJuridica_DatosPrincipalesCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.editarPersonaJuridica.datosAdicionales', {
                url: '/adicionales',
                templateUrl: 'persona/views/juridica/form-editar-datosAdicionales.html',
                controller: 'EditarPersonaJuridica_DatosAdicionalesCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.editarPersonaJuridica.representante', {
                url: '/representante',
                templateUrl: 'persona/views/juridica/form-editar-representante.html',
                controller: 'EditarPersonaJuridica_RepresentanteCtrl',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            }).state('persona.app.personas.editarPersonaJuridica.crearAccionista', {
                url: '/accionista',
                templateUrl: 'persona/views/juridica/form-editar-accionistas.html',
                controller: 'EditarPersonaJuridica_Accionistas',
                resolve: {
                    loggedin: function($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('AUTHENTICATED', $q, $timeout, $http, $location, Auth)
                    }
                }
            });
    }
]);
