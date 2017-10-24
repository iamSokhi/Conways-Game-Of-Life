# Conways-Game-Of-Life

Powered by [Angular CLI](https://cli.angular.io/)

---
The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

![image](https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif)

Here are the rules..

- Any live cell with fewer than two live neighbors dies (under-population).
- Any live cell with two or three live neighbors lives on to the next generation (suitable conditions).
- Any live cell with more than three live neighbors dies (over population).
- Any dead cell with no more and no less than three neighbors comes to life (reproduction).

History of the game:

> Conway was interested in a problem presented in the 1940s by mathematician John von Neumann, who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway's successful attempt to drastically simplify von Neumann's ideas. The game made its first public appearance in the October 1970 issue of Scientific American, in Martin Gardner's "Mathematical Games" column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway's Game of Life.

## Angular 4 Implementation

This folder contains the Angular 4 implementation of [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life).

## Demo

> Demo has been deployed on heroku. So be patient; app may take some time to load for the first time

You can [click here](http://conways-gol.herokuapp.com) to see the demo.

## Disclaimer

This code has been tested on modern browsers only.

## Prerequisite

- You must have node installed on your system. To verify run the following commands in command prompt;

```bash
# The following commands will print out node and npm versions
$ node -v
$ npm -v

```

## Setup

Once you clone the repository in your local system, run the following commands;

```bash
$ npm install # Install all the app dependencies
$ npm run serve # run app in development environment

# Optional: or start the app on express server using build files
$ npm start
```

## To Run Tests

```bash
# You can run the following command to test the app
$ npm test
```

### So, What's next?

> Everyone is welcome to suggest improvements. Feel free to fork this repository or create a pull request for improving this project.
