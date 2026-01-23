
let poem = "I learn by doing.\nOne line at a time.\nOne small version at a time.";
let index = 0;

function setup() {
  createCanvas(600, 300);
  textFont("monospace");
  textSize(22);
}

function draw() {
  background(245);

  // reveal 1 character every few frames
  if (frameCount % 4 === 0 && index < poem.length) {
    index++;
  }

  fill(20);
  noStroke();
  textAlign(LEFT, TOP);
  text(poem.substring(0, index), 20, 20);
}
