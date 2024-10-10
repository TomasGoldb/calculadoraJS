class Calculadora{
    static Sumar = (a,b)=> parseFloat(a)+parseFloat(b);
    static Restar =(a,b) => parseFloat(a)-parseFloat(b);
    static Multiplicar = (a,b)=> parseFloat(a)*parseFloat(b);
    static Dividir = (a,b)=> parseFloat(a)/parseFloat(b);
}



const pantalla = document.getElementById("pantalla");
const igualBtn = document.getElementById("igual");
let numeros=[""], operadores=[];
let cantNumeros=0, cantOperadores=0, iotal=0;



function agregarNumero(idBoton) {
    pantalla.innerHTML+=idBoton;
    if(numeros[cantNumeros]==undefined){
        numeros.push("");
    }
    numeros[cantNumeros]= `${numeros[cantNumeros]}${idBoton}`;
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
    for(let i=0;i<cantOperadores;i++){
        console.log("jiji");
        switch(operadores[i]){
            case '+':
                
                total=Calculadora.Sumar(total,numeros[i+1]);
                break;
            case '-':
                total=Calculadora.Restar(total,numeros[i+1]);
                break;
            case '/':
                total=Calculadora.Dividir(total,numeros[i+1]);
                break;
            case '*':
                total=Calculadora.Multiplicar(total,numeros[i+1]);
                break;
        }
    }
    pantalla.innerHTML+=" = "+total;
});


