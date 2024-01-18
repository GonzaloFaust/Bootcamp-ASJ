package ejercicio6;

import java.util.Scanner;

public class ejercicio6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] arr = new int[4][4];
		boolean generada = false;
		boolean salir=false;
		Scanner scan = new Scanner(System.in);
		while(!salir) {
		
		System.out.println(
				"Elija una de las opciones:\n 1. LLenar Matriz \n 2. Sumar fila \n 3. Sumar columna \n 4. Sumar diagonal principal \n 5. Sumar diagonal inversa \n 6. media de los valores de la matriz \n 7. Salir");
		int opcion = scan.nextInt();
		
		switch (opcion) {
			case 1:
				arr = GenerarMatriz();
				ImprimirMatriz(arr);
				generada = true;
				break;
			case 2:
				if (!generada)
					System.out.println("Primero se debe generar la matriz");
				else {
					System.out.println("Que Fila");
					int op = scan.nextInt();
					if(op>arr.length)System.out.println("Numero de fila invalido");
					else {
						
						int acc = 0;
						for (int i = 0; i < arr[op-1].length; i++) {
							acc += arr[op-1][i];
						}
						System.out.println("La suma de la fila "+op+" es "+ acc);
					}
				}
				break;
			case 3:
				if (!generada)
					System.out.println("Primero se debe generar la matriz");
				else {
					System.out.println("Que Columna?");
					int op = scan.nextInt();
					if(op>arr.length)System.out.println("Numero de columna invalido");
					else {
						int acc = 0;
						for (int i = 0; i < arr.length; i++) {
							acc += arr[i][op-1];
						}
						System.out.println("La suma de la columna "+op+" es "+ acc);
					}
				}
				break;
			case 4:
				if (!generada)
					System.out.println("Primero se debe generar la matriz");
				else {
					int acc=0;
					for (int i = 0; i < arr.length; i++) {
						acc += arr[i][i];
					}
					System.out.println("La suma de la diagonal principal es "+ acc);
				}
				break;
			case 5:
				if (!generada)
					System.out.println("Primero se debe generar la matriz");
				else {
					int acc=0;
					for (int i = 0; i < arr.length; i++) {
						acc += arr[arr.length-1-i][i];
					}
					System.out.println("La suma de la diagonal inversa es "+ acc);
				}
				break;
			case 6:
				if (!generada)
					System.out.println("Primero se debe generar la matriz");
				else {
				}
				break;
			case 7:
				salir=true;
				System.out.println("Hasta lueguito");
				break;
			default:
				System.out.println("Opcion incorrecta, probemos de nuevo");
				break;
			}
		scan.nextLine();
		}
		scan.close();
	}

	static void ImprimirMatriz(int[][] arr) {
		for (int i = 0; i < Math.pow(arr.length, 2); i++) {
			System.out.print(arr[(int) Math.floor(i / arr[0].length)][i % arr[0].length] + "\t"
					+ (i % arr.length == arr.length - 1 ? "\n" : ""));
		}
	}

	static int[][] GenerarMatriz() {
		int[][] arr = new int[4][4];
		int num = 1;
		for (int i = 0; i < Math.pow(arr.length, 2); i++) {
			num = (int) Math.round(Math.random() * 20);
			arr[(int) Math.floor(i / arr[0].length)][i % arr[0].length] = num;
		}
		return arr;
	}

}
