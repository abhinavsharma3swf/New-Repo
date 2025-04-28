public class Node {
    private int data;
    private Node forward;
    private Node backward;

    public Node(int data, Node forward, Node backward) {
        this.data = data;
        this.forward = forward;
        this.backward = backward;
    }

    public Node(int data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Node{" +
                "data=" + data +
                ", forward=" + forward +
                ", backward=" + backward +
                '}';
    }

    public int getData() {
        return data;
    }

    public void setData(int data) {
        this.data = data;
    }

    public Node getForward() {
        return forward;
    }

    public void setForward(Node forward) {
        this.forward = forward;
    }

    public Node getBackward() {
        return backward;
    }

    public void setBackward(Node backward) {
        this.backward = backward;
    }
}
