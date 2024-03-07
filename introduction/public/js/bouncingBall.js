let ballX = 0;
let ballSpeed = 5;
let reachedEnd = false;
let circleWidth = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowHeight;
}

function draw() {
  background(100);

  ellipseMode(CENTER);
  noStroke();
  fill(255);
  circle(ballX, height / 2, circleWidth);

  // if (reachedEnd) {
  //   ballX -= 5;
  //   if (ballX === 0) reachedEnd = false;
  // } else {
  //   ballX += 5;
  //   if (ballX >= width - circleWidth) {
  //     reachedEnd = true;
  //   }
  // }

  if (ballX >= width || ballX < 0) {
    ballSpeed *= -1;
  }

  ballX += ballSpeed;
}
