import java.util.Scanner;

public class principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Integer entero=0;
//		Double doble = 0.0;
//		Float flotante= 00.0f;
//		Boolean booleano = true;
//		String cadena;
//		Character caracter;
//		Byte unByte = 0;
//		Short unShort;
//		Long unLong;
//		
//		System.out.println("Tipo\t\tMinimo\t\tMaximo");
//		System.out.println(entero.TYPE +"\t\t" +Integer.MIN_VALUE +"\t" +Integer.MAX_VALUE);
//		System.out.println(doble.TYPE +"\t\t" +Double.MIN_VALUE +"\t" +Double.MAX_VALUE);
//		System.out.println(flotante.TYPE +"\t\t" +Float.MIN_VALUE +"\t\t" +Float.MAX_VALUE);
//		System.out.println(unByte.TYPE +"\t\t" +Byte.MIN_VALUE +"\t\t" +Byte.MAX_VALUE);
//		System.out.println(booleano.TYPE +"\t\t" +Boolean.FALSE +"\t\t" +Boolean.TRUE);

		
		
		
		/*
		 * dada una palabra ingresada por el usuario (por teclado)
		 * mostrar su equivalente en ASCII (letra por letra)
		 * ej: HIla --> 72 111 108 97
		 * 
		 * extra: agregarle los espacione en blanco*/
		
		Scanner scan= new Scanner(System.in).useDelimiter("\r?\n");
		
		System.out.println("Ingresar frase: ");
		String texto=scan.nextLine();
		String res ="";
		scan.close();
		for(int i =0;i<texto.length();i++) {
			if (texto.charAt(i)!=' ')
			res += (int)texto.charAt(i) + " ";
		}
		
		System.out.println("Resultado: "+ res);
	
		
	}

}
