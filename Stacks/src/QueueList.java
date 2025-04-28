public class QueueList {
    private Node head;
    private Node rear;
    private int size;

    public QueueList(int i) {
    }

    public void queueList(int d){
        Node temp = new Node(d);
        // [Head] -> []
        // [Head] -> [1]
        // [Head] -> [1(Tail)] -> [2]
        // [Head] -> [1] -> [2(Tail)]
        // [Head] -> [1] -> [2] -> [3(Tail)]
        if(head == null){
        head = temp;
        rear = temp;
        size ++;
        }
        
        rear.setNext(temp);
        rear= rear.getNext();
        size++;
    }

    public void enqueue(int d){

        Node n = new Node(d);
        if(head == null){
            head=n;
            rear=n;
            size++;
            return;
        }
        rear.setNext(n);
        rear = n;
        size++;
    }

    public int dequeue() {
        if(head == null){
        System.out.println("queue is empty");
        return -1;
        }
        Node ptr = head;
        if(size ==1){
            head = null;
            rear= null;
        }
        else{
            head = head.getNext();
        }
        size--;
        return ptr.getData();
    }

    public int peak (){

        if(head == null){
            return -1;
        }
        else{
           return head.getData();

        }
    }

    public boolean isEmpty() {
        if (head == null) {
            return true;
        }
        else return false;
    }

    public int size(){
        return size;
    }


}
