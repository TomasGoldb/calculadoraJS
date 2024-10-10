class Calculadora{
    static Sumar = (a,b)=> a+b;
    static Restar =(a,b) => a-b;
    static Multiplicar = (a,b)=> a*b;
    static Dividir = (a,b)=> a/b;
}



const pantalla = document.getElementById("pantalla");
const igualBtn = document.getElementById("igual");
let numeros=[], operadores=[];
let cantNumeros=0, cantOperadores=0, iotal=0;



function agregarNumero(idBoton) {
    pantalla.innerHTML+=idBoton;
    numeros[cantNumeros]= numeros[cantNumeros]+""+idBoton;
    console.log(numeros);
}

function agregarOperador(idOperador){
    pantalla.innerHTML+=idOperador;
    operadores[cantOperadores]=idOperador;
    cantNumeros++;
    cantOperadores++;
}
igualBtn.addEventListener('click', function(){
    total=numeros[0];
    for(let i=1;i<cantOperadores;i++){
        switch(operadores[i-1]){
            case '+':
                total=Calculadora.Sumar(total,numeros[i]);
                break;
            case '-':
                total=Calculadora.Restar(total,numeros[i]);
                break;
            case '/':
                total=Calculadora.Dividir(total,numeros[i]);
                break;
            case '*':
                total=Calculadora.Multiplicar(total,numeros[i]);
                break;
        }
    }
    pantalla.innerHTML="= "+total;
});


