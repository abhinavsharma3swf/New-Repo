public class ElectricCar extends Vehicle {

    private int range;

   public int getRange() {
        return range;
    }

    public void setRange(int range) {
        this.range = range;
    }

    public ElectricCar(String make, String vin, double price, int range) {
        super(make, vin, price);
        this.range = range;
    }

    @Override
    public String toString() {
        String message;
        message = "Electric" + " " + super.getMake() + " " + super.getVin() + " " + super.getPrice() + " " + range;
        return message;
//        return "ElectricCar{" +
//                "range=" + range +
//                "} " + super.toString();
    }
}
