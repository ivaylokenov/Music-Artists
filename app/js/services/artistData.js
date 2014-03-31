'use strict';

musicApp.factory('artistData', function($resource) {

    var resource = $resource('/data/artist/:id', { id: '@id' });

    return {
        getArtist: function(id) {
            return resource.get({id: id});
        },
        saveArtist: function(artist) {
            window.alert("Saving is disabled for security reasons. Thank you for using Music Artists and have fun! :)")
            // if (!artist.id) {
            //     resource.query().$promise.then(function(data) {
            //         artist.id = data.length + 1;
            //         resource.save(artist);
            //     });
            // }
            // else {
            //     resource.save(artist);
            // }
        },
        getAllArtists: function() {
            return resource.query();
        }
    }

    /*
    function getArtist() {
        var deferred = $q.defer();

        $http({method: 'GET', url: '/data/artist/1'})
            .success(function(data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    return {
        getArtist: getArtist
    };
    */
})