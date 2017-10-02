# Conways-Game-Of-Life

Powered by ![Angular CLI](https://cli.angular.io/)

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

### Disclaimer

This code has been tested on modern browsers only. Other stuff may not work on Internet Explorer older than 9. To be safe, use Chrome.

### Setup

Once you have the repository cloned in your computer, you need to use [Node Package Manager](https://npmjs.org/).
Run these commands on the root folder.

	$ npm install
	$ npm test

Now you can open your browser on http://localhost:4200 (If tool doesn't open for you).

### To Run Tests

$ npm test

This will open browser window, run the tests and generates the report.

### Suggestions are welcomed.
