let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(100);
}

function draw() {
  r = map(mouseX, 0, windowWidth, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  // g = map(mouseX, 0, windowWidth, 0, 255);

  background(r, 0, b);
  ellipseMode(CENTER);
  noStroke();
  fill(255); circle(mouseX, windowHeight / 2, 30);
}
