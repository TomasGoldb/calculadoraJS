class Calculadora{
    static Sumar = (a,b)=> parseFloat(a)+parseFloat(b);
    static Restar =(a,b) => parseFloat(a)-parseFloat(b);
    static Multiplicar = (a,b)=> parseFloat(a)*parseFloat(b);
    static Dividir = (a,b)=> parseFloat(a)/parseFloat(b);
}



const pantalla = document.getElementById("pantalla");
const igualBtn = document.getElementById("igual");
let numeros=[""], operadores=[], subtotal=[], operadoresTerminos=[];
let cantNumeros=0, cantOperadores=0, total=0, cantSubTotal=0;



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
    for(let i=0;i<cantOperadores;i++){
        if(subtotal[cantSubTotal]==undefined){
            subtotal.push(numeros[i]);
        }
        switch(operadores[i]){
            case '+':
                cantSubTotal++;
                operadoresTerminos.push('+');
                break;
            case '-':
                operadoresTerminos.push('-');
                cantSubTotal++;
                break;
            case '/':
                subtotal[cantSubTotal]=Calculadora.Dividir(subtotal[cantSubTotal],numeros[i+1]);
                break;
            case '*':
                subtotal[cantSubTotal]=Calculadora.Multiplicar(subtotal[cantSubTotal],numeros[i+1]);
                break;
        }
    }
    console.log(operadoresTerminos);
    console.log(subtotal);
    total=subtotal[0];
    for(let i=0;i<operadoresTerminos.length;i++){
        switch(operadoresTerminos[i]){
            case '+':
                total=Calculadora.Sumar(total,subtotal[i+1]);
                break;
            case '-':
                total=Calculadora.Restar(total,subtotal[i+1]);
                break;
        }
        console.log(total);
    }

    pantalla.innerHTML+=" = "+total;
});


