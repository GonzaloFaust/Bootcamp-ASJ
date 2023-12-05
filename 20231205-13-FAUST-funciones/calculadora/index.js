function suma(a,b){
    return a+b
}

function resta(a,b){
    return a-b
}

function multi(a,b){
    return a*b
}

function divi(a,b){
    if(b==0) return "MATH Error"
    return a/b
}

function igual(funcion, a,b){
    return funcion(a,b)
}
const pantalla = document.getElementById("pantalla")
function limpiarPantalla(){
    pantalla.innerText=""
}

function escribirPantalla(text){
    pantalla.innerText+= text
}

function mostrarResultado(){
    segundoOperando= + pantalla.innerText
    limpiarPantalla();
    escribirPantalla(igual(funcion,primerOperando, segundoOperando))
}

function asignarOperacion(f){
    primerOperando = +pantalla.innerText;
    limpiarPantalla();
    funcion=f;
}

let primerOperando =0 , segundoOperando=0, funcion=null

const botones = document.getElementsByClassName("boton")
for(let i=0;i<botones.length;i++){
    botones[i].addEventListener("click",()=>{
        switch(botones[i].id){
            case "mas":
                asignarOperacion(suma);
                break;
            case "menos":
                asignarOperacion(resta);
                break;
            case "multi":
                asignarOperacion(multi);
                break;
            case "divi":
                asignarOperacion(divi);
                break;
            case "igual":
                mostrarResultado();
                break;
            default:
                escribirPantalla(botones[i].innerText)
                break;
        }
    });
}

