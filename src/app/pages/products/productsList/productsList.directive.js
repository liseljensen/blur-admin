/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.products')
      .directive('productsList', productsList);

  /** @ngInject */
  function productsList() {
    return {
      restrict: 'EA',
      controller: 'DashboardTodoCtrl',
      templateUrl: 'app/pages/products/productsList/productsList.html'
    };
  }
})();