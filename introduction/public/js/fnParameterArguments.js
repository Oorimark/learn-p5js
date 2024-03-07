function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  lolliPop(400, 300, 500);
  lolliPop(900, 300, 200);
}

function lolliPop(x, y, size) {
  noStroke();

  fill(255, 0, 10);
  rect(x - size / 6 / 2, y, size / 6, size);

  fill(255, 100, 0);
  ellipse(x, y, size);
}
