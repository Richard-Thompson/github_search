# Github Search Project

A React project based on using the github api to search for repositories. The landing page is my profile page set to repositories. You can search through the repositories on this landing page by searching in the submenu search box.

To search for repos using the github api you need to type a repo name into the mainNavbar's search box (the dark grey navigation bar at the top of the page). This will show 10 repos per page, scroll down and you can use the pagination component to navigate to the next 10 results. To view further details click on the title of one of the search options.

## Getting Started

To obtain a copy of this project you will need to follow the instructions below:

-On the command line change into the directory you wish to clone the project

-Copy the HTTPS clone url 

-carry out the following commands:

    
    git clone https://github.com/Richard-Thompson/github_search.git

    cd github_search
    

## Prerequisites

### Node:

Install Node according to the instructions on https://nodejs.org/en/

run node -v to check if node is or has been installed

### NPM:

Ensure that npm is fully updated, carry out the following command in your terminal:

    npm install npm@latest -g

run npm -v to see if node has been installed and what version you are running

## Installing

Once you have all the required software installed, go to the directory of the cloned project and run the following commmand:

    npm install 

This will install all the dependencies of the project.

To start the project on a localhost server run the following command

    npm run dev

You will now be able to see the project by navigating to:

    localhost:9080

## Running the tests

To run all the automated tests for this project, all you have to do is the following command in the root directory:

```
npm test
```
## Coding style tests

In this project I have installed eslint to highlight any syntax errors. 

This will run a post test script.

Once running, errors will show in the console.

## Built With

* [Node](https://nodejs.org/en/docs/) - Javascript runtime 
* [NPM](https://docs.npmjs.com/) - Dependency Management
* [Webpack](http://webpack.github.io/docs/) - Module bundler
* [React](https://facebook.github.io/react/) - Javascript library for user-interfaces
* [Redux](http://redux.js.org/) - A predictable state container for JavaScript apps
* And others.

## Authors

* **Richard Thompson** - *Initial work* - [Richard Thompson](https://github.com/Richard-Thompson)
