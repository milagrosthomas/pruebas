class Claseprincipal {
  constructor() {
    this.fondo = loadImage("data/oceano.jpg");
    this.img = loadImage("data/monstruo.jpg");
    this.estado = "menu";
    this.jue = new Juego();
    this.tim = new Tiempo();
    this.bx3 = 525;
    this.by = 330;
    this.t = 0;
    this.tiempoInicio = millis();
  }

  display() {
    if (this.estado === "menu") {
      background(180, 66, 200);
      fill(22, 2, 1);
      ellipse(this.bx3, this.by, 120, 100);
      textSize(25);
      fill(255, 255, 255);
      text("INICIAR", 480, 340);
      textSize(12);
      fill(255);
      textSize(150);
      text("PONG", 80, height);
    } else if (this.estado === "inicio") {
      image(this.fondo, 0, 0, 600, 400);
      this.jue.display();
      this.jue.teclado();
      this.tim.display();
      this.t = this.tim.time1();

      if (this.tiempoInicio + 60000 <= millis()) {
        this.estado = "perdieron";
        background(0, 0, 100);
        textSize(50);
        text("¡PERDIERON!", 150, height / 2);

        if (this.jue.cant >= 5) {
          this.estado = "ganaron";
          background(0, 0, 100);
          textSize(50);
          text("¡GANARON!", 150, height / 2);
        }
      }
    }
  }

  mouse() {
    if (this.estado == "menu") {
      if (dist(this.bx3, this.by, mouseX, mouseY) < 55) {
        this.estado = "inicio";
      }
    } else {
      if (this.estado == "perdieron" || this.estado == "ganaron") {
        this.estado = "menu";
      }
    }
  }
}
