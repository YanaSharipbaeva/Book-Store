const app = angular.module('bookStore', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
        .when("/", {
            controller: 'GlobalController',
        })
        .when("/books", {
            templateUrl : "views/books.html",
            controller: 'BooksController',
        })
        .when("/authors", {
            templateUrl : "views/authors.html",
            controller: 'AuthorsController',
        })
        .when("/authors/:id", {
            templateUrl : "views/author-detail.html",
            controller: 'AuthorDetailController',
        })
        .when("/books/:id", {
            templateUrl : "views/book-detail.html",
            controller: 'BookDetailController',
        })
        .when("/books/genre/:genre", {
            templateUrl : "views/genre.html",
            controller: 'GenreController',
        }).
        otherwise(
            {redirectTo : "/"}
        );

});
