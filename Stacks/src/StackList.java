public class StackList {

    private Node top;
    private int size;

    public StackList(int i){
        top = null;
        size = 0;
    }
    public boolean isEmpty(){
        return top == null;
    }

    public int size() {
        return size;
    }

    public void push(int d) {

        Node n = new Node(d);

        if(top == null){
            top = n;
            size++;
            return;
        }
        n.setNext(top);
        top = n;
        size++;
    }

    public int pop() {
        if (top == null){
            System.out.println("Stack is empty");
            return -1;
        }

        int data = top.getData();
        top = top.getNext();
        size --;
        return data;
    }

    public int peek() {
        if (top == null){
            System.out.println("Stack is empty");
            return -1;
        }

        return top.getData();
    }

    public void display() {
        if(top == null){
            return;
        }
        Node ptr = top;
        while(ptr!= null){
            System.out.println(ptr.getData());
            ptr = ptr.getNext();
        }
    }
}
