let bounce1, bounce2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bounce1 = new Bounce(200, 125, 34);
  bounce2 = new Bounce(300, 725, 14);
}

function draw() {
  background(100);

  bounce1.move();
  bounce1.bounce();
  bounce1.display();

  bounce2.move();
  bounce2.bounce();
  bounce2.display();
}

class Bounce {
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
