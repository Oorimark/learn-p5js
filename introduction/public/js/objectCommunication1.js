let ball1, ball2;
let balls = [];
let counter = 0;
let ballLength = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ball1 = new Ball(2000, 200, 300, 20);
  ball2 = new Ball(2000, 200, 300, 20);
}

function draw() {
  background(100);

  ball1.move();
  ball1.show();

  ball2.move();
  ball2.show();

  if (ball1.interact(ball2)) {
    background(255, 1, 1);
  }
}

class Ball {
  constructor(_id, x, y, size) {
    this._id = _id;
    this.x = x;
    this.y = y;
    this.size = size;
    this.backgroundAlpha = 0;
    this.changedShape = false;
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  onPressed(mX, mY) {
    let d = dist(mX, mY, this.x, this.y);
    if (d < this.size / 2) {
      this.backgroundAlpha = 100;
      this.changedShape = true;
      this.onRemove();
    }
  }

  onRemove() {
    balls = balls.filter((b) => b._id !== this._id);
  }

  interact(otherBall) {
    let d = dist(this.x, this.y, otherBall.x, otherBall.y);
    return d < this.size / 2 + otherBall.size / 2;
  }

  show() {
    fill(100, 0, 100, this.backgroundAlpha);
    stroke(255);
    strokeWeight(5);

    if (this.changedShape) {
      rect(this.x, this.y, this.size);
    } else {
      ellipse(this.x, this.y, this.size);
    }
  }
}
