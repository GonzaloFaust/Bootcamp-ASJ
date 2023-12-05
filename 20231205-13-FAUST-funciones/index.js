// modularizar mozo

function verMenu(cuenta,pagado){
    let opcionMenu= +prompt(
        "1.Medialunas🥐\n2.Cafecito☕\n3.Leche\n4.Jugo de Naranja🍊\n5.Birrita🍺\n")
        switch(opcionMenu){
            case 1:
                cuenta+=5;
                pagado = false;
                break;
            case 2:
                cuenta+=5;
                pagado = false;
                break;
            case 3:
                cuenta+=3;
                pagado = false;
                break;7
            case 4:
                cuenta+=10;
                pagado = false;
                break;
            case 5:
                cuenta+=12.5;
                pagado = false;
                break;
            default:
                alert("opcion incorrecta")
                break;
        }
        return [pagado,cuenta]
    }
function contarChistes(){
    let opcionChiste= +prompt("Cual queres escuchar? \n1.el avestruz \n2.la serpiente\n3.nada, dejá")
                switch(opcionChiste){
                    case 1:
                        alert("Habia una vez...truz.")
                        break;
                    case 2:
                        alert("Mamá, ¡me acaba de picar una serpiente!\n  -¿Cobra?\n  ​-¡No!, gratis.");
                        break;
                    case 3: 
                        alert("...🧐")
                        break;
                    default: 
                    alert("opcion incorrecta")
                    break;
                }
}
function pagarCuenta(cuenta, pagado){
    if(cuenta>0) {
        let opcionPago = +prompt(`El total es $${cuenta}, desea agregar propina?\n1.si\n2.no`)
        switch (opcionPago){
            case 1:
                alert(`El total sera: $${cuenta*1.1}`)
                pagado=true;
                break;
            case 2:
                alert(`El total sera: $${cuenta} 🐭`)
                pagado=true;
                break;
            default:
                alert("opcion invalida")
                break;
        }
    }
    else{
        alert("Usted todavia no consumio nada")
    }
    return pagado;
}
function mozo(){
    let yaSaludo=false;
    let opcion=null;
    let cuenta=0;
    let pagado=false;
    do{
        opcion= parseInt(prompt(`${yaSaludo?"":"Buenos dias! "}En que puedo servirle?\n
        1.Menu\n
        2.Contame un chiste🃏\n
        3.Me traes la cuenta?💸\n
        0.Salir
        `));
        yaSaludo =true;
        switch (opcion){
            case 1:
                [pagado,cuenta] = verMenu(cuenta,pagado);
                break;
            case 2:
                contarChistes();
                break;
            case 3:
                pagado=pagarCuenta(cuenta,pagado)
                break;
            case 0:
                if(cuenta >0 && !pagado) {
                    alert("No puede irse sin pagar! 🐀🐀🐀")
                    opcion=null;
                }   
                break;
        }
    }
    while(opcion !=0)
    alert("Que tenga un buen dia!")
}

// Fibonacci

// Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
// Ej: el usuario ingresa el 8, mostrar:
// 0 1 1 2 3 5 8 13 21 34

function fibo(num){
    const arr=[0,1]
    for(let i=0; i<num;i++){
        arr.push(+arr.slice(-1) + +arr.slice(-2,-1))
    }
    return arr;
}


