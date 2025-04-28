import java.util.ArrayList;
import java.util.Scanner;

public class Vehicle  implements Comparable<Vehicle>{

    private String make;
    private String vin;
    private double price;

        Scanner obj = new Scanner(System.in);

    @Override
    public String toString() {
        return "Vehicle{" +
                "price=" + price +
                ", vin='" + vin + '\'' +
                ", make='" + make + '\'' +
                '}';
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


    public Vehicle(String make, String vin, double price) {
        this.make = make;
        this.vin = vin;
        this.price = price;
    }

    @Override
    public int compareTo(Vehicle o) {
        return (int) (this.price - o.price);
    }
}
