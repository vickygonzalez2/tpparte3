class Dipper {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.diam = 30;
    this.velocidad = 5;
  }
  
  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad; 
    }
       if (this.x < this.diam / 2) {
      this.x = this.diam / 2; 
    }
    if (this.x > width - this.diam / 2) {
      this.x = width - this.diam / 2;
    }
  }
  tocaCirculo(obj) {
    let distancia = dist(this.x, this.y, obj.x, obj.y);

    let sumaDeRadios = ((this.diam / 2) + (obj.diam / 2));
    return distancia < sumaDeRadios;  
  }
  
  tocaRectangulo(rect) {
    let radioCirculo = this.diam / 2;
  
    let ladoCuadrado = rect.diam;
  
    let closestX = Math.max(rect.x, Math.min(this.x, rect.x + ladoCuadrado));
    let closestY = Math.max(rect.y, Math.min(this.y, rect.y + ladoCuadrado));
  
    let distancia = dist(this.x, this.y, closestX, closestY);
  
    return distancia < radioCirculo;
  }

  
  mostrar() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.diam);
  }
}
