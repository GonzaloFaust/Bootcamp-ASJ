package ejercicio1;

public class Cuenta {
	private Double saldoActual = 100.00;
	private String[] movimientos = new String[100];
	private int posMov = 0;

	public String consultarSaldoActual() {
		registrarMovimiento("Consultado saldo: $" + saldoActual);
		return "El saldo actual es: $" + saldoActual;
	}

	public boolean extraerDinero(double monto) {
		if (monto > 0 && monto <= saldoActual) {
			saldoActual -= monto;
			registrarMovimiento("Extraido: $" + monto);
			return true;
		}
		return false;
	}

	public boolean depositarDinero(double monto) {
		if (monto > 0) {
			saldoActual += monto;
			registrarMovimiento("Depositado: $" + monto);
			return true;
		}
		return false;
	}

	public String[] verMovimientos(int cantidad) {
		String[] movAMostrar = new String[cantidad > this.posMov ? posMov : cantidad];
		for (int i = 0 , mov = posMov-1; i < movAMostrar.length; i++, mov--) {
			movAMostrar[i] =  this.movimientos[mov];
		}
		return movAMostrar;

	}

	private void registrarMovimiento(String mov) {
		this.movimientos[this.posMov] = mov;
		this.posMov+=1;

	}

}
