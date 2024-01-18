package ejercicio1;

import java.util.Scanner;

public class Cajero {

	public static void main(String[] args) {
		
		Cuenta miCuenta = new Cuenta();
		Scanner scan = new Scanner(System.in).useDelimiter("\r?\n");
		
		boolean salir=false;
		while(!salir) {

			System.out.println("Elija una Opcion: \n1. Extraer Dinero \n 2. Depositar Dinero \n 3. Consultar Saldo \n 4. Ver Movimientos \n 5. Salir");		
			int respuesta = scan.nextInt();
			
			switch(respuesta) {
			case 1:
				Extraer(miCuenta, scan);
				break;
			case 2:
				Depositar(miCuenta, scan);
				break;
			case 3:
				System.out.println(miCuenta.consultarSaldoActual());
				break;
			case 4:
				VerMovimientos(miCuenta, scan);
				break;
			case 5:
				System.out.println("Hasta lueguito");
				salir=true;
				
				break;
			default:
				System.out.println("Opcion incorrecta, probemos de nuevo");
				break;
			}
			System.out.println("----///---///---///---///---///----");
		}
		
		scan.close();
	}
	
	public static void Extraer(Cuenta c, Scanner s) {
		System.out.println("Monto a extraer:");
		double monto = s.nextDouble();
		resultadoOperacion( c.extraerDinero(monto));
	}
	
	public static void Depositar(Cuenta c, Scanner s) {
		System.out.println("Monto a depositar:");
		double monto = s.nextInt();
		resultadoOperacion( c.depositarDinero(monto));
	}
	
	public static void VerMovimientos(Cuenta c, Scanner s) {
		System.out.println("Movimientos que desea ver: ");
		int cantidad = s.nextInt();
		String[] res= c.verMovimientos(cantidad);
		System.out.println("Ultimos "+res.length+ " Movimientos:");
		for(int i = 0;i<res.length;i++) {
			System.out.println(res[i]);
		}
	}
	
	public static void resultadoOperacion(boolean res) {
		System.out.println(res? "Operacion exitosa!":"No se ha podido efectuar la operacion debido a un error");
	}

}
