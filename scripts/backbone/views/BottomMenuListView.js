var app = app || {};

app.BottomMenuListView = Backbone.View.extend({
  el: $('#bottom-menu'),

  initialize: function() {
    this.$list = $('#bottom-menu');
  },

  render: function() {
    this.collection.each(function(bottommenu) {
      var template = Handlebars.compile($('#bottom-menu-view-template').html());
      var html = template(bottommenu.toJSON());
      this.$list.append(html);
    }, this); 

    return this;
  }
});
