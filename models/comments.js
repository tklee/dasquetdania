Comment = Backbone.Model.extend({
  content: null
});

Comments = Backbone.Collection.extend({

  initialize: function (models, options) {
    this.bind("add", options.view.addCommentLi);
    //Listen for new additions to the collection and call a
    //view function if so
  }

});

AppView = Backbone.View.extend({
  el: $("body"),
  initialize: function() {
    this.comments = new Comments(null, {view: this});
  },

  events: {
    "click #add-comment": "showPrompt",
  //change this later to form an input box rather than prompt
  },

  showPrompt: function() {
    var comment_content = prompt("Enter your comment");
    var comment_model = new Comment({ content: comment_content });

    this.comments.add( comment_model );
  },

  addCommentLi: function (model) {
    $("#comments-list").append("<li>" + model.get('content') + "</li>");
    //use .get to receive attributes of the model
  }

});

var appview = new AppView;
