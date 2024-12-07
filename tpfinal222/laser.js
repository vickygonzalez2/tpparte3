class Laser {
  constructor() {
    this.x = random(0, width);
    this.y = 0;
    this.diam = 10;
    this.velocidad = 10;
  }

  mostrar() {
    fill(0, 50);
    rect(this.x, this.y, this.diam, this.diam * 3);
    this.y += this.velocidad;
  }
}
