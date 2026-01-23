// Experiment 2 - Mouse Disturber (v2 Attract)
// Starting point: basic p5 distance + movement

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

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let d = dist(mouseX, mouseY, p.x, p.y);

    if (d < 80) {
      // attract instead of repel
      p.x -= (p.x - mouseX) * 0.05;
      p.y -= (p.y - mouseY) * 0.05;
    }

    fill(50);
    noStroke();
    circle(p.x, p.y, 8);
  }
}
