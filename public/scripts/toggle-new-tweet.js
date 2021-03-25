$(document).ready(function() {
  
  $('.toggle-new-tweet').on('click', toggleNewTweet);
  $(window).on('scroll', toggleScrollTop);
});

const toggleNewTweet = () => {
  $(".new-tweet").toggle(400);
  $('textarea').focus();
}

const toggleScrollTop = function() {
  console.log('scrolltop:', $(this).scrollTop())
  if ($(this).scrollTop() > 300) {
    $('.scroll-top').toggle(true);
    return;
  }
  if ($(this).scrollTop() < 300) {
    $('.scroll-top').toggle(false);
  }

}
