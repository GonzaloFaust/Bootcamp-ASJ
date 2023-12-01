function ejCantCaracteres(){
    const texto= prompt('ingrese un texto breve');
    return `El mensaje tiene ${texto.length} caracteres`
    
}

function ejCalcEdad(){
    try{
        const edad = +prompt("Ingrese su edad")
        if (isNaN(edad)) throw new Error();
        return `Has vivido al menos ${edad*365} días`
    }
    catch{
        return 'No se pudo leer la edad'
    }

}

function ejSumaValores(){
    try{
        let num1,num2,resultado;
        num1 = +prompt('Ingrese el primer numero: ');
        num2 = +prompt('Ingrese el segundo numero: ');
        if (isNaN(num1) || isNaN(num2)) throw new Error();
        resultado = num1 + num2;
        console.log('Resultado: ', resultado);
    }
    catch{
        console.log('No se pudo hacer la suma');
    }
}

function ejCalcAbastecimiento1(){
    let edad, edadMax, snack,precio, snackXDia;
    edad = +prompt('Edad:')
    edadMax = +prompt('Edad maxima:')
    snack = prompt('Snack favorito:')
    precio = +prompt('Precio:')
    snackXDia =+prompt('Cuantos vas a comer por dia?')
    let totalSnacks = ((edadMax-edad)*365)*snackXDia
    alert(`Necesitarás ${totalSnacks} ${snack} para que te alcancen hasta los ${edadMax} años.`)
    alert(`Y ademas te vas a gastar $${totalSnacks*precio}`)
}

function ejCalcAbastecimiento2(){
    let diasViaje, presMax, comida; 
    diasViaje = +prompt('Dias de viaje')
    presMax = +prompt('Presupuesto maximo')
    comida = +prompt('cantidad de comidas')
    alert(`Podés gastar $${presMax/comida} en cada comida para que te alcance la plata durante los ${diasViaje} días de viaje`)
}

function ejES6_1(){
    let nombre = "Gabriela"
    let profesion = "programadora"
    return `${nombre} es ${profesion}`
}


function ejES6_2(){
    let total;
    try{
        const precio = +prompt('ingrese precio del articulo');
        const cantidad = +prompt('ingrese cantidad del articulo');
        console.log(precio, cantidad)
        if (isNaN(precio) || isNaN(cantidad)) throw new Error();
        total = `Monto total: $${precio*cantidad}`;
    }
    catch(e){
        total= 'Hubo un error al ingresar precio o cantidad';
    }
    finally{
        return total;
    }
}