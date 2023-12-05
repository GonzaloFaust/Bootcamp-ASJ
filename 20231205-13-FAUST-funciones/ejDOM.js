const body = document.getElementsByTagName("body")[0];
const headerNombre = document.createElement("h1")
const headerApellido = document.createElement("h2")
headerApellido.style.color = 'red'
body.appendChild(headerNombre)
body.appendChild(headerApellido)


const boton = document.getElementById("btn")
boton.addEventListener("click", ()=>{
    const inputs= document.getElementsByTagName("input")
    console.log(inputs)
    headerNombre.innerText = inputs[0].value;

    headerApellido.innerText = inputs[1].value;
})