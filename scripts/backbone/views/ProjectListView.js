var app = app || {};

app.ProjectListView = Backbone.View.extend({
  el: $('#projects'),

  initialize: function() {
    this.$list = $('#projects');
  },

  render: function() {
    this.collection.each(function(project) {
      var template = Handlebars.compile($('#project-view-template').html());
      var html = template(project.toJSON());
      this.$list.append(html);
    }, this); 

    return this;
  }
});
