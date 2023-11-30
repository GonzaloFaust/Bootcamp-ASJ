function ejercicio1(){

    function esPar(num){
        //return num % 2 == 0;       hubiese usado esta linea
        //Ó
        if(num % 2 == 0) return true;//no me gusta porque queda redundante pero el ejercicio pedia usar if else
        else return false;
    }

    let numeroIngresado =null; //inicializo en un valor que voy a usar para iniciar una iteracion no controlada
    while(numeroIngresado==null){//mientras no se obtenga una respuesta, se seguira ejecutando el ciclo

        try{
            numeroIngresado = +prompt('Ingresar un numero: ');
            if(isNaN(numeroIngresado)) {
                numeroIngresado = null; //seteo de valor para continuar el ciclo en caso de error
                throw new Error('debe ingresar un numero valido')
            }
            alert(`El numero ${numeroIngresado} es ${esPar(numeroIngresado)?'par':'impar'}`)//la respuesta se genera con un ternario
        }
        catch(exception){
            alert(`Error al ingresar numero: ${exception.message}`)    
        }
    }
}

function ejercicio2(){
    let alumnos = [
        {
          nombre: "Mariano Damian",
          apellido: "Hernandez",
          notas: [8, 7, 9, 10, 6],
        },
        {
          nombre: "Ramiro",
          apellido: "Diaz",
          notas: [1, 3, 8, 2, 1],
        },
        {
          nombre: "Ana",
          apellido: "Armella",
          notas: [5, 7, 9, 4, 2],
        },
        {
          nombre: "Romina",
          apellido: "Almeda",
          notas: [10, 6, 7, 5, 9],
        },
        {
          nombre: "Denis",
          apellido: "Tolaba",
          notas: [10, 10, 9, 9, 10],
        },
        {
          nombre: "Hugo",
          apellido: "Castellano",
          notas: [2, 3, 3, 6, 1],
        },
        {
          nombre: "Analia Daiana",
          apellido: "Fonseca",
          notas: [4, 3, 4, 5, 2],
        },
        {
          nombre: "Francisco Daniel",
          apellido: "Samir",
          notas: [5, 5, 6, 4, 2],
        },
      ];

      function promedio(arr, estado){ //se recibe el array y el estado
        return arr.map(alumno => { //map itera sobre el array y devuelve un array nuevo
            const a ={} //inicializa un objeto vacio
            a.nombreCompleto = `${alumno.nombre} ${alumno.apellido} `
            a.promedio = alumno.notas.reduce((acc,cur)=> acc+cur,0) /alumno.notas.length;
            if(a.promedio >= 6) a.estado = estado
            else a.estado = 'desaprobado'
            return a;
        }).filter(alumno =>alumno.estado == estado)//filtra por el estado que sea igual al ingresado
      }
      
      console.log(promedio(alumnos,'aprobado'));

}