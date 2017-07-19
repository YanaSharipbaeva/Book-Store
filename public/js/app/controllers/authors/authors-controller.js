app.controller("AuthorsController",['$scope','$rootScope', function($scope, $rootScope) {
    $scope.authors = $rootScope.authors;
    $scope.books = $rootScope.books;
}]);




