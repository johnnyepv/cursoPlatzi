var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39,
  A: 65,
  combi1: 103 
};
var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var x = aleatorio(0, 420);
var y = aleatorio(0, 420);
var mov = 5;
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load",cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

document.addEventListener("keyup",moverVaca);
function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}
function cargarVaca(){
  vaca.cargaOK = true;
}
function cargarPollo(){
  pollo.cargaOK = true;
}
function cargarCerdo(){
  cerdo.cargaOK = true;
}
var nAnimal;
var eAnimal;
nAnimal = prompt("Ingresa el nombre del animal que deseas vaca\n1 = Vaca \n 2 = Pollo \n 3 = Cerdo");
parseInt(nAnimal);
if (nAnimal == 1) {
  eAnimal = vaca.objeto;
}
else if (nAnimal == 2) {
  eAnimal = pollo.objeto;
}
else if (nAnimal == 3) {
  eAnimal = cerdo.objeto;
}else{
  alert("Ingreso un nombre de animal incorrecto");
  location.reload();
}
function dibujar(){
    papel.drawImage(fondo.objeto, 0,0);
}
function dibujarVaca() {
      papel.drawImage(eAnimal, x,y);
}
function moverVaca(evento){
  
  switch (evento.keyCode) {
    case teclas.UP:
      y = y - mov;
      dibujar();
      dibujarVaca();
    break;
    case teclas.DOWN:
    y = y + mov;
    dibujar();
    dibujarVaca();
    break;
    case teclas.RIGTH:
    x = x + mov;
    dibujar();
    dibujarVaca();
    break;
    case teclas.LEFT:
    x = x - mov;
    dibujar();
    dibujarVaca();
    break;
    default:
  }
  console.log(evento);
}
function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random()*  (max - min + 1))+ min;
  return resultado;
}