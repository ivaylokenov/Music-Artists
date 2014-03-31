'use strict';

musicApp.controller('ListArtistsController',
    function ListArtistsController($scope, $route, artistData) {
        $scope.artists = artistData.getAllArtists();

        $scope.artists.range = function() {
            var range = [];
            for (var i = 0; i < $scope.artists.length; i = i + 3) {
                range.push(i);
            }
            return range;
        }
    }
);