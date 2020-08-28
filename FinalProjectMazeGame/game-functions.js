// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, collideLineCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, textAlign, CENTER, LEFT, 
          key, keyIsPressed, createButton, int, show, floor, textFont, Cell, Person, Point, Line, noFill, 
          frameRate, tint, keyIsDown,
          
          createMaze, makeMazeWalls, removeWalls, checkNeighbors, index, drawGrid,
          checkCollision, displayScores, restart, checkKeyPressed, gamePlay, 
          gameLogicSetup, playButtonSetup, makingTheGridSetup, characterImageSetup,
          startScreen, showStartScreenInDraw,
          
          gameIsOver, firstGameStarted, playBtn1, playBtn2, timer, startingTime, person1, person2, mazeDone, trailOn*/

/* Order of global variable comments
 * 1st Stanza: p5 imports needed in all files
 * 2nd Stanza 1st Line: maze-functions.js functions
 * 2nd Stanza 2nd Line: game-functions.js functions
 * 2nd Stanza 3rd Line: setUp-functions. js functions
 * 2nd Stanza 4th Line: start-screen-functions.js functions
 * 3rd Stanza: file specific global variable imports
 */

//CONTAINS: checkCollision(), displayScores(), restart(), checkKeyPressed(), gamePlay()


//START OF GAME FUNCTIONS
function checkCollision(cell, currentX, currentY){
  let top = cell.topLine;
  let bottom = cell.bottomLine;
  let right = cell.rightLine;
  let left = cell.leftLine;
  
  if(collideLineCircle(top.x1, top.y1, top.x2, top.y2, currentX, currentY, 15) && cell.sides[0]){
    console.log(print("top hit"))
    
    return true;
  }
  if(collideLineCircle(bottom.x1, bottom.y1, bottom.x2, bottom.y2, currentX, currentY, 15)&& cell.sides[2]){
    console.log(print("bottom hit"))
  
    return true;
  }
  if(collideLineCircle(right.x1, right.y1, right.x2, right.y2, currentX, currentY, 15) && cell.sides[1]){
    console.log(print("right hit"))
   
    return true;
  }
  if(collideLineCircle(left.x1, left.y1, left.x2, left.y2, currentX, currentY, 15) && cell.sides[3]){
    console.log(print("left hit"))

    return true;
  }
  return false;
}

/*function handleTime() {
  //adjust the time variable
  if (!gameIsOver && timer > 0) timer--;
  if (timer <= 0) {
    gameIsOver = true;
    //console.log("game is over (time)");
  }
}*/

function displayScores() {
  textSize(12);
  fill(0);
  textAlign(LEFT);
  if (gameIsOver&&firstGameStarted) {
    textAlign(CENTER);
    text("GAME OVER", CENTER, CENTER);
    //console.log("press play");
    playBtn1.show();
    playBtn1.mousePressed(restart);
    
    playBtn2.show();
    playBtn2.mousePressed(restart);
  }
}

function restartEasy() {
  firstGameStarted = true;
  gameIsOver = false;
  trailOn = true;
}

function restartHard() {
  firstGameStarted = true;
  gameIsOver = false;
}

function checkKeyPressed() {
  if (keyIsDown(UP_ARROW)) {
    person2.moveUp();
  } else if (keyIsDown(DOWN_ARROW)) {
    person2.moveDown();
  } else if (keyIsDown(RIGHT_ARROW)) {
    person2.moveRight();
  } else if (keyIsDown(LEFT_ARROW)) {
    person2.moveLeft();
  }  
  if (keyIsDown(68)) {
    person1.moveRight();
  } else if (keyIsDown(65)) {
    person1.moveLeft();
  } else if (keyIsDown(87)) {
    person1.moveUp();
  } else if (keyIsDown(83)) {
    person1.moveDown();
  }
}

function gamePlay(){
  //START OF GAMEPLAY FUNCTIONS
  //For Fluid Movement of Players
  if (!gameIsOver && keyIsPressed) checkKeyPressed();

  //Score Card
  if (!gameIsOver) {
    playBtn1.hide();
    playBtn2.hide();
  }
  if (mazeDone) {
    displayScores();
  }
  //END OF GAMEPLAY FUNCTION
}
//END OF GAME FUNCTIONS
