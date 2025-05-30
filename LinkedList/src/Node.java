public class Node {

    private int data;
    private Node next;
    private Node previous;

    public Node(int data) {
        this.data = data;
    }

    public Node(int data, Node pointer) {
        this.data = data;
        this.next = pointer;
    }

    public Node(Employee emp) {
    }

    @Override
    public String toString() {
        return "Node{" +
                "data=" + data +
                ", pointer=" + next +
                '}';
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    public int getData() {
        return data;
    }

    public void setData(int data) {
        this.data = data;
    }
}

