(function () {
  'use strict';

 angular.module('LunchCheck', [])
 .controller('LunchCheckController', LunchCheckControllerFunction);

LunchCheckControllerFunction.$inject = ['$scope'];

 function LunchCheckControllerFunction($scope) {
   $scope.eatInLunch = "";
   $scope.message = "";
   $scope.checkLunch =function () {
     if ($scope.eatInLunch === "") {
       $scope.message = "Please enter data first";
       return;
     }

      var countOfThingEatInLunch = $scope.eatInLunch.split(',');

      if (countOfThingEatInLunch.length > 0 && countOfThingEatInLunch.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }

   }
 }
})();
