let index = 0;
const colors = ["Red", "Blue", "Purple", "Green"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  fill(255);
  textSize(25);
  text(colors[index], 100, 200);
}

function mousePressed() {
  index++;
  if (index >= colors.length) index = 0;
}
