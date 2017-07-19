app.controller('GenreController', ['$scope', '$rootScope', '$location', function($scope,  $rootScope, $location) {
    $scope.bookGenre = $location.path().substr(13, $location.path().length);
    $scope.bookGenre = $scope.bookGenre.split('_').join(' ');

    $scope.books = $rootScope.books;
    $scope.genreBooks = $scope.books;
    $scope.genreBooks = $scope.genreBooks.filter(function(book){
        return book.genre === $scope.bookGenre? $scope.book = book : null;

    });

}]);