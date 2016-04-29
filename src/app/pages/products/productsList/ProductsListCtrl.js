/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.products')
      .controller('ProductsListCtrl', ProductsListCtrl);

  /** @ngInject */
  function ProductsListCtrl($scope) {
   
    $scope.todoList = [
      {
        text: 'Check me out',
        edit: false, // todo: remove edit
        markId: 4
      },
      {
        text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro',
        edit: false,
        markId: 3
      },
      {
        text: 'Ex has semper alterum, expetenda dignissim',
        edit: false,
        markId: 2
      },
      {
        text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.',
        edit: false,
        markId: 1
      },
      {
        text: 'Simul erroribus ad usu',
        edit: false,
        markId: 0
      },
      {
        text: 'Ei cum solet appareat, ex est graeci mediocritatem',
        edit: false,
        markId: 4
      },
      {
        text: 'Get in touch with akveo team',
        edit: false,
        markId: 1
      },
      {
        text: 'Write email to business cat',
        edit: false,
        markId: 3
      },
      {
        text: 'Have fun with blur admin',
        edit: false,
        markId: 2
      },
    ];

  }
})();