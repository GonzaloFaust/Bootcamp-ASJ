// Ejercicio JS:

// Replicar todo el texto ingresado por el usuario (mediante un input), y mostrarlo debajo (puede ser en un div o H1/H2), pero obviando las vocales. En lugar de las vocales, mostrar un guión bajo "_".
// Ejemplo: si el usuario ingresa "Hola Mundo" el resultado será "H_l_a Mnd"

const borrar= document.getElementById("borrar")
const input = document.getElementById("ingreso")
const resultado = document.getElementById("resultado")

const keycodes=["a","e","i","o","u","A","E","I","O","U"]
const ignoreKeys =["CapsLock","Meta","Alt","Control","AltGraph","Dead","ArrowLeft","ArrowRight","ArrowDown","ArrowUp"]
const replaceChar= "_"

input.addEventListener("keydown",(e)=>{
    // e.preventDefault()
    console.log(e)
    if (e.location !== 0 || ignoreKeys.includes(e.key)) return;
    if(e.key==="Backspace"){
        resultado.textContent = resultado.innerText.slice(0,-1) ;
        return;
    }
    if(keycodes.includes(e.key))
        resultado.textContent += replaceChar
    else{
        resultado.textContent+= e.key;
    } 
})

borrar.addEventListener("click",()=>{
    resultado.textContent = "";
    input.value="";
    input.focus()
})
