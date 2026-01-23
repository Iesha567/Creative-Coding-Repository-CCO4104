

let points = [];

function setup() {
  createCanvas(500, 500);

  for (let y = 40; y < height; y += 40) {
    for (let x = 40; x < width; x += 40) {
      points.push({ x: x, y: y });
    }
  }
}

function draw() {
  background(240);

  // stronger force when mouse is pressed
  let strength = mouseIsPressed ? 0.12 : 0.05;

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let d = dist(mouseX, mouseY, p.x, p.y);

    if (d < 80) {
      p.x += (p.x - mouseX) * strength;
      p.y += (p.y - mouseY) * strength;
    }

    fill(50);
    noStroke();
    circle(p.x, p.y, 8);
  }
}
