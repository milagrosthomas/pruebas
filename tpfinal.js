// Milagros Thomas y Falero Daiana
//tp final

let historia;
let cp;

function setup() {
  createCanvas(900, 800);
  historia = new HistoriaInteractiva();
  cp = new Claseprincipal();
}

function draw() {
  background(255);
  historia.dessiner();
  cp.display();
}

function mousePressed() {
  historia.mousePressed();
  cp.mouse();
}
