package ejercicio2;

import java.util.Scanner;

public class rotarNumeros {

	public static void main(String[] args) {
		int pos=0;
		int[] arr= new int[15];
		Scanner scan = new Scanner(System.in).useDelimiter("\r?\n");
		int num;
		while(pos<arr.length) {
			try {
				System.out.println("Siguiente numero:");
				num = scan.nextInt();
				arr[pos++]=num;
			}
			catch(Exception e) {
				num=0;
				System.out.println("Ingresa un numero valido, va de vuelta:");
			}
			finally {
				scan.nextLine();
			}
		}
		scan.close();
		int aux = arr[--pos];
		for(int i = pos;i>0;i--) {
			arr[i]=arr[i-1];
		}
		arr[0]=aux;
		
		for(int i = 0; i<arr.length;i++) {
			System.out.print(arr[i]+", ");
			
		}
	}

}
