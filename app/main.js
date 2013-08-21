require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        ace: {
            deps: ['aceElement']
        },
        aceElement: {
            deps: ['aceExtra', 'bootstrap', 'jquery']
        }
    },
    paths: {
        jquery: '../assets/js/jquery-2.0.3.min',
        bootstrap: '../assets/js/bootstrap.min',
        ace: '../assets/js/ace.min',
        aceExtra: '../assets/js/ace-extra.min',
        aceElement: '../assets/js/ace-elements.min'
    }
});
require([
    'jquery',
    'bootstrap',
    'ace'
], function() {

});
