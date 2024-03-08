let balls = [];
let counter = 0;
let ballLength = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  while (counter++ < ballLength) {
    // let _id = random(1000, 2000);
    // balls.push(new Ball(random(200, 500), random(300, 700), random(20, 100)));
    let _id = random(1000, 2000);
    let r = random(20, 100);
    let x = random(300, 700);
    let y = random(500, 800);
    balls.push({
      _id,
      player: new Ball(_id, x, y, r),
    });
  }
}

function draw() {
  background(100);

  balls.forEach((ball) => {
    ball.player.move();
    ball.player.show();
  });
}

function mousePressed() {
  balls.forEach((ball) => {
    ball.player.onPressed(mouseX, mouseY);
  });

  // let _id = random(1000, 2000);
  // let r = random(20, 100);
  // balls.push({
  //   _id,
  //   player: new Ball(_id, mouseX, mouseY, r),
  // });
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
    // if (mouseX <= this.x + this.size / 2 && mouseX >= this.x - this.size / 2) {
    //   console.log("Pressed");
    //   this.backgroundAlpha = 100;
    // }

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
