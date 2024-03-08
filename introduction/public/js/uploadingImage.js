let img;

function preload() {
  img = loadImage("img/app_logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  backgrond(100);
  image(img, 100, 200);
}
