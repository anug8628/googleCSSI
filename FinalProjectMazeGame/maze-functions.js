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

          index, grid, stack, current, cols, rows, lines, mazeDone*/

/* Order of global variable comments
 * 1st Stanza: p5 imports needed in all files
 * 2nd Stanza 1st Line: maze-functions.js functions
 * 2nd Stanza 2nd Line: game-functions.js functions
 * 2nd Stanza 3rd Line: setUp-functions. js functions
 * 2nd Stanza 4th Line: start-screen-functions.js functions
 * 3rd Stanza: file specific global variable imports
 */

//CONTAINS : createMaze(), makeMazeWalls(), removeWalls(), checkNeighbors(), index(), drawGrid()

//START OF MAZE FUNCTIONS
function createMaze() {
  //creating the maze
  current.visited = true;
  //current.highlight();
  let next = checkNeighbors(current);
  if (next) {
    next.visited = true;
    stack.push(current);
    removeWalls(current, next);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
   fill(45);
   textSize(40);
   text("maze generating...", width / 4.35, height / 2);
}
function makeMazeWalls() {
  //create maze walls
  stroke(300, 100, 50);
  strokeWeight(1);
  noFill();
  rect(0, 0, 600, 600); //surrounding square

  stroke(220, 0, 80);
  fill(220, 0, 80);
  rect(-10, 0, 11, 28); //opening top left

  stroke(220, 0, 80);
  fill(220, 0, 80);
  rect(599, 571, 11, 28); //opening bottom right
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.sides[3] = false;
    b.sides[1] = false;
  } else if (x === -1) {
    a.sides[1] = false;
    b.sides[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.sides[0] = false;
    b.sides[2] = false;
  } else if (y === -1) {
    a.sides[2] = false;
    b.sides[0] = false;
  }
}

function checkNeighbors(curr) {
  let neighbors = [];
  let i = curr.i;
  let j = curr.j;

  let top = grid[index(i, j - 1)];
  let right = grid[index(i + 1, j)];
  let bottom = grid[index(i, j + 1)];
  let left = grid[index(i - 1, j)];

  if (top && !top.visited) {
    neighbors.push(top);
  }
  if (right && !right.visited) {
    neighbors.push(right);
  }
  if (bottom && !bottom.visited) {
    neighbors.push(bottom);
  }
  if (left && !left.visited) {
    neighbors.push(left);
  }

  if (neighbors.length > 0) {
    let r = int(random(0, neighbors.length));
    return neighbors[r];
  } else {
    return undefined;
  }
}

//returns index of middle cells
function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function drawGrid(){
  
  //Drawing the Grid
  for (let i = 0; i < grid.length; i++) {
    grid[i].show(lines);
  }

  if (stack.length == 0) {
    mazeDone = true;
  }
}

// END OF MAZE FUNCTIONS
