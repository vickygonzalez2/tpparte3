class Bill {
 constructor() {
    this.objetos = [];
    this.laseres = [];
  }

  lanzarObjetos() {
    if (frameCount % 60 === 0) { 
      this.objetos.push(new Objeto());
    }
  }

  lanzarLaseres() {
    if (frameCount % 120 === 0) {
      this.laseres.push(new Laser());
    }
  }

removerObjeto(objeto) {
  let nuevoArray = [];
  for (let i = 0; i < this.objetos.length; i++) {
    if (this.objetos[i] !== objeto) { 
      nuevoArray.push(this.objetos[i]);
    }
  }
  this.objetos = nuevoArray;
}

removerLaser(laser) {
  let nuevoArray = []; 
  for (let i = 0; i < this.laseres.length; i++) {
    if (this.laseres[i] !== laser) { 
      nuevoArray.push(this.laseres[i]);
    }
  }
}

  mostrar() {
    for (let obj of this.objetos) obj.mostrar();
    for (let laser of this.laseres) laser.mostrar();
  }
}
