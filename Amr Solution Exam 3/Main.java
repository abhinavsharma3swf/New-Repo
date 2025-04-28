import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Dealership object = new Dealership();
        Scanner obj = new Scanner(System.in);
        System.out.println("Welcome to Car Dealership");

        int choice;

        do {
            displayMenu();

            System.out.println("Please enter your choice");
            choice = obj.nextInt();

            switch (choice) {
                case 1:
                    object.addVehicle();
                    break;
                case 2:
                    object.removeVehicle();
                    break;
                case 3:
                    object.displayAlldetailonVin();
                    break;
                case 4:
                    object.displayVehicleOnPrice();
                    break;
                case 5:
                    object.displayVehicleLowerThan();
                    break;
                case 6: object.displayElectricCarBasedOnTheRange();
                    break;
                case 7:object.saveToFile();
                    break;
                case 8:object.readFromFile();
                    break;
                case 9:
                    break;
                default:
                    System.out.println("Bad Input");
            }
        } while(choice != 9);
    }

    public static void displayMenu() {
        System.out.println("Press 1 to add vehicle to the inventory");
        System.out.println("Press 2 to remove the vehicle based on VIN");
        System.out.println("Press 3 to display the full detail of the vehicle based on the VIN");
        System.out.println("Press 4 to display the vehicle on lowest price basis");
        System.out.println("Press 5 to display vehicles with a price lower than certain amount");
        System.out.println("Press 6 to display electric cars based on certain range (above certain range)");
        System.out.println("Press 7 to export the inventory into a text-based file");
        System.out.println("Press 8 to import the inventory from that file");
        System.out.println("Press 9 to quit");
    }
}
