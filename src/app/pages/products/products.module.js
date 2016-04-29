/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.products', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('products', {
          url: '/products',
          title: 'Products',
          templateUrl: 'app/pages/products/products.html',
          controller: 'ProfilePageCtrl',
          sidebarMeta: {
              icon: 'ion-pricetag',
              order: 0,
           }
        });
  }

})();
