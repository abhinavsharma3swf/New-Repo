public class LinkedLst {

    private Node head;

    public LinkedLst() {
        this.head = null;
    }

    public void insertNode(int data) {
        Node node = new Node(data);

        if (head == null) {
            head = node;
            return;
        }

        if (data < head.getData()) {
            node.setForward(head);
            head.setBackward(node);
            head = node;
            return;
        }

        Node ptr = head;

        while (ptr.getForward() != null && ptr.getForward().getData() < data) {
            ptr = ptr.getForward();
        }

        Node next = ptr.getForward();
        node.setForward(next);
        node.setBackward(ptr);
        ptr.setForward(node);

        if (next != null) {
            next.setBackward(node);
        }
    }

//    public void insertNode(int data) {
//
//        Node node = new Node(data);
//
//        if (head == null) {
//            head = node;
//            return;
//        }
//
//        if (head.getForward() == null) {
//            if (head.getData() > node.getData()) {
//                node.setForward(head);
//                head.setBackward(node);
//                head = node;
//                return;
//            }
//        }
//
//        Node ptr = head;
//
//        while (ptr != null) {
//            if (ptr.getData() > node.getData()) {
//                Node prev = ptr.getBackward();
//                prev.setForward(node);
//                node.setBackward(prev);
//                node.setForward(ptr);
//                ptr.setForward(node);
//                return;
//            }
//            ptr = ptr.getForward();
//        }
//    }



    public void displayList() {
        Node ptr = head;

        if (ptr == null) {
            System.out.println("The list is empty");
        }
        while (ptr != null) {
            System.out.println(ptr.getData() + " ");
            ptr = ptr.getForward();
        }

    }

    public boolean searchNode(int data) {
        if (head == null) {
            return false;
        }
        Node temp = head;
        while (temp != null) {

            if (temp.getData() == data) {
                return true;
            }
            temp = temp.getForward();
        }
        return false;
    }


    public void removeNode(int d) {

        if (head == null) {
            System.out.println("Empty..");
            return;
        }

        if (head.getForward() == null) {
            head = null;
            return;
        }

        Node ptr = head.getForward();
        Node prePtr = head;


        while (ptr != null) {
            prePtr.setBackward(null);
            prePtr.setForward(null);
            prePtr = ptr;
            ptr = ptr.getForward();
        }
        prePtr.setBackward(null);
        prePtr.setForward(null);
    }
}

