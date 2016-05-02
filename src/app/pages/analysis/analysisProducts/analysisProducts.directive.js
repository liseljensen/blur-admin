/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.analysis')
      .directive('analysisDays', analysisDays);

  /** @ngInject */
  function analysisDays() {
    return {
      restrict: 'EA',
      //controller: 'AnalysisDaysCtrl',
      templateUrl: 'app/pages/analysis/analysisDays/analysisDays.html'
    };
  }
})();