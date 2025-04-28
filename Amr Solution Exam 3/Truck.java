public class Truck extends Vehicle{

   public int getTowing() {
        return towing;
    }

    public void setTowing(int towing) {
        this.towing = towing;
    }

    private int towing;

    public Truck(String make, String vin, double price, int towing) {
        super(make, vin, price);
        this.towing = towing;
    }

    @Override
    public String toString() {
        String message;
        message = "Truck" + " " + super.getMake() + " " + super.getVin() + " " + super.getPrice() + " " + towing;
        return message;
//        return "Truck{" +
//                "towing=" + towing +
//                "} " + super.toString();
    }
}
