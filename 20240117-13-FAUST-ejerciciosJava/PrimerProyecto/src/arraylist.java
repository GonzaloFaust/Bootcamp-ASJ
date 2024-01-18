import java.util.ArrayList;
import java.util.Iterator;

public class arraylist {

	public static void main(String[] args) {
		ArrayList<String> colores = new ArrayList<String>();
		colores.add("Blanco");
		colores.add("Negro");
		colores.add("Azul");
		colores.add("Verde");
		colores.add("Rojo");
		colores.add("Naranja");
		
		
		for(String color:colores) {
			System.out.println(color);
		}
		
		
		colores.add(3,"Amarillo");
		colores.remove("Verde");
		colores.remove(1);
		System.out.println(colores.get(4));
		System.out.println(colores.indexOf("Amarillo"));
		System.out.println(colores.lastIndexOf("Negro"));
		colores.clear();
		System.out.println(colores.isEmpty());
		
		
		Iterator<String> miIterador = colores.iterator();
		while(miIterador.hasNext()) {
			String item= miIterador.next();
			System.out.println(item);
		}
	}

}
