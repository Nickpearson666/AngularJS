angular.module('MyApp', [])
  .controller('MyCtrl', ['$scope', function($scope){

  $scope.getCount = function (){
    if($scope.msg){
      if($scope.msg.length > 100){
        $scope.msg = $scope.msg.slice(0, 100);
        console.log($scope.msg.length)
      }
      return 100 - ($scope.msg).length;
    }else{
      return 100;
    }
  }

    $scope.save = function (){
      let currMsg = $scope.msg;
      localStorage.setItem('note_key', JSON.stringify(currMsg));
      alert('note is saved');
      $scope.msg = '';

    }

    $scope.read = function (){
      let currMsg  = localStorage.getItem('note_key');
      $scope.msg = JSON.parse(currMsg || JSON.stringify(''));
    }

    $scope.remove = function (){
      localStorage.removeItem('note_key');
      $scope.msg = "";
    }
  }]);