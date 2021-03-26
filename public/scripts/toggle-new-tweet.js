$(document).ready(function() {
  
  // when 'Write new tweet' (top right) is clicked:
  $('.toggle-new-tweet').on('click', toggleNewTweet);
  
  // when user scrolls down where only tweets are visible, display the back to top
  // button for user.
  $(window).on('scroll', toggleScrollTopButton);

  // When 'back to top' button is clicked:
  $('.scroll-top').on('click', backToTop);

  // when focus on textarea is lost, remove error message
  $('textarea').blur(function() {
    $('.error-message').slideUp(200);
  });

});

// Function toggles whether the newtweet area is visible to user
const toggleNewTweet = () => {

  $(".new-tweet").toggle(400, () => {
    $('textarea').focus();
  });
  
};
// Function toggles whether the 'back to top' button is visible
// button is only visible when user has scrolled down, and is viewing only tweets
// (ie.they cannot see their user profile or the new tweet area)
const toggleScrollTopButton = function() {

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

// Function that takes user back to top, makes newtweet area visible and puts focus on
// the textarea for newtweet
const backToTop = function() {
  $(".new-tweet").toggle(true);
  $('html, body').animate({scrollTop: '0px'}, 300);
  $('textarea').focus();
};