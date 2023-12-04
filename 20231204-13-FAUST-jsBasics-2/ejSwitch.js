// Par o Impar
// Pedile al usuario que ingrese un número para que tu programa evalúe si es par o impar. Usá la estructura condicional if...else.

function parImpar(){
    let num= +prompt("ingresar un numero:")
    const parImpar = num%2
    switch (parImpar){
        case 0:
            alert("par")
            break;
        case 1:
            alert("impar")
            break;
        default:
            alert("impar")
            break;
    }
}


// Ejercicio 1
// Usando la estructura switch(), creá un programa en el que, si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.
// En caso de que la palabra sea distinta a la esperada, mostrale un mensaje que le informe que la palabra ingresada es incorrecta.

function traductor(){

    let res = prompt('Ingrese una palabra para traducirla: ("casa", "perro", "pelota", "árbol" o "genio")')
    
    switch(res){
        case "casa":
            alert("house")
            break;
        case "perro":
            alert("dog")
            break;
        case "pelota":
            alert("ball")
            break;
        case "arbol":
            alert("tree")
            break;  
        case "genio":
            alert("genius")
            break;
        default:  
            alert("palabra ingresada incorrecta")
            break;
    }
}

// Ejercicio 2
// Usando la estructura switch(), pedile al usuario que valore la película que acaba de ver en:

// Muy Mala.
// Mala.
// Mediocre.
// Buena.
// Muy buena.
// Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.

// Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

// En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".

// Cuando el usuario haya valorado la película, agradecele su visita.

function puntuacion(){
    let punt = +prompt("valorá la pelicula que acabas de ver del 1 al 5:")
    switch(punt){
        case 1:
            alert("calificaste la pelicula como Muy Mala. Lo lamentamos mucho.")
            break;
        case 2:
            alert("calificaste la pelicula como Mala. Lo lamentamos mucho.")
            break;
        case 3:
            alert("calificaste la pelicula como Mediocre. Que podriamos mejorar?")
            break;
        case 4:
            alert("calificaste la pelicula como Buena. Gracias!.")
            break;
        case 5:
            alert("calificaste la pelicula como Muy Buena. Nos alegra que la hays disfrutado.")
            break;
        default:
            alert("Ingresaste un valor invalido")
    }
    if(punt>0&&punt<=5) alert("Gracias por tu visita!")
}