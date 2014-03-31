'use strict';

musicApp.controller('ArtistDetailsController',
    function ArtistDetailsController($scope, $routeParams, $location, artistData) {

        $scope.artist = artistData.getArtist($routeParams.id);

        $scope.bandMembersShown = false;
        $scope.bandMembersShowText = 'Show';
        $scope.showAndHideMembers = showAndHideBandMembers;

        $scope.bandMembers = "band-members";
        $scope.evenBandMembers = "even-band-members";
        $scope.addMember = addBandMember;

        $scope.customStyle = {
            fontWeight: 'bold'
        }

        $scope.albumsShown = false;
        $scope.albumsShowText = 'Info';
        $scope.showAndHideAlbums = showAndHideAlbums;

        $scope.upAlbumRating = upAlbumRating;
        $scope.downAlbumRating = downAlbumRating;

        $scope.sort = 'id';

        $scope.addAlbum = addAlbum;

        function addAlbum() {
            $location.path('/artist-details/' + $routeParams.id + '/add-album');
        }

        function upAlbumRating(album) {
            album.rating++; // TODO: save
        }

        function downAlbumRating(album) {
            if (album.rating > 0) {
                album.rating--; // TODO: save
            }
        }

        function showAndHideAlbums() {
            if ($scope.albumsShown == false) {
                $scope.albumsShowText = 'Hide';
                $scope.albumsShown = true;
            }
            else {
                $scope.albumsShowText = 'Info';
                $scope.albumsShown = false;
            }
        }

        function showAndHideBandMembers() {
            if ($scope.bandMembersShown == false) {
                $scope.bandMembersShowText = 'Hide';
                $scope.bandMembersShown = true;
            }
            else {
                $scope.bandMembersShowText = 'Show';
                $scope.bandMembersShown = false;
            }
        }

        function addBandMember(artist, newMember) {
            if (!artist.additionalInformation.bandMembers) {
                artist.additionalInformation.bandMembers = [];
            }

            artist.additionalInformation.bandMembers.push(newMember);
            artistData.saveArtist(artist);
        }
    }
);