



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(66,243,250)");
  
  // roof
  noStroke();
  fill("#C76C4C");
  triangle(75, 150, 327, 152, 200, 40);
  
  // house
  fill("rgb(241,125,125)");
  rect(75,150,250,200);
  
  // door
  fill("rgb(155,101,24)");
  rect(165,250, 70,100);
  
  // door knob
  fill("#FFFFFF");
  noStroke();
  ellipse(175, 310, 10,10);
  
  // sun
  noStroke();
  fill(255,255,0);
  ellipse(50,50,70,70);
}