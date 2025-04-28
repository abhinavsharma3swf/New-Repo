public class Suv extends Vehicle{

    private int seat;

  public int getSeat() {
        return seat;
    }

    public void setSeat(int seat) {
        this.seat = seat;
    }

    public Suv(String make, String vin, double price, int seat) {
        super(make, vin, price);
        this.seat = seat;
    }

    @Override
    public String toString() {
        String message;
        message = "Suv" + " " + super.getMake() + " " + super.getVin() + " " + super.getPrice() + " " + seat;
        return message;
//        return "Suv{" +
//                "seat=" + seat +
//                "} " + super.toString();
    }
}
