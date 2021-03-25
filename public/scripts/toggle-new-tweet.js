$(document).ready(function() {
  
  $('.toggle-new-tweet').on('click', toggleNewTweet);
  $(window).on('scroll', toggleScrollTop);
});

const toggleNewTweet = () => {
  $(".new-tweet").toggle(400);
  $('textarea').focus();
}

const toggleScrollTop = function() {

  let scrollHeight = 400; //height of header section

  // add height of new-tweet container, if newtweet is visible to user
  if ($(".new-tweet").is(":visible")) {
    scrollHeight += $(".new-tweet").innerHeight();
  }

  if ($(this).scrollTop() > scrollHeight) {
    $('.scroll-top').toggle(true);
    return;
  }
  if ($(this).scrollTop() < scrollHeight) {
    $('.scroll-top').toggle(false);
    return;
  }

}
