
function checkColor(color, square){
    let clickedColor = color
    if(clickedColor==pickedColor){
        message.innerText = "¡Correcto!"
        h1.style.backgroundColor = pickedColor
        changeColor(pickedColor)
        btnReset.innerText = "Play Again?"
    }
    else{
        message.innerText = "Intentelo nuevamente"
        square.style.backgroundColor = body.style.backgroundColor
    }

}

function changeColor(pickedColor){
    squares.forEach(s=>s.style.backgroundColor = pickedColor)
}

function generateRandomColors(num){
    const colores = [];
    for (let index = 0; index < num; index++) {
        const color = randomColor();
        colores.push(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)
    }
    return colores;
}

function randomColor(){
    let colors= []
    for (let index = 0; index < 3; index++) {
        colors.push(Math.round(Math.random()*255))
    }
    return colors;
}

function setEasy(){
    btnHard.classList.remove("selected")
    btnEasy.classList.add("selected")
    dificultad = 3
    reset()
}

function setHard(){
    btnHard.classList.add("selected")
    btnEasy.classList.remove("selected")
    dificultad = 6
    reset()
}

function reset(){
    colors = generateRandomColors(dificultad);
    setColors();
    pickedColor =  colors[pickColor()]
    colorDisplay.innerText= pickedColor;
    btnReset.innerText = "Nuevos Colores"
    message.innerText = ""
    h1.style.backgroundColor = "#232323"
}

function pickColor(){
    const index= Math.round(Math.random()*(dificultad-1));
    console.log("el indice que salio es :", index)
    return index;
}

function setColors(){
    for (let index = 0; index < squares.length; index++) {
        let square = squares[index] 
        square.style.backgroundColor = colors[index]
        square.addEventListener("click", ()=> checkColor(square.style.backgroundColor, square))
        square.classList.remove("ocultar")
    }
    squares.forEach((s,i)=> i >= dificultad && s.classList.add("ocultar")) 
}

let pickedColor;
let dificultad = 6;
let colors =[];

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const body = document.getElementsByTagName("body")[0]
const btnReset = document.getElementById("reset")
const message = document.getElementById("message")
const h1 = document.getElementById("h1")
const btnHard = document.getElementById("hard")
const btnEasy = document.getElementById("easy")

btnReset.addEventListener("click", reset)
btnEasy.addEventListener("click", setEasy )
btnHard.addEventListener("click", setHard )


reset()