class Tiempo {
  constructor() {
    this.act = millis();
    this.time = 0;
  }

  display() {
    this.time = (millis() - this.act) / 1000;
    text(this.time, 579, 30);
  }

  time1() {
    return this.time;
  }
}
