let ball = {
  x: 200,
  y: 135,
  speedX: 24,
  speedY: 24,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  move();
  bounce();
  display();
}

function move() {
  ball.x += ball.speedX;
  ball.y += ball.speedY;
}

function bounce() {
  if (ball.x >= width || ball.x < 0) {
    ball.speedX *= -1;
  }
  if (ball.y >= height || ball.y < 0) {
    ball.speedY *= -1;
  }
}

function display() {
  noFill();
  strokeWeight(4);
  stroke(255);
  ellipse(ball.x, ball.y, 25, 25);
}
