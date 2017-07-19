app.controller("BooksController", ['$scope','$http','$rootScope', function($scope, $http, $rootScope) {
    $scope.books = $rootScope.books;
    $scope.authors = $rootScope.authors;
}]);

