//FizzBuzz

// En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
// teniendo en cuenta estos criterios:

// Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
// Si es múltiplo de 5, deberá imprimir "Buzz".
// Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".

function fizzBuzz(){
    let cont =0;
    while(cont<=100){
        let res='';
        if(cont%3==0 && cont>0)res+='Fizz'
        if(cont%5==0 && cont>0)res+='Buzz'
        if(res=='')res = cont
        console.log(res)
        cont++;
    }
}



//ejercicio mozo
// Simular un sistema de bar.
// El usuario puede elegir productos en un menú al mozo.
// El usuario puede pedir la cuenta. Preguntar si quiere dejar propina o no. (Sumar en el total).
// Simular que el sistema tiene un mozo. El mozo tendrá que saludar al inicio y al final, tener la opción de contar chistes, preguntarle cómo está el día, etc

// 1- usuario, en un bar y puede pedir cosas!
// ¿Qué quiere hacer?
// Opciones- Saludar, pedir, carta o producto "Gaseosa, medialuna, café, pizza"
// Mas opciones-  Pedir que cuente chiste, pedir de nuevo otra cosas,
// traer la cuenta, propina.


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
                }
                break;
            case 2:
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
                    default: 
                    alert("opcion incorrecta")
                }
            case 3:
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
                    }
                }
                else{
                    alert("Usted todavia no consumio nada")
                }
                
                break;
            case 0:
                if(cuenta >0 && !pagado) {
                    alert("No puede irse sin pagar! 🐀🐀🐀")
                    opcion=null;
                }   
        }
    }
    while(opcion !=0)
    alert("Que tenga un buen dia!")
}