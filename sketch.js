let angle = 0; // angle for the spiral animation
let leafsize = 5; // size of the leaf
let growth = 0.6; // growth rate of the leaf

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (frameCount === 1){
    capturer.start();
  }

  background(255);

  // draw the leaf
  push();
  translate(width/2, height/2);
  noStroke();
  fill('#99FF99');
  spiralLeaf(leafsize);

  fill('#00CC00');
  spiralLeaf(leafsize/2);

  fill('#009900');
  spiralLeaf(leafsize/4);

  fill('#99FF99');
  spiralLeaf(leafsize/8);

  fill('#00CC00');
  spiralLeaf(leafsize/16);

  fill('#009900');
  spiralLeaf(leafsize/32);

  pop();

  // update the size and angle for the next frame
  leafsize += growth;
  angle += 0.6;

  if (frameCount < 901) {
      capturer.capture(canvas);
    } else if (frameCount === 901) {
      capturer.save();
      capturer.stop();
    }
}

// function to draw a spiral leaf
function spiralLeaf(leafsize) {
  beginShape();
  for (let i = 0; i < 100; i++) {
    let r = map(i, 0, 100, 0, leafsize);
    let theta = radians(4 * i + 4 * angle);
    let x = 3 * r * sin(theta);
    let y = 3 * r * cos(theta);
    curveVertex(x, y);
  }
  endShape();
}
