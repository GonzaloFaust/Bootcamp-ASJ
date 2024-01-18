//import java.text.MessageFormat;
import java.util.Scanner;

public class estructuras {

	public static void main(String[] args) {
		//condicionales y bucles
		
		//pedir al usuario que ingrese ¿cuantas notas quiere ingresar?
		//segun eso pedir el valor de cada nota
		//sacar el promedio
		//pd: hacerlo con for, while, do while
		
		Scanner scan = new Scanner (System.in).useDelimiter("\r?\n");
//		boolean seguir= false;
//		do {
//			System.out.println("Cuantas notas quiere ingresar?:");
//			int cantidadNotas = scan.nextInt();
//			int[] notas = new int[cantidadNotas];
//			int c=0;
//			while(c<cantidadNotas) {
//				System.out.print(MessageFormat.format("Nota {0}/{1}:",c+1,cantidadNotas));
//				notas[c]= scan.nextInt();
//				if (notas[c]>0 && notas[c]<=10) {
//					c++;
//				}
//				else {
//					System.out.println("nota invalida, va de vuelta");
//				}
//				
//			}
//			int acc=0;
//			for(int nota: notas) {
//				
//				acc +=nota;
//			}
//			System.out.println("El promedio es "+ (double)acc/cantidadNotas);
//			
//			
//			System.out.println("Volver a ingresar datos? s/n:");
//			String res= scan.next();
//			seguir = res.toLowerCase().matches("s");
//			
//		}while(seguir);
//		scan.close();
//		System.out.println("Vuelvas prontos!");
//		
		
		
//		Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.
//		int accAngulos=0;
//		int c=1;
//		while(c<=3) {
//			System.out.print(MessageFormat.format("Lado n°{0}: ",c));
//			accAngulos+= scan.nextInt();
//			c++;
//		}
//		scan.close();
//		
//		if(accAngulos== 90 ) System.out.println("Triangulo válido");
//		else System.out.println("Eso no es un triangulo, es un monstruo");
//		
		
		
//		Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
		
//		System.out.println("Ingrese un string");
//		String textoIngresado = scan.nextLine();
//		scan.close();		
//		System.out.println(Character.isDigit(textoIngresado.charAt(0))?"Empieza con un numero":"Epieza con letra");
		
		
//		Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
		
//		System.out.print("Ingrese N: ");
//		int n = scan.nextInt();
//		System.out.print("Ingrese M: ");
//		int m = scan.nextInt();
//		scan.close();
//		int acc=0;
//		for(int i=n;i<=m;i++) {
//			if(i%2==0) {
//				System.out.println(i);
//				acc+= i;
//			}
//		}
//		System.out.print(MessageFormat.format("suma de los pares entre {0} y {1}: {2}", n,m ,acc));
//	
//		Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a la suma de sus divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)
//
//		System.out.print("Ingrese un numero para saber si es perfecto: ");
//		int num = scan.nextInt();
//		scan.close();
//		int acc=0;
//		int c = num-1;
//		while(c>0) {
//			if(num%c==0) {
//				acc+=c;
//			}
//			c--;
//		}
//		
//		System.out.println(acc== num?"Numero Perfecto":"Segui participando");
		
		
		
//		Recrear el siguiente dibujo:(ver imagen)
		System.out.print("Ingrese un numero : ");
		long num = scan.nextLong();
		scan.close();
		String par = "";
		for (int i =0; i<=num;i++) {
			par+= "* ";
		}
		String impar="";
		for (int i =0; i<=num-1;i++) {
			impar+= " *";
		}
		do {
			System.out.println(num%2==0?par:impar);
			num--;
		}while(num>0);
	}

}
