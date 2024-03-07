let ballX, ballY;
let starX, starY;
let canvas2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvas2 = createGraphics(windowWidth, windowHeight);

  background(100);
  ballY = windowHeight / 2;
  ballX = windowWidth / 2;
}

function draw() {
  background(100);
  image(canvas2, 0, 0);

  ballX += random(-5, 5);
  ballY += random(-5, 5);
  starX = random(width);
  starY = random(height);

  ellipseMode(CENTER);
  noStroke();
  fill(255, 0, 0);
  ellipse(ballX, ballY, 30);

  // canvas2.noStroke();
  // canvas2.fill(255);
  // canvas2.ellipse(mouseX, mouseY, 150);

  // creating starts
  canvas2.background(100);
  canvas2.noStroke();
  canvas2.fill(0, 0, 255);
  canvas2.rect(starX, starY, 20, 20);
}
