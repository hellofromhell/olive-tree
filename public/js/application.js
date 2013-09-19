$(function() {

  //Initialize Main Product Collection (may not be correct place)
  App.products = new App.Collections.Products;
  App.products.fetch().then(function() {
    //Initialize Backbone View
    new App.Views.Chrome({ collection: App.products });
  });

  //Initial Backbone Routers
  App.router = new App.Router;
  Backbone.history.start();
});