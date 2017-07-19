app.controller('BookDetailController', ['$scope', '$rootScope', '$location', function($scope,  $rootScope, $location) {
    var bookId = $location.path().substr(7, $location.path().length);
    $scope.book_id = bookId;
    $scope.books = $rootScope.books;

    $scope.books.forEach(function(book){
        book.book_id === bookId? $scope.book = book : null;
    });

    $scope.title = $scope.book.title;
    $scope.author_name = $scope.book.author_name;
    $scope.book.genreSplited = $scope.book.genre.split(' ').join('_');

    $scope.info = $scope.book.info;


}]);