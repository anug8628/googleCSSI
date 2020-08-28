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
          startScreen, showStartScreenInDraw */

/* Order of global variable comments
 * 1st Stanza: p5 imports needed in all files
 * 2nd Stanza 1st Line: maze-functions.js functions
 * 2nd Stanza 2nd Line: game-functions.js functions
 * 2nd Stanza 3rd Line: setUp-functions. js functions
 * 2nd Stanza 4th Line: start-screen-functions.js functions
 * 3rd Stanza: file specific global variable imports
 */

class Cell {
  constructor(i, j, w, cols) {
    this.i = i;
    this.j = j;
    this.w = w;
    this.cols = cols;

    this.sides = [true, true, true, true]; //top, right, bottom left
    this.visited = false;
    
    let x = this.i * w;
    let y = this.j * w;
    
    this.topLine = new Line(x, y, x+w, y);
    this.rightLine = new Line(x+w, y, x+w, y+w);
    this.bottomLine = new Line(x+w, y+w, x, y+w);
    this.leftLine = new Line(x, y+w, x, y);
    
  }

  highlight() {
    //currently inactive, this highlights the cell leading the creation of the maze
    let w = this.w;
    let x = this.i * w;
    let y = this.j * w;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);
  }

  show(lines) {
    let w = this.w;

    let x = this.i * w;
    let y = this.j * w;
    stroke(300, 100, 50);
    strokeWeight(1);
    
    if (this.sides[0]) {
      line(x, y, x + w, y); //top side
    }
    if (this.sides[1]) {
      line(x + w, y, x + w, y + w); //right side
    }
    if (this.sides[2]) {
      line(x + w, y + w, x, y + w); // bottom side
    }
    if (this.sides[3]) {
      line(x, y + w, x, y); //left side
    }

    if (this.visited) {
      noStroke();
      fill(220, 0, 80);
     // strokeWeight(2.5);
      rect(x, y, w, w);
    }
  }
  
  checkSides(){
    if(this.i == 0){
      this.sides[3] = true;
    }
    if(this.i == this.w*this.cols){
      this.sides[1] = true;
    }
    if(this.j == 0){
      this.sides[0] = true;
    }
    if(this.j == this.w*this.cols){
      this.sides[2] = true;
    }
  }
}

