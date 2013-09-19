App.Collections.Products = Backbone.Collection.extend({
  model: App.Models.Product,

  url: '/laravel/olive-tree/public/products'
});