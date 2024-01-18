package ejerciciosObjetos;

import java.util.ArrayList;
import java.util.Scanner;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		boolean salir = false;
		while (!salir) {
			System.out.println("Ejercicico. \n1. Cuenta  \n2. Password  \n3. Personas  \n 4. Salir");
			int opcion = scan.nextInt();
			switch (opcion) {
			case 1:
				EjercicioCuenta();
				break;
			case 2:
				EjercicioPassword(scan);
				break;
			case 3:
				EjercicioPersonas(scan);
				break;
			case 4:
				System.out.println("Hasta lueguito");
				salir = true;
				break;
			default:
				System.out.println("Probemos de nuevo");
				break;
			}
		}
		scan.close();

	}

	private static void EjercicioCuenta() {

	}

	private static void EjercicioPassword(Scanner scan) {
		Password pass = new Password();
		;
		ArrayList<String> listaContrasenias = new ArrayList<String>();
		int opcion = 3;
		do {
			System.out.println("1. Generar contraseñas \n2. Ver contraseñas \n3. Volver");
			opcion = scan.nextInt();

			switch (opcion) {
			case 1:
				listaContrasenias.add(pass.generarPassword());
				System.out.println("----------------Contraseña generada----------------");
				break;
			case 2:
				for (String contrasenia : listaContrasenias) {
					System.out.println(contrasenia + ":" + (pass.esFuerte() ? "FUERTE" : "DEBIL"));
				}
				break;
			case 3:
				System.out.println("Saliendo del programa. ¡Hasta luego!");
				break;
			default:
				System.out.println("Probemos de nuevo");
				break;
			}
		} while (opcion != 3);
	}

	private static void EjercicioPersonas(Scanner scan) {
		ArrayList<Persona> personas = new ArrayList<Persona>();
		System.out.println("Ingrese en este orden: nombre, edad, sexo(H o M), peso en kg y altura en m");
		String nombre1 = scan.next();
		int edad1 = scan.nextInt();
		char sexo1 = scan.next("[A-Z]").toCharArray()[0];
		double peso1 = scan.nextDouble();
		double altura1 = scan.nextDouble();
		personas.add(new Persona(nombre1,edad1,sexo1,peso1,altura1));
		
		System.out.println("Ingrese en este orden: nombre, edad, sexo(H o M)");
		String nombre2 = scan.next();
		int edad2 = scan.nextInt();
		char sexo2 = scan.next("[A-Z]").toCharArray()[0];
		personas.add(new Persona(nombre2,edad2,sexo2));
		personas.add(new Persona());
		
		System.out.println("Estan en su peso ideal?");
		for(Persona persona:personas) {
			String resultado="";
			switch(persona.calcularIMC()) {
			case 0:
				resultado= "Si";
				break;
			case 1:
				resultado="por encima";
				break;
			case -1:
				resultado= "por debajo";
			}
					
			System.out.println(persona.getNombre()+": "+resultado);
		}
		
		System.out.println("Son mayores de edad?");
		for(Persona persona:personas) {
			System.out.println(persona.getNombre()+": "+(persona.esMayorDeEdad()?"Si":"No"));
		}
		
		
		System.out.println("Info de cada Persona:");
		for(Persona persona:personas) {
			System.out.println(persona.toString());
		}
		
	}
}
