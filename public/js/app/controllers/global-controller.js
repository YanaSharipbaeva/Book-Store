app.controller("GlobalController", ['$scope','$http', '$rootScope', function($scope, $http, $rootScope) {
    $http({
        method:"GET",
        url:"books.json"
    }).
    then(function(response) {
        $rootScope.books = [];
        $rootScope.authors = [];

        response.data.forEach(function(item){
            item['book'].forEach(function(book) {
                $rootScope.books.push(book);
            });
            item['author'].forEach(function(author) {
                $rootScope.authors.push(author);
            });
        });
    }, function(data) {
        console.log(data);
    });
}]);


