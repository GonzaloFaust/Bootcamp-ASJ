package ejercicio4y5;

public class ejercicio4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] arr = new int[5][5];
		int num = 1;
		for (int i = 0; i < Math.pow(arr.length, 2); i++) {
			boolean found = true;
			while (found) {
				found = false;
				num = (int) Math.round(Math.random() * 50);
				for (int j = 0; j < i; j++) {
					if (arr[(int) Math.floor(j / arr[0].length)][j % arr[0].length] == num) {
						found = true;
					}
				}

				arr[(int) Math.floor(i / arr[0].length)][i % arr[0].length] = num;

			}
		}

		for (int i = 0; i < Math.pow(arr.length, 2); i++) {
			System.out.print(
					arr[(int) Math.floor(i / arr[0].length)][i % arr[0].length] + "\t" + (i % arr.length == arr.length-1 ? "\n" : ""));
		}

	}

}
