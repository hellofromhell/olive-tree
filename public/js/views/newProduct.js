App.Views.NewProduct = Backbone.View.extend({
  el: ('#new-product-holder'),

  template: template('add-form'),

  initialize: function() {
    //this.$el.slideDown();
    this.render();
    this.wrap = this.$el.find('#new-product');
    this.$el.find('#new-product').addClass('show-form');
  },

  render: function() {
    var html = this.template();

    this.$el.html(html);
    return this;
  },

  events: {
    'click .save': 'addProduct',
    'click .cancel': 'cancel'
  },

  cancel: function() {
    //this.$el.slideUp();
    this.$el.off('click', '.save');
    this.wrap.removeClass('show-form');
  },

  addProduct: function() {
    this.collection.create({
      title: $('#new-title').val(),
      price: $('#new-price').val(),
      description: $('#new-description').val()
    }, { wait: true}, { validate: true });
    this.wrap.removeClass('show-form');
    this.$el.off('click', '.save');
  }
});