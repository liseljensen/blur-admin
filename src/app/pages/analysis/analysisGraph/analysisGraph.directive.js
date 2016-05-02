/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.analysis')
      .directive('analysisGraph', analysisGraph);

  /** @ngInject */
  function analysisGraph() {
    return {
      restrict: 'EA',
      //controller: 'AnalysisDaysCtrl',
      templateUrl: 'app/pages/analysis/analysisGraph/analysisGraph.html'
    };
  }
})();