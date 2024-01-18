package ejerciciosObjetos;

import java.util.Random;

public class Password {
	private int longitud;
	private String contrasenia;
	private String opcionesCaracter = "0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	
	public Password(int longitud) {
		this.longitud=longitud;
		generarPassword();
	}
	
	public Password() {
		this(8);
	}

	public boolean esFuerte() {
		int contMayusculas=0;
		int contMinusculas=0;
		int contNumeros=0;
		char[] caracteres= contrasenia.toCharArray();
		for(char caracter:caracteres) {
			if(Character.isDigit(caracter)) contNumeros++;
			if(Character.isUpperCase(caracter)) contMayusculas++;
			if(Character.isLowerCase(caracter)) contMinusculas++;
		}
		return contMayusculas>2 && contMinusculas>1 && contNumeros>5;
	}

	public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public String generarPassword() {
		contrasenia="";
		Random random = new Random();
		for(int i =0; i<longitud;i++) {
			contrasenia+= opcionesCaracter.charAt(random.nextInt(opcionesCaracter.length()));
		}
		return contrasenia;
	}
}
