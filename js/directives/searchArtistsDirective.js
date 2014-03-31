'use strict';

musicApp.directive('searchArtists', function() {
    return {
        restrict: 'A',
        template: '<div>Search: <input type="text" ng-model="search" /></div>',
        replace: true,
        scope: {
            search: "="
        }
    }
})