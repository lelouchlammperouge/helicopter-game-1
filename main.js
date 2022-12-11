// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";

let state = "start"

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart
  } else if (state === "gameon") {
    drawGame()
  } else if (state === "gameover") {
    drawGameOver
  }
  drawStart()

  // Request Animation Frame
  requestAnimationFrame(draw);
}

//eventstuff

document.addEventListener("click", mouseDownHandler)

function mouseDownHandler() {
  if (state === "start")
  state = "gameon"
}