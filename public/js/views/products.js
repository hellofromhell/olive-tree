App.Views.Products = Backbone.View.extend({
  el: $('#product-container'),

  initialize: function() {
    this.collection.on('add', this.addOne, this);
  },

  render: function() {
    this.collection.each( this.addOne, this );
    return this;
  },

  addOne: function(product) {
    var productView = new App.Views.Product({ model: product });
    this.$el.append(productView.render().el);
  }
});