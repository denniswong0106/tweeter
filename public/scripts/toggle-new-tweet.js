$(document).ready(function() {
  
  // when 'Write new tweet' (top right) is clicked:
  $('.toggle-new-tweet').on('click', toggleNewTweet);
  
  // when user scrolls down where only tweets are visible, display the back to top
  // button for user. 
  $(window).on('scroll', toggleScrollTop);

  // When 'back to top' button is clicked:
  $('.scroll-top').on('click', backToTop)

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

};

const backToTop = function() {
  $(".new-tweet").toggle(true);
  $('textarea').focus();
}

