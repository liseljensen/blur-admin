/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.lists', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.panels', {
          url: '/list',
          templateUrl: 'app/pages/ui/panels/list.html',
          controller: 'NotificationsPageCtrl',
          title: 'Lists',
          sidebarMeta: {
            order: 1100,
          },
        });
  }

})();

