package ejerciciosObjetos;

public class Cuenta {
	private String titular;
	private double cantidad;

	public Cuenta(String titular, double cantidad) {
		this.titular = titular;
		this.cantidad = cantidad;
	}

	public Cuenta(String titular) {
		this(titular, 0);
	}

	public String getTitular() {
		return titular;
	}

	public void setTitular(String titular) {
		this.titular = titular;
	}

	public double getCantidad() {
		return cantidad;
	}

	private void setCantidad(double cantidad) {

		this.cantidad = cantidad;
	}

	public void Ingresar(double cantidad) {
		if (cantidad > 0)
			setCantidad(cantidad);
	}

	public void Retirar(double cantidad) {
		if (cantidad > 0)
			this.cantidad -= cantidad;
		if (this.cantidad < 0)
			this.cantidad = 0;
	}

	@Override
	public String toString() {
		return "Cuenta [titular=" + titular + ", cantidad=" + cantidad + "]";
	}

}
