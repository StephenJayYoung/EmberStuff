App = Ember.Application.create();

App.Router.map(function() {
 this.route("about", { path: "/about" });
 this.route("favorites", { path: "/favs" });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
