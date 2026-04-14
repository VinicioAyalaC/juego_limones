let canvas = document.getElementById("areaJuego"); //llamar id de canvas en html
let ctx = canvas.getContext("2d");

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;

const ANCHO_LIMON=20;
const ALTURA_LIMON=20;

let personajeX= canvas.width/2;
let personajeY= canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);

let limonX=canvas.width/2;
let limonY=0;

let puntaje=0;
let vidas=3;
let velocidadCaida=200;

let intervalo;

function iniciar(){
    if (intervalo !== null){ clearInterval(intervalo);}
    intervalo = setInterval(bajarLimon, velocidadCaida);  // ejecuta una funcion en intervalos de mili segundos
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    aparecerLimon();
}


function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.clientWidth,ALTURA_SUELO);

}

function dibujarPersonaje(){
    ctx.fillStyle = "yellow";
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX= personajeX-10;
    actualizarPantalla();   
}

function moverDerecha(){
    personajeX= personajeX+10;
    actualizarPantalla();    
}



function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function dibujarLimon(){
    ctx.fillStyle="green";
    ctx.fillRect(limonX, limonY, ANCHO_LIMON, ALTURA_LIMON);   
}


function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}



function detectarAtrapado(){
    if (limonX+ANCHO_LIMON > personajeX  &&
        limonX < personajeX+ANCHO_PERSONAJE &&
        limonY+ALTURA_LIMON > personajeY &&
        limonY < personajeY+ALTURA_PERSONAJE){
        
        puntaje=puntaje+1;
        mostrarEnSpan("txtPuntaje", puntaje);
        aparecerLimon();

        if(puntaje===3){ actualizarVelocidad(150);  }
        if(puntaje===6){ actualizarVelocidad(100);  }
        
        if(puntaje>=10){ 
            alert("...GANADOR...");  
            clearInterval(intervalo);
        }
    }
}


function detectarPiso(){
    if(limonY+ALTURA_LIMON == canvas.height-ALTURA_SUELO){
        
        vidas=vidas-1;
        mostrarEnSpan("txtVidas", vidas);
        aparecerLimon();

        if(vidas<=0){
            alert("GAME OVER");
            clearInterval(intervalo);
        }
    }
}



function aparecerLimon(){
    limonX=generarAleatorio(0, canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}


function actualizarVelocidad(nuevaVelocidad){
    velocidadCaida = nuevaVelocidad;
    clearInterval(intervalo);
    intervalo = setInterval(bajarLimon, velocidadCaida);
}



function reiniciar(){
    vidas=3;
    mostrarEnSpan("txtVidas", vidas);

    puntaje=0;
    mostrarEnSpan("txtPuntaje", puntaje);

    velocidadCaida=200;
    personajeX = canvas.width/2;

    iniciar();

}