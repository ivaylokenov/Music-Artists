'use strict';

musicApp.controller('ListAlbumsController',
    function ListAlbumsController($scope, $routeParams, artistData) {

        if ($routeParams.artist) {
            $scope.search = $routeParams.artist;
        };

        artistData
            .getAllArtists()
            .$promise
            .then(function (artists) {
                var allAlbums = [];
                for (var i = 0; i < artists.length; i++) {
                    var albums = artists[i].albums;
                    if (albums) {
                        for (var j = 0; j < albums.length; j++) {
                            albums[j].artist = artists[i].name;
                            albums[j].artistId = artists[i].id;
                            allAlbums.push(albums[j]);
                        }
                    }
                }

                $scope.albums = allAlbums;
            });
    }
);