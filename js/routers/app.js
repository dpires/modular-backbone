define(['underscore', 'jquery', 'backbone', 'views/app'],
    function(_, $, Backbone, AppView) {
    return Backbone.Router.extend({
        routes: {
            '*noRoute':'dispatch'
        },
        initialize: function() {
            Backbone.history.start();
            new AppView();
        },
        dispatch: function() {

        }
    });
});
