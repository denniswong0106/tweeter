/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // createTweetElement function - takes in tweet object, returns tweet article
  // containing entire html structure of the tweet

  const createTweetElement = function (tweetObj) {

    const tweetHeader = `<header><span><span class="user-avatar"><img src=${tweetObj.user.avatars}></span>${tweetObj.user.name}</span><span id="handle" >${tweetObj.user.handle}</span></header>`;
    const tweetContent = `<div>${tweetObj.content.text}</div>`;
    const tweetFooter = `<footer> 
    <span>${tweetObj.created_at}</span>
    <span> 
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </span>
    </footer>`
    return $(`<article class="tweet">${tweetHeader}${tweetContent}${tweetFooter}</article>`);

  }

  const renderTweets = function(arrOfTweetObjs) {
    arrOfTweetObjs.forEach(tweetObj => {
      $('#tweets-container').append(createTweetElement(tweetObj));

    });
  }
  const clearTweets = function(value) {
    $('.tweet').remove();
    return value;
  }

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

  // loadtweets makes a GET request to receieve an array of tweets as JSON.

  const loadtweets = function() {
    $.ajax({method: 'get', url: '/tweets/'})
    .then(renderTweets)
    .catch()
  }
  loadtweets();

  

})
