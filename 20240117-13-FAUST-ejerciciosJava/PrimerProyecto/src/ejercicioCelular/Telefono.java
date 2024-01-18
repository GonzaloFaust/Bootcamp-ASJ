package ejercicioCelular;

import java.util.Scanner;

public class Telefono {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in).useDelimiter("\r?\n");
		System.out.println("Ingresar numeros separados por espacios:");
		String palabra = scan.nextLine();
		String[] numeros = palabra.split(" ");
		scan.close();
		char[][] alfabeto = { {'.',',','!','?'}, { 'a', 'b', 'c' }, { 'd', 'e', 'f' }, { 'g', 'h', 'i' }, { 'j', 'k', 'l' },
				{ 'm', 'n', 'o' }, { 'p', 'q', 'r', 's' }, { 't', 'u', 'v' }, { 'w', 'x', 'y', 'z' } };

		String mensaje = "";
		for (String numeroIndex : numeros) {
			int numero = Character.getNumericValue(numeroIndex.charAt(0));
			int cantidad = numeroIndex.length();
			if (numero == 0) 
				mensaje += " ";
			else
				mensaje += alfabeto[numero - 1][(cantidad - 1) % alfabeto[numero - 1].length];
		}
		System.out.println(mensaje);
	}
}
