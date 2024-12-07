class Objeto {
  constructor() {
    this.x = random(0, width);
    this.y = 0;
    this.diam = 20;
    this.velocidad = 5;
  }

  mostrar() {
    fill(255, 111, 39);
    ellipse(this.x, this.y, this.diam);
    this.y += this.velocidad;
  }
}
