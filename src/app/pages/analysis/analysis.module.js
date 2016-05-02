/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.analysis', [
        'BlurAdmin.pages.charts.amCharts'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('analysis', {
          url: '/analysis',
          title: 'Curve',
          templateUrl: 'app/pages/analysis/analysis.html',
          controller: 'AnalysisPageCtrl',
          sidebarMeta: {
              icon: 'ion-stats-bars',
              order: 3,
           }
        });
  }

})();
