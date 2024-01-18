package ejerciciosObjetos;

public class Calculadora {
	private double numeroActual;

	public Calculadora(double numero) {
		this.numeroActual = numero;
	}

	public double Sumar(double numero) {
		numeroActual += numero;
		return numeroActual;
	}

	public double Restar(double numero) {
		numeroActual -= numero;
		return numeroActual;
	}

	public double Multiplicar(double numero) {
		numeroActual *= numero;
		return numeroActual;
	}

	public double Dividir(double numero) {
		if (numero != 0) {
			numeroActual /= numero;
		}
		return 0;
	}

	public double getNumeroActual()
	{
		return numeroActual;
	}
}
