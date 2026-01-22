function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  let h = hour();
  let m = minute();
  let s = second();

  let secSize = map(s, 0, 60, 20, 350);
  let minSize = map(m, 0, 60, 20, 300);
  let hourSize = map(h, 0, 24, 20, 250);

  noFill();

  stroke(200, 0, 0);
  circle(width / 2, height / 2, secSize);

  stroke(0, 200, 0);
  circle(width / 2, height / 2, minSize);

  stroke(0, 0, 200);
  circle(width / 2, height / 2, hourSize);

  fill(0);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text(h + ":" + m + ":" + s, width / 2, height - 20);
}
