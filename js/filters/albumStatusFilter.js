'use strict';

musicApp.filter('status', function() {
    return function(input) {
        input = parseInt(input);
        switch (input) {
            case 1: return "Discontinued"; break;
            case 2: return "Selling"; break;
            case 3: return "Unreleased"; break;
        }
    }
});