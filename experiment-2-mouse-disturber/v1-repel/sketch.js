let points = [];

function setup() {
  createCanvas(500, 500);

  for (let y = 40; y < height; y += 40) {
    for (let x = 40; x < width; x += 40) {
      points.push({ x: x, y: y });
    }
  }
}
