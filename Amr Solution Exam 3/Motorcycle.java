public class Motorcycle extends Vehicle{

    private int topSpeed;

   public int getTopSpeed() {
        return topSpeed;
    }

    public void setTopSpeed(int topSpeed) {
        this.topSpeed = topSpeed;
    }

    public Motorcycle(String make, String vin, double price, int topSpeed) {
        super(make, vin, price);
        this.topSpeed = topSpeed;
    }

    @Override
    public String toString() {
        String message;
        message = "Motorcycle" + " " + super.getMake() + " " + super.getVin() + " " + super.getPrice() + " " + topSpeed;
        return message;
//        return "Motorcycle{" +
//                "topSpeed=" + topSpeed +
//                "} " + super.toString();
    }

}
