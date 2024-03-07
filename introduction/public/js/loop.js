function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  noStroke();

  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      fill(random(255), 0, random(255));
      ellipse(x, y, 25);
    }
  }
}
