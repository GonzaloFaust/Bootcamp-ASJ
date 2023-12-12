const fact = document.getElementById("fact")
const actualizar = document.getElementById("actualizar")

function getFact(){
    return fetch("https://api.chucknorris.io/jokes/random")
    .then(res=> res.json())
    .then(resp=> fact.innerText = resp.value)
}


getFact();