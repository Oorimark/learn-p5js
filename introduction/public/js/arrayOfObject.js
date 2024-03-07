let bubbles = [];
let counter = 0;
let numberOfBubbles = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  while (counter++ < numberOfBubbles) {
    bubbles.push(
      new Bubble(random(100, 200), random(700, 900), random(10, 50)),
    );
  }
}

function draw() {
  background(100);

  bubbles.forEach((bubble) => {
    bubble.move();
    bubble.bounce();
    bubble.display();
  });
}

class Bubble {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speedX = speed;
    this.speedY = speed;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  bounce() {
    if (this.x >= width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y >= height || this.y < 0) {
      this.speedY *= -1;
    }
  }

  display() {
    noFill();
    strokeWeight(4);
    stroke(255);
    ellipse(this.x, this.y, 25, 25);
  }
}
