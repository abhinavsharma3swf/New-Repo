public class GasolineCar extends Vehicle{

    private int horsePower;


    @Override
    public String toString() {
        String message;
        message = "Gasoline" + " " + super.getMake() + " " + super.getVin() + " " + super.getPrice() + " " + horsePower;
        return message;
//        return "GasolineCar{" +
//                "horsePower=" + horsePower +
//                "} " + super.toString();
    }

    public int getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(int horsePower) {
        this.horsePower = horsePower;
    }

    public GasolineCar(String make, String vin, double price, int horsePower) {
        super(make, vin, price);
        this.horsePower = horsePower;
    }
}
