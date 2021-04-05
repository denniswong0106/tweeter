# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This project was created with guidance by Lighthouse Labs. 

## Final Product

This is the page when loaded in:

!["Screenshot of tweet page on load"](https://github.com/denniswong0106/tweeter/blob/master/docs/scroll-through.gif)

As you can see, we can immediately start browsing the tweets on the page.

Let's try writing a Tweet. Note the word counter going red when the input text goes beyond 140 letters.

!["Screenshot of invalid tweet"](https://github.com/denniswong0106/tweeter/blob/master/docs/invalid-entry.gif)

Let's try putting in something valid this time:

!["Screenshot of valid tweet"](https://github.com/denniswong0106/tweeter/blob/master/docs/valid-entry.gif)

Now we can see our own tweet in the feed. Note that there isn't a user function implemented currently, so all tweets have a random user generated.

Lets scroll down and take a look. Note that when we are scrolled down looking at tweets, the 'back to top' button appears.The button only appears when the scroll below the user info header, and the new-tweet area if it is visible. We can click the button to send the user back to the top:

!["Screenshot of back to top button"](https://github.com/denniswong0106/tweeter/blob/master/docs/scroll-to-top.gif)


## Dependencies

- Express
- Node 5.10.x or above

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command.