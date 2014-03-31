'use strict';

var musicApp = angular
    .module('musicApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/all-artists', {
                templateUrl: 'templates/all-artists.html'
            })
            .when('/add-artist', {
                templateUrl: 'templates/edit-artist.html'
            })
            .when('/edit-artist/:id', {
                templateUrl: 'templates/edit-artist.html'
            })
            .when('/artist-details/:id', {
                templateUrl: 'templates/artist-details.html'
            })
            .when('/artist-details/:id/add-album', {
                templateUrl: 'templates/edit-album.html'
            })
            .when('/artist-details/:id/edit-album/:albumId', {
                templateUrl: 'templates/edit-album.html'
            })
            .when('/all-albums', {
                templateUrl: 'templates/all-albums.html'
            })
            .when('/all-albums/filter/:artist', {
                templateUrl: 'templates/all-albums.html'
            })
            .otherwise({redirectTo: '/home'});
    })
    .constant('author', 'Ivaylo Kenov')
    .constant('copyright', 'Telerik Academy');