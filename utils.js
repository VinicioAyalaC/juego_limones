function generarAleatorio( min,max ){
    let random = Math.random(); // 0 - 1
    // ejemplo: max es 600, minimo es 5
    let numero = random*(max-min);  // rango entre 0 y max
    let numeroEntero = Math.ceil(numero);
    //  ejemplo: 0
    numeroEntero=numeroEntero+min; // 5 - 600
    return numeroEntero;
}


function mostrarEnSpan(idSpan,valor){
let componente=document.getElementById(idSpan);
        componente.textContent=valor;  //modifica el valor del spam en html
}        