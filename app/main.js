require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery']
        },
        ace: {
            deps: ['aceElement']
        },
        aceElement: {
            deps: ['aceExtra', 'bootstrap', 'jquery'],
        }
    },
    paths: {
        jquery: '../assets/js/jquery-2.0.3.min',
        backbone: '../libs/backbone/backbone.min',
        underscore: '../libs/underscore/underscore.min',
        text: '../libs/require/text',
        bootstrap: '../assets/js/bootstrap.min',
        ace: '../assets/js/ace.min',
        aceExtra: '../assets/js/ace-extra.min',
        aceElement: '../assets/js/ace-elements.min',
        T:'views',
        V:'views'   
    }
});
require([
    'jquery',
    'backbone',
    'router',
    'app',
    'bootstrap',
    'ace',
], function($, Backbone, Workspace, App) {
    new Workspace();
    $.app.initialize();
    if (!Backbone.History.started) {
        Backbone.history.start();
    } else {
        Backbone.history.stop();
        Backbone.history.start();
    }
});
