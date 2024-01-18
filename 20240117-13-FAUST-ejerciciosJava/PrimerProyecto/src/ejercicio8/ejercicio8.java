package ejercicio8;

import java.util.Scanner;

public class ejercicio8 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in).useDelimiter("\r?\n");
		String alfabeto = "abcdefghijklmnñopqrstuvwxyz";

		System.out.println("Ingrese mensaje a cifrar:");
		String mensaje = scan.nextLine();

		System.out.println("Ingrese ROT para cifrar:");
		int rot = scan.nextInt();
		String mensajeCifrado = "";
		for (char letra : mensaje.toLowerCase().toCharArray()) {
			if (letra != ' ')
				mensajeCifrado += alfabeto.charAt((alfabeto.indexOf(letra) + rot) % alfabeto.length() );
			else
				mensajeCifrado += " ";
		}

		System.out.println("Mensaje cifrado:" + mensajeCifrado);

	}

}
