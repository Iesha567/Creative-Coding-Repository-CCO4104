// Experiment 3 - Progressive Text Reveal (v3 Glitch)
// Adds tiny jitter effect when new char appear.

let poem = "I learn by doing.\nOne line at a time.\nOne small version at a time.";
let index = 0;
let jitter = 0;

function setup() {
  createCanvas(600, 300);
  textFont("monospace");
  textSize(22);
}

function draw() {
  background(245);

  if (frameCount % 4 === 0 && index < poem.length) {
    index++;
    jitter = 6; // brief glitch when a new characterappears
  }

  // jitter decays
  jitter *= 0.7;

  let jx = random(-jitter, jitter);
  let jy = random(-jitter, jitter);

  fill(20);
  noStroke();
  textAlign(LEFT, TOP);
  text(poem.substring(0, index), 20 + jx, 20 + jy);
}
