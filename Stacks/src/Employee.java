import java.util.LinkedList;

public class Employee {

    private int age;
    private int salary;

    public Employee(int age, int salary, Node n) {
        this.age = age;
        this.salary = salary;
        this.n = n;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Node getN() {
        return n;
    }

    public void setN(Node n) {
        this.n = n;
    }

    Node n;

}
