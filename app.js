
const pantalla = document.getElementById("pantalla");
let numeros;
let cantNumeros=0;

console.log(pantalla);


function agregarNumero(idBoton) {
    pantalla.innerHTML+=idBoton;
    numeros[cantNumeros]= numeros[cantNumeros]+""+idBoton;
    console.log(numeros[cantNumeros]);
}

function agregarOperador(idOperador){
    pantalla.innerHTML+=idOperador;
    cantNumeros++;
}