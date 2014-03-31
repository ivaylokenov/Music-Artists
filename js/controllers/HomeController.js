'use strict';

musicApp.controller('HomeController',
    function HomeController($scope, artistData) {
        artistData
            .getAllArtists()
            .$promise
            .then(function (artists) {
                var latestArtists = [];
                var latestAlbums = [];

                for (var i = artists.length - 1; i >= 0; i--) {
                    if (latestArtists == 3 && latestAlbums == 3) {
                        break;
                    }

                    if (latestArtists.length < 3) {
                        latestArtists.push(artists[i]);
                    }

                    var albums = artists[i].albums;
                    if (albums && latestAlbums.length < 3) {
                        for (var j = albums.length - 1; j >= 0; j--) {
                            if (latestAlbums.length == 3) {
                                break;
                            }

                            latestAlbums.push(albums[j]);
                        }
                    }
                }

                $scope.artists = latestArtists;
                $scope.albums = latestAlbums;
            });
    }
);