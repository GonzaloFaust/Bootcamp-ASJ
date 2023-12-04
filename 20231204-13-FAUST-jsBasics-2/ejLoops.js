// Que ingrese un numero, y en base a dicho numero, sumatoria de todos los numeros HASTA ese numero.
// Mostrar promedio


// Extra: validar que lo ingresado sea un numero, en caso contrario, mostrar un alert avisando que el valor no es válido.

function promedio(){
    let ingresado=false;
    while(!ingresado){
        try{
            const num= +prompt("Ingresar numero:")
            if(isNaN(num)||num<1) throw new Error('numero no valido')
            let contador=0;
            let acum = 0;
            while(contador<=num){
                acum+=contador;
                contador++;
            }
            ingresado=true;
            return acum/num;
        }
        catch(e){
            alert(e.message)
            ingresado=false;
        }
    }
}

// Contador De Positivos

// En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
// Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó.

function contPositivos(){
    let cont=0;
    let numIngresado =0;
    while(numIngresado>=0){
        numIngresado= parseInt(prompt("ingresar un numero"))
        if(numIngresado>=0) cont++;
    }
    alert(`Positivos ingresados: ${cont}`)

}

