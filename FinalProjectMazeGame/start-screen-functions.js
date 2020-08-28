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
          startScreen, showStartScreenInDraw
          
          monkey1, monkey2, gameIsOver, mazeDone, playBtn1, playBtn2 */

/* Order of global variable comments
 * 1st Stanza: p5 imports needed in all files
 * 2nd Stanza 1st Line: maze-functions.js functions
 * 2nd Stanza 2nd Line: game-functions.js functions
 * 2nd Stanza 3rd Line: setUp-functions. js functions
 * 2nd Stanza 4th Line: start-screen-functions.js functions
 */

//CONTAINS : startScreen(), showStartScreenInDraw()

function startScreen() {
  //background of start page
  // background(jungle, width / 1.48, height / 1.54, 100,);
  background(240, 40, 100, 0.7);
  //text for header
  textFont("cursive");
  textSize(15);
  fill(25);
  textAlign(CENTER);
  text("welcome to...", width / 2, height / 7);
  textSize(55);
  fill(0);
  text("Maze Monkey", width / 2, height / 3.5);
  //player 1
  fill(160, 100, 50);
  textSize(20);
  text("GEORGE", width / 1.32, height / 1.75);
  fill(360, 90, 50);
  textSize(15);
  text("arrow keys", width / 1.32, height / 1.6);
  image(monkey2, width / 6, height / 1.5, 90, 110);
  //player two
  textSize(20);
  fill(200, 100, 50);
  text("HARAMBE", width / 4, height / 1.75);
  fill(360, 90, 50);
  textSize(15);
  text("A, W, S,& D keys", width / 4, height / 1.6);
  image(monkey1, width / 1.48, height / 1.5, 80, 110);
}

function showStartScreenInDraw(){
   //Start Page
  if (gameIsOver && mazeDone) {
    startScreen();
    playBtn1.show();
    playBtn2.show();
  }
}
