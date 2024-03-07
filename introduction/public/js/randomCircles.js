let x, y, r, b, g;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  x = random(width);
  y = random(height);
  r = random(255);
  b = random(255);
  g = random(255);

  noStroke();
  fill(r, g, b, 25);
  circle(x, y, 50);
}
