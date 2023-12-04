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

function piramide(){
    let escalones = +prompt("numero escalones: ")
    //--------------------------
    // for( let i=1;i<= escalones*2-1; i++){
    //     let linea =''
    //     for(let j=1;j<= escalones - ( i % escalones );j++){

    //         linea+="*";
    //     }
    //     console.log(linea)
    // }

    let piramide=""
    for(let i = 0; i < escalones; i++){
        for (let j = -1; j < i; j++){
            piramide+="*"
        }
        piramide+="\n"
    }
    
    for(let i = escalones; i > 0; i--){
        for(let j = i-1; j>0; j--){
            piramide += "*"
        }
        piramide+="\n"
    }
    console.log(piramide)
}

function factorial(){
    let numero = +prompt ("numero: ")
    let res=1;
    if (numero==0){
        res=1;
    }
    else{

        for(let i=1;i<=numero; i++){
            res*=i;
        }
    }
    console.log(res)
}
