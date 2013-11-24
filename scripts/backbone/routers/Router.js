var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    this.projects = new app.ProjectList([
      new app.Project({title: 'White Paradise', link: 'http://54.201.33.116:3000', image: 'images/white.png', description: 'A story about the relationship between the production of cocaine and the war in Colombia', techspecs: [ 'Rails 4', 'Ruby', 'Mongo DB', 'JavaScript', 'D3' ], github: 'https://github.com/camicano/infographic' }),
      new app.Project({title: 'Most Forked Repos on Github', link: 'http://184.73.186.178:3000/', image: 'images/github.png', description: 'An infographic that show you the most popular repos of the day on Github.', techspecs: [ 'Rails 4', 'Ruby', 'Mongo DB', 'JavaScript', 'D3' ], github: 'https://github.com/camicano/github_app' }),
      new app.Project({title: 'Food Me', link: 'http://foodme.us/', image: 'images/foodme.png', description: 'A plataform that allows you to see where are food truck located near your area.', techspecs: [ 'Rails', 'Ruby', 'Javascript', 'jQuery', 'Postgresql', 'Googlemaps API', 'Frousquare API', 'Skeleton' ], github: 'https://github.com/camicano/food_trucks_app' }),
      new app.Project({title: 'Asana', link: 'http://yogapp.herokuapp.com/', image: 'images/asana.png', description: 'An app that allows you to find affortable yoga classes near your location and at a time that works for you.', techspecs: [ 'Rails', 'Ruby', 'Postgresql', 'Skeleton' ], github: 'https://github.com/camicano/yoga_app' })
    ]);

    this.topmenu = new app.TopMenuList([
      new app.TopMenu({title: 'Contact'}),
      new app.TopMenu({title: 'Skills'}),
      new app.TopMenu({title: 'Projects'}),
      new app.TopMenu({title: 'Home'})
    ]);

    this.bottommenu = new app.BottomMenuList([
      new app.BottomMenu({name: 'fa fa-github-square fa-3x', link: 'https://github.com/camicano'}),
      new app.BottomMenu({name: 'fa fa-linkedin-square fa-3x', link: 'http://www.linkedin.com/in/camilacano/'}),
      new app.BottomMenu({name: 'fa fa-stack-overflow fa-3x', link: 'http://stackoverflow.com/users/2904279/camicano'}),
      new app.BottomMenu({name: 'fa fa-twitter fa-3x', link: 'https://twitter.com/camicanonyc'})
    ]);
  },

  index: function() {
    app.projects = new app.ProjectListView({collection: this.projects});
    app.topMenu = new app.TopMenuListView({collection: this.topmenu});
    app.bottomMenu = new app.BottomMenuListView({collection: this.bottommenu});

    app.projects.render();
    app.topMenu.render();
    app.bottomMenu.render();
  }
});
