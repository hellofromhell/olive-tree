App.Views.Chrome = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
    var allProductsView = new App.Views.Products({ collection: App.products }).render();
  },

  events: {
    'click .new-product-btn': 'newProduct'
  },

  newProduct: function() {
    if ( ! $('#new-product').hasClass('show-form') ) {
      var addProductView = new App.Views.NewProduct({ collection: App.products });
      //$('#new-product-holder').html(addProductView.el);
    } else {
      $('new-product-btn').attr("disabled", "disabled");
    }
  }
});