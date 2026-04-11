let canvas = document.getElementById("areaJuego"); //llamar id de canvas en html
let ctx = canvas.getContext("2d");

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}


function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.clientWidth,ALTURA_SUELO);

}

function dibujarPersonaje(){
    ctx.fillStyle = "yellow";
    ctx.fillRect(canvas.width/2, canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE), ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

