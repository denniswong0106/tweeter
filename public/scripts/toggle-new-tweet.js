$(document).ready(function() {
  
  $('.toggle-new-tweet').on('click', toggleNewTweet);

});

const toggleNewTweet = () => {
  $(".new-tweet").toggle(400);
  $('textarea').focus();
}
