/*
 * The painting program involves painting the
 * canvas on mouse movement and hanig the
 * color when the mouse is clicked
 */

let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

  r = 255;
  g = 255;
  b = 255;
}

function draw() {
  noStroke();
  fill(r, g, b);
  circle(mouseX, mouseY, 50);
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}
