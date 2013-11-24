var app = app || {};

app.TopMenuListView = Backbone.View.extend({
  el: $('#top-menu'),

  initialize: function() {
    this.$list = $('#top-menu');
  },

  render: function() {
    this.collection.each(function(topmenu) {
      var template = Handlebars.compile($('#top-menu-view-template').html());
      var html = template(topmenu.toJSON());
      this.$list.append(html);
    }, this); 

    return this;
  }
});
