let poem = "I learn by doing.\nOne line at a time.\nOne small version at a time.";
let index = 0;

function setup() {
  createCanvas(600, 300);
  textFont("monospace");
  textSize(22);
}

function draw() {
  // gentle shifting background (simple animation)
  let bg = 235 + 15 * sin(frameCount * 0.03);
  background(bg);

  if (frameCount % 4 === 0 && index < poem.length) {
    index++;
  }

  // fade text in as it types
  let alpha = map(index, 0, poem.length, 30, 255);
  fill(20, alpha);
  noStroke();
  textAlign(LEFT, TOP);
  text(poem.substring(0, index), 20, 20);
}
