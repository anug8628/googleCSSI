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
          
          monkey1, monkey2, grid, trailOn*/

/* Order of global variable comments
 * 1st Stanza: p5 imports needed in all files
 * 2nd Stanza 1st Line: maze-functions.js functions
 * 2nd Stanza 2nd Line: game-functions.js functions
 * 2nd Stanza 3rd Line: setUp-functions. js functions
 * 2nd Stanza 4th Line: start-screen-functions.js functions
 * 3rd Stanza: file specific global variable imports
 */

class Person {
  constructor(x, y, v, w, h, name, hue, s, b, image) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.w = w;
    this.h = h;
    this.hue = hue;
    this.s = s;
    this.b = b;
    this.name = name;
    this.positions = [];
    this.positions.push(new Point(this.x,this.y));
    this.image = image
    // this.vX = 0;
    // this.vY = 0;
  }

  moveUp() {
    this.checkMove(this.x, this.y - this.v);
  }
  moveDown() {
    this.checkMove(this.x, this.y + this.v);
  }
  moveLeft() {
    this.checkMove(this.x - this.v, this.y);
  }
  moveRight() {
    this.checkMove(this.x + this.v, this.y);
  }
  
  checkMove(currentX, currentY){
    for(let i = 0; i < grid.length; i++){
      if(checkCollision(grid[i], currentX, currentY)){
        return
      }
    }
    this.x = currentX;
    this.y = currentY;
    this.positions.push(new Point(this.x,this.y));
  }

  // updateVelocity() {
  //   this.x += this.vX;
  //   this.y += this.vY;
  //   if (this.y >= height || this.y <= 0) {
  //     this.vY = 0;
  //     this.y = height - 1;
  //   } else {
  //     this.vY += 0.1;
  //   }
  // }

  showMonkey() {
    noStroke();
    fill(this.hue, this.s, this.b);
    ellipse(this.x, this.y, this.w, this.h);
    strokeWeight(15);
    //fill(360, 80, 50);
    if(trailOn)this.showTrail();
    noStroke();
    if(this.image == "monkey1")image(monkey1, this.x-8, this.y-8, this.w, this.h);
    if(this.image == "monkey2")image(monkey2, this.x-8, this.y-8, this.w, this.h);
  }

  showTrail(){
    console.log("length of positions for " + this.name+": "+this.positions.length);
    for(let i = 0; i <this.positions.length-1; i++){
      stroke(this.hue,this.s,this.b, 0.1);
      line(this.positions[i].x, this.positions[i].y, this.positions[i+1].x, this.positions[i+1].y);
    }
  }
}
