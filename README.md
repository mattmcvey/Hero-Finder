# HERO FINDER

## Contributors:
* [Matt McVey](https://github.com/mattmcvey)

### Learning Goals:
 * Further my understanding of React, Router, and Cypress
 * Implement a controlled form
#### Wins:
 * Further solidified my understanding of React, Router and Cypress
 * Was able to build this app from scratch with very little outside help
#### Challenges:
* Some the logic associated with the favoriting buttons were challenging due to their placement in hero info view
* Design is challenging to me so getting an app that I was proud of visually tough for me at times

## Overview of Site:
##### Hero finder is a web app that allows villains to:
  * View a random selection of heroes at the top of the landing page
  * Browse all heroes or filter based on name or power level
  * Click on a hero to view more specific information about that hero
  * From the hero view they were able to favorite that hero which was then added to a favorite heroes page
  * Remove a favorited hero

### Screenshots / Screen Recordings
#### Home Page and Searching:
<img src='https://media.giphy.com/media/QBF3HiQ9L33EMI1ejC/giphy.gif'/>

<img src='https://media.giphy.com/media/QBF3HiQ9L33EMI1ejC/giphy.gif'/>

#### Hero Info and Favorites:
<img src='https://media.giphy.com/media/Zov92zituMaogqaSsf/giphy.gif'/>



### Technologies Used:
* Javacript
* CSS
* Webpack
* [React](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Cypress](https://www.cypress.io/)

## Setup
* To access the site on your local machine:
  * Clone down the repo through the command line
  * Run `$npm install` to install dependencies
  * Run `$npm start` to open the page on a local browser
* Otherwise the site is deployed onto heroku and is accessible [here](https://my-hero-finder.herokuapp.com/)

## Running Tests
* After completing the setup steps above:
  * Run `$npx cypress open` to open up the test suite
  * From there click on the `home-page-spec.js` and `hero-info-spec.js` file to open it in your browser and watch the tests run automatically
