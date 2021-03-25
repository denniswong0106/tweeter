

$(document).ready(function() {

  // Allows us to 'escape' potentially dangerous xss attacks; ie html code given as 
  // user inputs
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // createTweetElement function - takes in tweet object, returns tweet article
  // containing entire html structure of the tweet
  const createTweetElement = function (tweetObj) {

    const tweetHeader = `<header><span><span class="user-avatar"><img src=${tweetObj.user.avatars}></span>${tweetObj.user.name}</span><span id="handle" >${tweetObj.user.handle}</span></header>`;
    const tweetContent = `<div>${escape(tweetObj.content.text)}</div>`;
    const tweetFooter = `<footer>
      <span>${tweetObj.created_at}</span>
      <span>
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
    })
  };

  // clear tweets clears all the stored DOM tweets on the html page
  const clearTweets = function(value) {
    $('.tweet').remove();
    return value;
  }

  // loadtweets makes a GET request to receieve an array of tweets as JSON.
  const loadtweets = function() {
    $.ajax({method: 'get', url: '/tweets/'})
    .then(renderTweets)
    .catch()
  }
  loadtweets();
  
  // initiates our actions when the "TWEET" button is pressed; we check for valid input
  // and if the input is valid, we store in database, then clear our tweets on page, 
  // then reload page with tweets udpated by database
  $('form').on('submit', function(event) {
    event.preventDefault();

    let $tweet = $(this).children('textarea').val();

    if ($tweet.length > 140) {
      alert('BAD ENTRY: YOU ARE ONLY ALLOWED 140 LETTERS');
      return;
    }
    if (!$tweet) {
      alert('HELLO?!? PUT SOME WORDS IN');
      return;
    }
    if ($tweet) {
      $.ajax({method: 'post', url: '/tweets/', data: $(this).serialize() })
      .then(clearTweets)
      .then(loadtweets);
      return;
    }

  }); 


  

})
