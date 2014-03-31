'use strict';

musicApp.controller('EditArtistController',
    function EditArtistController($scope, $location, $anchorScroll, $templateCache, $routeParams, artistData) {

        var url = '/home'

        if ($routeParams.id) {
            url ='/artist-details/' + $routeParams.id;
            $scope.artist = artistData.getArtist($routeParams.id);
        }

        $scope.saveArtist = function(artist, newArtistForm) {

            if (newArtistForm.$valid) {
                artistData.saveArtist(artist);
                $templateCache.removeAll();
                $location.path(url);
            }
        }

        $scope.cancelEdit = function() {
            $location.path(url);
        }

        $scope.toTop = function() {
            $location.hash('main-container');
            $anchorScroll();
        }
    }
);