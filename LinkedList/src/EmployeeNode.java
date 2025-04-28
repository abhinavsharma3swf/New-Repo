public class EmployeeNode {
    Employee data;
    Node next;

    public Employee getData() {
        return data;
    }

    public void setData(Employee data) {
        this.data = data;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    public EmployeeNode(Employee data) {
        this.data = data;
        this.next = null;
    }
}
