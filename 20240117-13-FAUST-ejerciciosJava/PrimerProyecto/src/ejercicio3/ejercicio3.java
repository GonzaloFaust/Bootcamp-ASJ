package ejercicio3;

public class ejercicio3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[] arr = new int[20];
		for(int i =0; i<arr.length;i++) {
			arr[i]= (int)Math.round( Math.random()*100);
		}
		System.out.println("Array creado:");
		for(int i =0; i<arr.length;i++) {
			System.out.print(arr[i]+" ");
		}
		System.out.println();
		int cpares=0;
		int cimpares=0;
		
		for(int i =0; i<arr.length;i++) {
			if(arr[i]%2==0) cpares++;
			else cimpares++;
		}
		
		int [] pares = new int[cpares];
		int [] impares = new int[cimpares];
		
		for(int i =0; i<arr.length;i++) {
			if(arr[i]%2==0) pares[--cpares]= arr[i];
			else impares[--cimpares]= arr[i];
		}
		
		for(int i =0; i<arr.length;i++) {
			if(i<pares.length) arr[i]= pares[i];
			else arr[i]= impares[i-pares.length];
				
		}
		
		System.out.println("Array Ordenado por pares e impares:");
		for(int i =0; i<arr.length;i++) {
			System.out.print(arr[i]+" ");
		}
		
		
		
	}

}
