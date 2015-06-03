# tablepricing
An extended AngularJS Directive pricing-table with form, pagination, and other added features. (supports twitter bootstrap v3).

## Install

```bash
bower install tablepricing --save
```
or Include all neccessary files

```html
<link rel="stylesheet" href="bower_components/bootstrap/dist/bootstrap.min.css" />
<link rel="stylesheet" href="bower_components/tablepricing/build/pricing-table.css" />

<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/tablepricing/build/tablepricing.min.js"></script>
```

## Documentation

### Configuration

An extended AngularJS Directive pricing-table. Configure the directive to your AngularJSApp [`app.js`].

```javascript
angular.module('your app name', [
    ......,
    'tablePricing'
  ]);
```
### Populating a tablePricing using HTML
```html
<table-pricing columns="columns" store="store" pagination="pagination" operation="operation"></table-pricing>
```

The attributes are described as follows:

 * `columns` - The pricing-table Setings for columns (is JSONObject)(is Required). 
   - `titleIndex` - The pricing-table Index column for display titles (is String).
   - `columns` - The pricing-table needs to display the columns (is Array)(is Required). 
 * `store` - The pricing-table needs to data store (is Array)(is Required).
 * `pagination` - Paging configuration (is JSONObject)(Optional):
   - `total` - Total data.(is Number).
   - `currentPage` - The current page.(is Number).
   - `pageCount` - The total number of pages. (is Number).
   - `goToFirst` - First page button click event. (is Function).
   - `goToPrevious` - Previous page button click event. (is Function).
   - `goToNext` - Next page button click event. (is Function).
   - `goToLast` - Last page button click event. (is Function).
 * `operation` - The pricing-table footer operation button configuration (is JSONObject)(Optional):
   - `text` - Button text. (is String).
   - `cls` - Button class. (is String).
   - `iconCls` - Icon class. (is String).
   - `handlers` - Button handler. (is JSONObject).
     - `click` - Button click event. (is Function).

### Add the following code in your controller :

```javascript
$scope.columns = {
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
function requestTableDataFunction(){
  $http.get('json/table-pricing.json')
    .success(function(response){
      $scope.store = response;
    })
    .error(function(er){
      console.log(er);
    });
}

var startpage = 1;
$scope.pagination = {
  total: 0,
  currentPage: 0,
  pageCount: 0,
  goToFirst : function(){
    startpage = 1;
    requestTableDataFunction();
  },
  goToPrevious : function(){
    startpage--;
    requestTableDataFunction();
  },
  goToNext : function(){
    startpage++;
    requestTableDataFunction();
  },
  goToLast : function(){
    startpage = $scope.pagination.pageCount;
    requestTableDataFunction();
  }
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
```
