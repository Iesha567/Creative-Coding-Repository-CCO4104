function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  let h = hour();
  let m = minute();
  let s = second();

  // map time to bar widths
  let secW = map(s, 0, 60, 0, width - 40);
  let minW = map(m, 0, 60, 0, width - 40);
  let hourW = map(h, 0, 24, 0, width - 40);

  noStroke();

  // seconds bar
  fill(200, 0, 0);
  rect(20, 80, secW, 30);

  // minutes bar
  fill(0, 200, 0);
  rect(20, 150, minW, 30);

  // hours bar
  fill(0, 0, 200);
  rect(20, 220, hourW, 30);

  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(h + ":" + m + ":" + s, width / 2, height - 20);
}
