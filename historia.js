class HistoriaInteractiva {
  constructor() {
    this.pantalla = 0;
    this.cantidadTotalPantallas = 17;
    this.pantallaCreditos = 18;
    this.textoEnX = width / 2;
    this.textoEnY = 300;
    this.botonUnoX = width / 2 - width / 4;
    this.botonDosX = width / 2;
    this.botonTresX = width / 2 + width / 4;
    this.botonEnY = 500;
    this.ancho = 120;
    this.alto = 40;
    this.activado = false;
    this.botones = new Botones();
  }

  inicializarRelato() {
    this.relato = loadStrings("data/texto.txt");
  }

  dessiner() {
    this.dibujarFoto(this.pantalla);
    if (this.pantalla > 0 && this.pantalla !== 16) {
      fill(0, 100);
      rectMode(CENTER);
      rect(this.textoEnX, this.textoEnY, 500, 300);
    }
    this.relatarHistoria(this.pantalla, this.textoEnX, this.textoEnY);
    this.botones.dibujarBotones(this.pantalla, this.botonUnoX, this.botonDosX, this.botonTresX, this.botonEnY, this.ancho, this.alto);
  }

  dibujarFoto(numero) {
    let imgWidth = this.foto[numero].width;
    let imgHeight = this.foto[numero].height;
    let x = width / 2 - imgWidth / 2;
    let y = height / 2 - imgHeight / 2;

    image(this.foto[numero], x, y, imgWidth, imgHeight);
  }

  relatarHistoria(frase, textoX, textoY) {
    textAlign(CENTER, BOTTOM);
    if (this.pantalla === 0) {
      fill(255);
      push();
      textSize(62);
      text(this.relato[frase], textoX, textoY / 3, 500, 300);
      pop();
    }
    if (this.pantalla > 0) {
      fill(255);
      textSize(14);
      text(this.relato[frase], textoX, textoY / 3, 500, 600);
    }
  }

  Story() {
    this.activado = true;
  }

  mousePressed() {
    this.botones.verificarClick(this.pantalla, this);
    this.juego.mouse();
  }

  cambiarPantalla(nuevaPantalla) {
    this.pantalla = nuevaPantalla;
  }
}
