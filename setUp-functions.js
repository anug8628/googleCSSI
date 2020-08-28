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
          startScreen, showStartScreenInDraw,
          
          firstGameStarted, gameIsOver, startingTime, timer, lives, score, highScore, mazeDone
          centerX, centerY, playBtn1, playBtn2, fr
          cols, rows, w, grid, lines, current
          monkey1, monkey2, jungle, trailOn*/

/* Order of global variable comments
 * 1st Stanza: p5 imports needed in all files
 * 2nd Stanza 1st Line: maze-functions.js functions
 * 2nd Stanza 2nd Line: game-functions.js functions
 * 2nd Stanza 3rd Line: setUp-functions. js functions
 * 2nd Stanza 4th Line: start-screen-functions.js functions
 * 3rd Stanza: file specific global variable imports
 */

//CONTAINS : gameLogicSetup(), playButtonSetup(), makingTheGridSetup(), characterImageSetup()

function gameLogicSetup(){
  //game logic setup
  firstGameStarted = false;
  gameIsOver = true;
  startingTime = 300;
  timer = startingTime;
  lives = 30;
  score = 0;
  highScore = 0;
  mazeDone = false;
  trailOn = false;
}

function playButtonSetup(){
  // PLAY BUTTON
  centerX = width / 2 - 35;
  centerY = height / 2 - 55;
  playBtn1 = createButton("Click to play {Easy}");
  playBtn1.position(centerX-110, centerY);
  playBtn1.hide();
  playBtn1.mousePressed(restartEasy);
  
  playBtn2 = createButton("Click to play {Hard}");
  playBtn2.position(centerX+40, centerY);
  playBtn2.hide();
  playBtn2.mousePressed(restartHard);
  
  fr = 1000;
  frameRate(fr);
}

function makingTheGridSetup(){
  //Making the grid
  createCanvas(600, 600);
  cols = floor(width / w);
  rows = floor(height / w);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      var cell = new Cell(i, j, w, cols);
      grid.push(cell);
    }
  }
  console.log(print(lines[455]));
  
  current = grid[0];
}

function characterImageSetup(){
  //Monkey Character Image Setup
  monkey1 = loadImage(
    "https://cdn.glitch.com/0eb8f721-bc65-44f6-895a-5d35f4752aa7%2Fgeorgeface.png?v=1596140559246"
  );

  monkey2 = loadImage(
    "https://cdn.glitch.com/0eb8f721-bc65-44f6-895a-5d35f4752aa7%2Fdownload-2.png?v=1595875773029"
  );

  jungle = loadImage(
    "https://cdn.glitch.com/0eb8f721-bc65-44f6-895a-5d35f4752aa7%2Fjungle.jpg?v=1595959769123"
  );
}
  /*createMaze();
  [THIS FOLLOWING PART MAKES IT SO THE ANIMATION DOESNT HAPPEN]
  while(stack.length > 0){
    createMaze();
  }*/