class Botones {
  dibujarBotones(pantalla, botonUnoX, botonDosX, botonTresX, botonEnY, ancho, alto) {
    if (pantalla === 0 || pantalla === 14 || pantalla === 15 || pantalla === 16 || pantalla === 17) {
      this.dibujarBoton(botonDosX, botonEnY, ancho, alto, "Iniciar");
    }
    if (pantalla > 0 && pantalla !== 14 && pantalla !== 15 && pantalla !== 16 && pantalla !== 17) {
      this.dibujarBoton(botonUnoX, botonEnY, ancho, alto, "Atras");
      this.dibujarBoton(botonTresX, botonEnY, ancho, alto, "Adelante");
    }
    if (pantalla === 2 || pantalla === 10 || pantalla === 12) {
      this.dibujarBoton(botonUnoX, botonEnY, ancho, alto, "Opcion A");
      this.dibujarBoton(botonTresX, botonEnY, ancho, alto, "Opcion B");
    }
    if (pantalla === 13) {
      this.dibujarBoton(botonTresX, botonEnY, ancho, alto, "Jugar");
    }
    if (pantalla === 14 || pantalla === 15 || pantalla === 16) {
      this.dibujarBoton(botonDosX, botonEnY, ancho, alto, "Reiniciar");
    }
    if (pantalla === 17) {
      this.dibujarBoton(botonUnoX, botonEnY, ancho, alto, "A");
      this.dibujarBoton(botonDosX, botonEnY, ancho, alto, "B");
    }
  }

  dibujarBoton(x, y, ladoX, ladoY, etiqueta) {
    fill(255);
    rectMode(CENTER);
    rect(x, y, ladoX, ladoY);
    textSize(24);
    fill(0);
    textAlign(CENTER, CENTER);
    text(etiqueta, x, y);
  }

  verificarClick(pantalla, historiaInteractiva) {
    if (pantalla === 0 && this.verificarBoton(historiaInteractiva.botonDosX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
      historiaInteractiva.cambiarPantalla(1);
    } else if ((pantalla === 14 || pantalla === 15 || pantalla === 16 || pantalla === 17) && this.verificarBoton(historiaInteractiva.botonDosX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
      historiaInteractiva.cambiarPantalla(0);
    } else if (pantalla > 0 && pantalla < 13 && this.verificarBoton(historiaInteractiva.botonTresX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
      historiaInteractiva.cambiarPantalla(pantalla + 1);
    } else if (pantalla === 13 && this.verificarBoton(historiaInteractiva.botonTresX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
      historiaInteractiva.cambiarPantalla(16);
    } else if ((pantalla <= 13 && pantalla !== 2 && pantalla !== 10 && pantalla !== 12) && this.verificarBoton(historiaInteractiva.botonUnoX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
      historiaInteractiva.cambiarPantalla(pantalla - 1);
    } else if (pantalla === 2 && this.verificarBoton(historiaInteractiva.botonUnoX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
      historiaInteractiva.cambiarPantalla(14);
    } else if (pantalla === 10 && this.verificarBoton(historiaInteractiva.botonUnoX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
      historiaInteractiva.cambiarPantalla(15);
      historiaInteractiva.activado = true;
    } else if (pantalla === 12 && this.verificarBoton(historiaInteractiva.botonTresX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
      historiaInteractiva.cambiarPantalla(13);
    } else if (pantalla === 17) {
      if (this.verificarBoton(historiaInteractiva.botonUnoX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
        historiaInteractiva.cambiarPantalla(1);
      } else if (this.verificarBoton(historiaInteractiva.botonDosX, historiaInteractiva.botonEnY, historiaInteractiva.ancho, historiaInteractiva.alto)) {
        historiaInteractiva.cambiarPantalla(13);
      }
    } else {
      historiaInteractiva.activado = false;
    }
  }

  verificarBoton(xBoton, y, ancho, alto) {
    return mouseX > xBoton - ancho / 2 && mouseX < xBoton + ancho / 2 && mouseY > y - alto / 2 && mouseY < y + alto / 2;
  }
}
