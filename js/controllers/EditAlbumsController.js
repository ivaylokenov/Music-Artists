'use strict';

musicApp.controller('EditAlbumsController',
    function EditAlbumsController($scope, $location, $routeParams, $templateCache, artistData) {

        var url = '/home';
        var albumToSave;

        if ($routeParams.albumId) {
            url ='/artist-details/' + $routeParams.id;
            artistData
                .getArtist($routeParams.id)
                .$promise
                .then(getAlbum);
        }

        $scope.saveAlbum = function(album, newAlbumForm) {
            if (newAlbumForm.$valid) {
                albumToSave = album;
                artistData
                    .getArtist($routeParams.id)
                    .$promise
                    .then(saveAlbum);
            }
        }

        $scope.cancelEdit = function() {
            $location.path(url);
        }

        $scope.toTop = function() {
            $location.hash('main-container');
            $anchorScroll();
        }

        function getAlbum(artist) {
            var albums = artist.albums;
            for(var i = 0; i < albums.length;i++) {
                if (albums[i].id == parseInt($routeParams.albumId)) {
                    $scope.album = albums[i];
                    break;
                }
            }
        }

        function saveAlbum(artist) {
            var albums = artist.albums;

            if (!$routeParams.albumId) {
                if (!artist.albums) {
                    artist.albums = [];
                }

                albumToSave.id = artist.albums.length + 1;
                albumToSave.rating = 0;
                artist.albums.push(albumToSave);
            }
            else {
                for(var i = 0; i < albums.length;i++) {
                    if (albums[i].id == parseInt($routeParams.albumId)) {
                        albums[i] = albumToSave;
                        break;
                    }
                }
            }

            artistData.saveArtist(artist);
            $templateCache.removeAll();
            $location.path(url);
        }
    }
);