angular.module('MyApp',[])
.controller('MyCtrl',['$scope', function ($scope){
  $scope.todos = [{name:'吃饭', isChecked: false},
    {name:'睡觉', isChecked: true},
    {name:'打豆豆', isChecked: false}];

  $scope.add = function (){
    let str = $scope.newTodo;
    if(str.length == 0){
      alert("Please!!")
      return;
    }
    $scope.todos.unshift({name:str, isChecked: false})
  }
  $scope.del = function (){
    $scope.todos.forEach(function (item,idx){
      //找到ischecked = true的
      if(item.isChecked){
        $scope.todos.splice(idx, 1);
        $scope.del();
      }
    })
  }

}])