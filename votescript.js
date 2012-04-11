(function() {
  var vote;

  $(function() {
    $('.bit .upvote').click(function(e) {
      return vote($(this).attr('bit_id'), 'up');
    });
    return $('.bit .downvote').click(function(e) {
      return vote($(this).attr('bit_id'), 'down');
    });
  });

  vote = function(id, direction) {
    console.log('voting ' + direction);
    if (direction === 'up' || direction === 'down') {
      console.log('voting2');
      return $.ajax({
        url: '/bits/' + id + '/votes',
        type: 'put',
        data: {
          direction: direction
        },
        success: function() {
          return window.location.reload();
        }
      });
    }
  };

}).call(this);
