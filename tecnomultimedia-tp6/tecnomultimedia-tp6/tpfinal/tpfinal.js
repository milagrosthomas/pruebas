
let app;


function setup() {
  createCanvas(1200, 800);
  app = new App();
}


function draw() {
  app.dibujar();
}


function mousePressed() {
  app.mousePresionado();
}

function keyPressed() {
  app.keyPressed();
}


function keyReleased() {
  app.keyReleased();
}
