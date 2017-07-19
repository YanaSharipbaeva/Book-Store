app.controller('AuthorDetailController', ['$scope', '$rootScope', '$location', function($scope,  $rootScope, $location) {
    var authorId = $location.path().substr(9, $location.path().length);
    $scope.authors_id = authorId;
    $scope.authors = $rootScope.authors;
    $scope.authors.forEach(function(author){
        author.author_id === authorId? $scope.author = author : null;
    });

}]);