requirejs.config({
    urlArgs: "bust=" +  (new Date()).getTime(),
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'mustache': {
            exports: 'Mustache'
        }
    },
    paths: {
        'backbone':'lib/backbone.min',
        'jquery':'lib/jquery.min',
        'bootstrap':'lib/bootstrap.min',
        'underscore':'lib/underscore.min',
        'text':'lib/text',
        'mustache':'lib/mustache.min',
        'templates':'../templates'
    }
});

define(['routers/app', 'bootstrap'], function (AppRouter, Bootstrap) {
    return new AppRouter();
});
