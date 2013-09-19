App.Views.Product = Backbone.View.extend({
  tagName: 'li',

  className: 'product',

  template: template('product-single'),

  initialize: function() {
    this.model.on('destroy', this.unrender, this);
    this.model.on('change', this.render, this);
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  },

  events: {
    'keypress input': 'updateOnKey',
    'keyup input': 'updateOnKey',
    'blue .product': 'closeCancel',
    'click .edit': 'edit',
    'click .save': 'closeSave',
    'click .delete': 'delete',
    'click .cancel': 'closeCancel'
  },

  edit: function() {
    this.$el.addClass('editing');
    this.$el.find('input:first').focus();
    console.log( 'editing' );
  },

  delete: function() {
    this.model.destroy();
  },

  unrender: function() {
    this.remove();
  },

  closeSave: function() {
    this.model.save({
      title: this.$el.find('.edit-title').val(),
      price: this.$el.find('.edit-price').val(),
      description: this.$el.find('.edit-description').val()
    });
    this.$el.removeClass('editing');
  },

  closeCancel: function() {
    this.$el.removeClass('editing');
  },

  updateOnKey: function(e) {
    if (e.which == 13) {
      this.closeSave();
    }
    if (e.which == 27) {
      this.closeCancel();
    }
  }
});