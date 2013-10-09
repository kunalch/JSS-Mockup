'use strict';

angular.module('opd.consultation').factory('initialization', ['$rootScope', '$q', '$route', 'configurationService', 'visitService', 'patientService', 'patientMapper',
        function ($rootScope, $q, $route, configurationService, visitService, patientService, patientMapper) {
            var deferrable = $q.defer();
            var configurationsPromise = configurationService.getConfigurations(['bahmniConfiguration', 'encounterConfig', 'patientConfig'])
                                            .then(function(configurations) {
                                                $rootScope.bahmniConfiguration = configurations.bahmniConfiguration;
                                                $rootScope.encounterConfig = angular.extend(new EncounterConfig(), configurations.encounterConfig); 
                                                $rootScope.patientConfig = configurations.patientConfig;
                                            });;
            

            var getVisitAndPatientPromise = visitService.getVisit($route.current.params.visitUuid).success(function(visit){
                $rootScope.visit = visit;
                $rootScope.consultation = new Bahmni.Opd.ConsultationMapper($rootScope.encounterConfig).map(visit);
                return patientService.getPatient(visit.patient.uuid).success(function(openMRSPatient){
                    $rootScope.patient = patientMapper.map(openMRSPatient);
                });                
            });                

            $q.all([configurationsPromise, getVisitAndPatientPromise]).then(function(){
                deferrable.resolve();
            });
            
            return deferrable.promise;
     }]
);    