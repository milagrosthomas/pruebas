// Milagros Thomas y Falero Daiana
//tp final
let historia;

function setup() {
  createCanvas(900, 800);
  historia = new HistoriaInteractiva();

}

function draw() {
  background(255);
  historia.dessiner();
}

function mousePressed() {
  historia.mousePressed();
}
