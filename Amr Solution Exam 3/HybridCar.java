public class HybridCar extends Vehicle {
    private int mpg;

        public int getMpg() {
        return mpg;
    }

    public void setMpg(int mpg) {
        this.mpg = mpg;
    }

    public HybridCar(String make, String vin, double price, int mpg) {
        super(make, vin, price);
        this.mpg = mpg;
    }

    @Override
    public String toString() {
        String message;
        message = "Hybrid" + " " + super.getMake() + " " + super.getVin() + " " + super.getPrice() + " " + mpg;
        return message;
//        return "HybridCar{" +
//                "mpg=" + mpg +
//                "} " + super.toString();
    }
}