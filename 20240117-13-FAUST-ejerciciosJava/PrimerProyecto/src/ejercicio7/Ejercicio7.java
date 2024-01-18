package ejercicio7;

import java.util.Random;

public class Ejercicio7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int totalHombres = 0;
        int hombresTrabajan = 0;
        int sueldoTotalHombres = 0;
        int totalMujeres = 0;
        int mujeresTrabajan = 0;
        int sueldoTotalMujeres = 0;

        Random random = new Random();
        for (int i = 0; i < 10; i++) {
            int sexo = random.nextInt(2) + 1;  
            int trabaja = random.nextInt(2) + 1; 
            int sueldo = trabaja == 1 ? random.nextInt(1401) + 600 : 0; 

            if (sexo == 1) {
                totalHombres++;
                if (trabaja == 1) {
                    hombresTrabajan++;
                    sueldoTotalHombres += sueldo;
                }
            } else {
                totalMujeres++;
                if (trabaja == 1) {
                    mujeresTrabajan++;
                    sueldoTotalMujeres += sueldo;
                }
            }
        }

        double porcentajeHombres = (double) totalHombres / 10 * 100;
        double porcentajeMujeres = (double) totalMujeres / 10 * 100;
        double porcentajeHombresTrabajan = (double) hombresTrabajan / totalHombres * 100;
        double porcentajeMujeresTrabajan = (double) mujeresTrabajan / totalMujeres * 100;
        double sueldoPromedioHombres = hombresTrabajan == 0 ? 0 : (double) sueldoTotalHombres / hombresTrabajan;
        double sueldoPromedioMujeres = mujeresTrabajan == 0 ? 0 : (double) sueldoTotalMujeres / mujeresTrabajan;

        System.out.println("Porcentaje de hombres: " + porcentajeHombres + "%");
        System.out.println("Porcentaje de mujeres: " + porcentajeMujeres + "%");
        System.out.println("Porcentaje de hombres que trabajan: " + porcentajeHombresTrabajan + "%");
        System.out.println("Porcentaje de mujeres que trabajan: " + porcentajeMujeresTrabajan + "%");
        System.out.println("Sueldo promedio de hombres que trabajan: " + sueldoPromedioHombres);
        System.out.println("Sueldo promedio de mujeres que trabajan: " + sueldoPromedioMujeres);
	}

}
