import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Dealership {

    private ArrayList<Vehicle> vehicles = new ArrayList<>();

    Vehicle d;

    public void addVehicle() {
        Scanner obj = new Scanner(System.in);
        int choice;
        int horsePower, mpg, range, topSpeed, towing, seat;


        do {
            System.out.println("Press 1 to add the  gasoline car");
            System.out.println("Press 2 to add the hybrid car");
            System.out.println("Press 3 to add electric car");
            System.out.println("Press 4 to add the motorcycle");
            System.out.println("Press 5 to add the truck");
            System.out.println("Press 6 to add the SUV");
            System.out.println("Press 7 to return to main menu");

            System.out.println("Enter your choice");
            choice = obj.nextInt();
            obj.nextLine();  //

            if(choice ==7)
                return;

            if(choice >0 && choice <7) {
                System.out.println("Enter the make of the model");
                String make = obj.nextLine();
                System.out.println("Enter the VIN");
                String vin = obj.nextLine();
                System.out.println("Enter the price");
                double price = obj.nextDouble();


                switch (choice) {

                    case 1:
                        System.out.println("Enter the horse power");
                        horsePower = obj.nextInt();
                        d = new GasolineCar(make, vin, price, horsePower);
                        vehicles.add(d);
                        break;

                    case 2:
                        System.out.println("Enter the mpg");
                        mpg = obj.nextInt();
                        d = new HybridCar(make, vin, price, mpg);
                        vehicles.add(d);
                        break;

                    case 3:
                        System.out.println("Enter the range for electric car");
                        range = obj.nextInt();
                        d = new ElectricCar(make, vin, price, range);
                        vehicles.add(d);
                        break;

                    case 4:
                        System.out.println("Enter the top speed");
                        topSpeed = obj.nextInt();
                        d = new Motorcycle(make, vin, price, topSpeed);
                        vehicles.add(d);
                        break;

                    case 5:
                        System.out.println("Enter the towing capacity");
                        towing = obj.nextInt();
                        d = new Truck(make, vin, price, towing);
                        vehicles.add(d);
                        break;

                    case 6:
                        System.out.println("Enter the seat capacity");
                        seat = obj.nextInt();
                        d = new Truck(make, vin, price, seat);
                        vehicles.add(d);
                        break;

                    case 7:
                        break;
                }
            }
        } while (choice != 7);
    }

    public void removeVehicle() {
        System.out.println("Enter the Vin you want to remove");
        Scanner obj = new Scanner(System.in);
        String vinSearch = obj.nextLine();
        for (int i = 0; i < vehicles.size(); i++)
            if (vehicles.get(i).getVin().equals(vinSearch)) {
                vehicles.remove(i);
                System.out.println("Vehicle Removed");
            }
    }

    public void displayAlldetailonVin() {
        System.out.println("Enter the Vin you want to search");
        Scanner obj = new Scanner(System.in);
        String search = obj.nextLine();
        for (int i = 0; i < vehicles.size(); i++)
            if (vehicles.get(i).getVin().equals((search))) {
                System.out.println(vehicles.get(i));
            }
        else{
            System.out.println("Vehicle not found");
            }
    }

    public void displayVehicleOnPrice() {
        Collections.sort(vehicles);
        for (int i = 0; i < vehicles.size(); i++)
        System.out.println(vehicles);


    }

    public void displayVehicleLowerThan() {
        System.out.println("Enter the price you want to search");
        Scanner obj = new Scanner(System.in);
        double search = obj.nextDouble();
        for (int i = 0; i < vehicles.size(); i++)
            if (vehicles.get(i).getPrice() < search)
                System.out.println(vehicles.get(i));
    }


    public void displayElectricCarBasedOnTheRange() {
        System.out.println("Enter the electric car range you want to search and the display will show you the results above the input range");
        Scanner obj = new Scanner(System.in);
        int choice = obj.nextInt();
        for (int i = 0; i < vehicles.size(); i++)
            if (d instanceof ElectricCar) {
                if (((ElectricCar) d).getRange() > choice)
                    System.out.println(vehicles.get(i));
            }
    }

    public void saveToFile() {
        try {
            FileWriter myWriter = new FileWriter("vehicle.txt", true);
            for (int i = 0; i < vehicles.size(); i++)
//                myWriter.write(d.toString() + "\n");
                myWriter.write(vehicles.get(i).toString() + "\n");
            myWriter.close();
        } catch (IOException e) {
            System.out.println("An error occurred");
            e.printStackTrace();
        }
    }


    public void readFromFile() {
        int count = 0;
        vehicles.clear();
        String[] parts = new String[6];
        String make, vin;
        double price;
        int horsepower;
        int mpg;
        int seat;
        int range;
        int towing;
        int topspeed;
        Vehicle d;

        try {
            File myObj = new File("vehicle.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                parts = data.split(" ");
                System.out.println(Arrays.toString(parts));

                switch (parts[0]) {
                    case "Gasoline":
                        make = parts[1];
                        vin = parts[2];
                        price = Double.parseDouble(parts[3]);
                        horsepower = Integer.parseInt(parts[4]);
                        d = new GasolineCar(make, vin, price, horsepower);
                        vehicles.add(d);
                        count++;
                        break;

                    case "Hybrid":
                        make = parts[1];
                        vin = parts[2];
                        price = Double.parseDouble(parts[3]);
                        mpg = Integer.parseInt(parts[4]);
                        d = new HybridCar(make, vin, price, mpg);
                        vehicles.add(d);
                        count++;
                        break;

                    case "Suv":
                        make = parts[1];
                        vin = parts[2];
                        price = Double.parseDouble(parts[3]);
                        seat = Integer.parseInt(parts[4]);
                        d = new Suv(make, vin, price, seat);
                        vehicles.add(d);
                        count++;
                        break;

                    case "Electric":
                        make = parts[1];
                        vin = parts[2];
                        price = Double.parseDouble(parts[3]);
                        range = Integer.parseInt(parts[4]);
                        d = new ElectricCar(make, vin, price, range);
                        vehicles.add(d);
                        count++;
                        break;

                    case "Truck":
                        make = parts[1];
                        vin = parts[2];
                        price = Double.parseDouble(parts[3]);
                        towing = Integer.parseInt(parts[4]);
                        d = new Truck(make, vin, price, towing);
                        vehicles.add(d);
                        count++;
                        break;

                    case "Motorcycle":
                        make = parts[1];
                        vin = parts[2];
                        price = Double.parseDouble(parts[3]);
                        topspeed = Integer.parseInt(parts[4]);
                        d = new Motorcycle(make, vin, price, topspeed);
                        vehicles.add(d);
                        count++;
                        break;

                }
            } myReader.close();
    } catch (FileNotFoundException e) {
        System.out.println("An error occurred.");
        e.printStackTrace();
        }
    }
}




