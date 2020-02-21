let bubble;

function setup() {
    createCanvas(600, 600);
    bubble = new Bubble();
}

function draw() {
    background(0);

    for (let i = 0; i < 10; i++) {
    bubble.move();
    bubble.show();
}
}

class Bubble {
  constructor () {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = bubble.y + random(150, 450);
    this.y =  random(150, 450);
  }

  show() {
    stroke('green');
    strokeWeight(7);
    fill('green');
    line(this.x, this.y, random(5, 590), random(5, 590));
    ellipse(this.x, this.y, random(5, 50), random(5, 50));
  }
}
