public class Node {

    private int data;
    private Node next;

    public Node(int d) {
        data = d;
        next = null;
    }


    public int getData() {
        return data;
    }

    public void setData(int data) {
        this.data = data;
    }

    public Node getNode() {
        return next;
    }

    public void setNode(Node node) {
        this.next = node;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node n) {
        next = n;
    }

    @Override
    public String toString() {
        return "Node{" +
                "data=" + data +
                ", node=" + next +
                '}';
    }
}
