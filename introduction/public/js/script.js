let circleX = 100;
let circleY = 100;
let circleSize = 50;
let reachedMax = false;

function setup() {
  createCanvas(800, 800);
  background(100);
}

function draw() {
  // // grayscale
  // background(100); // having one colors makes it's grayscale
  //
  // line(10, 0, 400, 400); // (x1, y1, x2, y2)
  //
  // rectMode(CENTER);
  // rect(100, 50, 55, 75); // (x-cordinate, y-cordinate, width, height)
  //
  // ellipseMode(CENTER);
  // ellipse(20, 200, 50); // (x-cord, y-cord, width)
  //
  // quad(150, 140, 50, 190, 150, 240, 250, 190, 150, 140);
  //
  // triangle(150, 50, 100, 150, 200, 150);
  //

  // rectMode(CENTER);
  // fill(0, 0, 255);
  // stroke(0, 255, 0);
  // strokeWeight(5);
  // rect(400, 400, 300);
  //

  noStroke();
  fill(255);
  ellipseMode(CENTER);
  ellipse(400, 400, circleSize);

  if (reachedMax) {
    print("Reaced Max");
    circleSize = circleSize - 0.5;

    if (circleSize <= 50) reachedMax = false;
  } else {
    print("Not reached max yet");
    circleX += 0.5;
    circleY += 0.5;
    circleSize += 0.5;

    if (circleSize >= 700) reachedMax = true;
  }
}

// mouse event

function mousePressed() {
  background(100);
  circleSize = 50;
}
