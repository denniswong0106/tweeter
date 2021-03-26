// --------------------------------------------------------------//

$(document).ready(function() {

  // Loads in database tweets once document is ready.
  loadtweets();

  // Runs function to POST new tweet to db, and recreate the webpage with
  // tweets, with the callback function
  $('form').on('submit', submitAndRecreateTweets);
});

// -------------------------------------------------//

// Functions //

// Allows us to 'escape' potentially dangerous xss attacks; ie html code given as
// user inputs
const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// createTweetElement function - takes in tweet object, returns an html string
// which creates a tweet on page
const createTweetElement = function(tweetObj) {

  const tweetHeader = `<header><span><span class="user-avatar"><img src=${tweetObj.user.avatars}></span>${tweetObj.user.name}</span><span id="handle" >${tweetObj.user.handle}</span></header>`;
  const tweetContent = `<div>${escape(tweetObj.content.text)}</div>`;
  const tweetFooter = `<footer>
    <span>${moment(tweetObj.created_at).fromNow()}</span>
    <span class=icons>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </span>
    </footer>`;

  return $(`<article class="tweet">${tweetHeader}${tweetContent}${tweetFooter}</article>`);
};

// takes an array of Tweet objects and uses each tweet object information to render
// a tweet on the page
const renderTweets = function(arrOfTweetObjs) {

  arrOfTweetObjs.forEach(tweetObj => {
    $('#tweets-container').prepend(createTweetElement(tweetObj));
  });
};

// clear tweets clears all the stored DOM tweets on the html page
const clearTweets = function(value) {
  $('.tweet').remove();
  return value;
};

// clear the textarea text

const clearTextArea = function(value) {
  $('textarea').val('');
  $('.counter').val(140);
  return value;
};

// loadtweets makes a GET request to receieve an array of tweets as JSON.
const loadtweets = function() {
  $.ajax({method: 'get', url: '/tweets/'})
    .then(renderTweets);
};

// function that display the error given, with small slidedown animation
const errorDisplay = (message) => {

  $('.error-message').text(message);
  $('.error-message').slideDown(600);
  $('textarea').focus();
};

// initiates our actions when the "TWEET" button is pressed; we check for valid input
// and if the input is valid, we store in database, then clear our tweets on page,
// then reload page with tweets udpated by database
const submitAndRecreateTweets = function(event) {
   
  event.preventDefault();



  $('.error-message').slideUp(300, () => {
    let $tweet = $(this).children('textarea').val();

    if ($tweet.length > 140) {
      errorDisplay('Too many letters!');
      return;
    }

    if (!$tweet) {
      errorDisplay('Please enter some letters!');
      return;
    }

    if ($tweet) {
      $.ajax({method: 'post', url: '/tweets/', data: $(this).serialize() })
        .then(clearTweets)
        .then(clearTextArea)
        .then(loadtweets);
      return;
    }

  });
};