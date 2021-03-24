/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // the meat goes here

  // createTweetElement function - takes in tweet object, returns tweet article
  // containing entire html structure of the tweet

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giantsasdfffffffffffffff"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = function (tweetObj) {
    console.log(tweetObj)
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
    const $tweet = $(`<article class="tweet">${tweetHeader}${tweetContent}${tweetFooter}</article>`);
    return $tweet;
  }

  const renderTweets = function(arrOfTweetObjs) {
    arrOfTweetObjs.forEach(tweetObj => {
      $('#tweets-container').append(createTweetElement(tweetObj));

    });
  }

  renderTweets(data);  


})
