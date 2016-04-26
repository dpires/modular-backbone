define(['underscore', 'jquery', 'backbone', 'mustache', 'text!templates/app.mustache'],
    function(_, $, Backbone, Mustache, AppTemplate) {
    return Backbone.View.extend({
        el: "#application",
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html(Mustache.render(AppTemplate, {heading: "Module Backbone"}));
            return this;
        }
    });
});
