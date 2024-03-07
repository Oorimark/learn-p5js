let squareSize, lineWidth;

function setup() {
  createCanvas(800, 880);
  background(100);
  lineWidth = random(2, 10);
}

function draw() {
  squareSize = random(50, 350);

  rectMode(CENTER);
  stroke(255, 0, 0, 10);
  fill(255, 255, 255, 20);
  strokeWeight(lineWidth);
  rect(400, 400, squareSize);
}

function mousePressed() {}
