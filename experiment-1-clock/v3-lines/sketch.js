function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  translate(width / 2, height / 2);

  let h = hour();
  let m = minute();
  let s = second();

  strokeWeight(4);

  // seconds hand
  stroke(200, 0, 0);
  rotate(map(s, 0, 60, 0, 360));
  line(0, 0, 120, 0);

  // minutes hand
  rotate(-map(s, 0, 60, 0, 360));
  stroke(0, 200, 0);
  rotate(map(m, 0, 60, 0, 360));
  line(0, 0, 90, 0);

  // hours hand
  rotate(-map(m, 0, 60, 0, 360));
  stroke(0, 0, 200);
  rotate(map(h, 0, 24, 0, 360));
  line(0, 0, 60, 0);
}
