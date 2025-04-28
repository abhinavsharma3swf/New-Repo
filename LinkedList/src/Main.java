import java.util.LinkedList;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        LinkedList myList = new LinkedList();


        EmployeeList list = new EmployeeList();

        list.insertSorted(new Employee(30, 50000));
        list.insertSorted(new Employee(25, 45000));
        list.insertSorted(new Employee(40, 60000));
        list.insertSorted(new Employee(28, 48000));

        System.out.println("Sorted Employee List (by age):");
        list.printList();
//        myList.addNext(10);
//        myList.addNext(20);
//        myList.addNext(15);
//
////        myList.removeFirst();
////        myList.displayList();
////        myList.removeLast();
////        myList.displayList();
//        myList.removeNode(40);
//        myList.displayList();

//        System.out.println("Enter the number you want to search");
//        Scanner obj = new Scanner(System.in);
//        int x = obj.nextInt();
//        myList.searchNode(x);

    }
}