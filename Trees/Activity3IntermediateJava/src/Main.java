import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        LinkedLst myList = new LinkedLst();

        myList.insertNode(10);
        myList.insertNode(12);
        myList.insertNode(5);
        myList.displayList();
        myList.searchNode(5);

        System.out.println("Enter the node you want to delete");
        Scanner obj = new Scanner(System.in);
        int x = obj.nextInt();
        myList.removeNode(x);
    }
}