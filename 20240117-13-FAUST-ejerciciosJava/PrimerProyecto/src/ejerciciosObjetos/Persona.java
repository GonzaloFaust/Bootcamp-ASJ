package ejerciciosObjetos;

public class Persona {
	private String nombre;
	private int edad;
	private String DNI;
	private char sexo;
	private double peso;
	private double altura;

	public Persona() {
		this("", 0, ' ', 0.0, 0.0);
	}

	public Persona(String nombre, int edad, char sexo) {
		this(nombre, edad, sexo, 0.0, 0.0);
	}

	public Persona(String nombre, int edad, char sexo, double peso, double altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.DNI = generarDNI();
		this.sexo = comprobarSexo(sexo);
		this.peso = peso;
		this.altura = altura;
	}

	public int calcularIMC() {
		double imc = peso / (altura * altura);
		return imc <= 20 ? -1 : imc > 25 ? 1 : 0;
	}

	public boolean esMayorDeEdad() {
		return edad >= 18;
	}

	private char comprobarSexo(char sexo) {
		if (sexo == 'M')
			return 'M';
		else
			return 'H';
	}

	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", edad=" + edad + ", DNI=" + DNI + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}

	private String generarDNI() {
		return String.valueOf(10000000 + (int) Math.random() * 89999999);
	}

	public String getNombre() {
		return this.nombre;
	}

}
