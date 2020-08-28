// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, collideLineCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, textAlign, CENTER, LEFT, 
          key, keyIsPressed, createButton, int, show, floor, textFont, Cell, Person, Point, Line, noFill, 
          frameRate, tint, keyIsDown,
          
          createMaze, makeMazeWalls, removeWalls, checkNeighbors, index, drawGrid,
          checkCollision, displayScores, restartEasy, restartHard, checkKeyPressed, gamePlay, 
          gameLogicSetup, playButtonSetup, makingTheGridSetup, characterImageSetup,
          startScreen, showStartScreenInDraw */

/* Order of global variable comments
 * 1st Stanza: p5 imports needed in all files
 * 2nd Stanza 1st Line: maze-functions.js functions
 * 2nd Stanza 2nd Line: game-functions.js functions
 * 2nd Stanza 3rd Line: setUp-functions. js functions
 * 2nd Stanza 4th Line: start-screen-functions.js functions
 */

let person1,
  person2,
  persRad,
  monkey1,
  monkey2,
  playBtn1,
  playBtn2,
  centerX,
  centerY,
  gameIsOver,
  firstGameStarted,
  timer,
  startingTime,
  score,
  highScore,
  jungle,
  rowCounter,
  mazeDone,
  lives,
  fr,
  notHit,
  checkWin, trailOn;

let cols,
  rows,
  w = 30,
  grid = [],
  current,
  stack = [],
  lines = [];

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);

  /* Person Constructor(STARTING X, STARTING Y, VELOCITY, PLAYER WIDTH, PLAYER HEIGHT,
   * PLAYER NAME, HUE, SATURATION, BRIGHTNESS, IMAGE NAME)
   */
  person1 = new Person(15, 15, 4, 15, 15, 'Harambe', 360, 60, 50, "monkey2");
  person2 = new Person(585, 585, 4, 15, 15, 'George', 320, 40, 100, "monkey1");

  notHit = true;

  gameLogicSetup();
  playButtonSetup();
  makingTheGridSetup();
  characterImageSetup();
}

function draw() {
  background(220, 0, 80);
  /*instead of brute force callign createMaze() 5 times
   * calling the function multiple times speeds it up
   */
  for (var i = 0; i < 5; i++) {
    createMaze();
  }

  drawGrid();
  makeMazeWalls();

  //Show Players
  person1.showMonkey();
  person2.showMonkey();

  gamePlay();

  showStartScreenInDraw();

  //Check for Collisions Between the Players and Cell
  for (let i = 0; i < grid.length; i++) {
    checkCollision(grid[i], person1);
    checkCollision(grid[i], person2);
  }
}
