package ejercicio4y5;

import java.util.Scanner;

public class ejercicio5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] arr = new int[3][3];
		int num = 1;
		for (int i = 0; i < Math.pow(arr.length, 2); i++) {
			boolean found = true;
			while (found) {
				found = false;
				num = (int) Math.round(Math.random() * 10);
				for (int j = 0; j < i; j++) {
					if (arr[(int) Math.floor(j / arr[0].length)][j % arr[0].length] == num) {
						found = true;
					}
				}
			}
			arr[(int) Math.floor(i / arr[0].length)][i % arr[0].length] = num;
		}

		for (int i = 0; i < Math.pow(arr.length, 2); i++) {
			System.out.print(
					arr[(int) Math.floor(i / arr[0].length)][i % arr[0].length] + "\t" + (i % arr.length == arr.length-1 ? "\n" : ""));
		}
	
		
		System.out.println("Desea sumar fila o columna? \n 1. fila \n 2. columna");
		Scanner scan = new Scanner(System.in);
		int opcion = scan.nextInt();
		scan.close();
		int opcion2;
		int acc=0;
		switch(opcion) {
		case 1:
			System.out.println("Que Fila?");
			opcion2=scan.nextInt();
			for(int i =0;i<arr[opcion2-1].length;i++) {
				acc+= arr[opcion2-1][i];
			}
			System.out.println("La fila suma: "+acc);
			break;
		case 2:
			System.out.println("Que Columna?");
			opcion2=scan.nextInt();
			for(int i =0;i<arr.length;i++) {
				acc+= arr[i][opcion2-1];
			}
			System.out.println("La columna suma: "+acc);
			break;
			
		}
		
	}

}
