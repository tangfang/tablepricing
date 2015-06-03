'use strict';

/**
 * @ngdoc function
 * @name tablepricingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tablepricingApp
 */
angular.module('tablepricingApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.userColumns = {
      titleIndex: 'title',
      columns: [{
        text: 'User Code',
        dataIndex: 'uuid'
      },{
        text: 'User Name',
        iconCls: 'icon-user',
        dataIndex: 'name'
      },{
        text: 'Phone',
        dataIndex: 'phone'
      },{
        text: 'Create Date',
        filter: {
          type: 'date',
          format: 'yyyy-MM-dd'
        },
        dataIndex: 'createDate'
      }]
    };

    $scope.operation = {
      text: 'Go',
      cls: 'btn btn-info',
      iconCls: 'm-icon-swapright m-icon-white',
      handlers: {
        click: function(item){
          console.log(item);
        }
      }
    };

    $http.get('json/table-pricing.json')
      .success(function(response){
        $scope.store = response;
      })
      .error(function(er){
        console.log(er);
      });
  });
