'use strict';

musicApp.directive('artistHomeDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/artist-home-directive.html',
        scope: {
            artist: '=art'
        }
    }
})