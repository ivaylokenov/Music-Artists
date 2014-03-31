'use strict';

musicApp.directive('albumDetails', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/album-details-directive.html',
        scope: {
            album: '=album'
        }
    }
});