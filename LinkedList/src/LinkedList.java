public class LinkedList {

    private Node head;

    public LinkedList() {
        this.head = null;
    }

    public void addNext(int d) {
        Node node = new Node(d);

        if (head == null) {
            head = node;
            return;
        } else {
            node.setNext(head);
            head = node;
            head.setNext(node);
            node.setNext(head);
        }
        this.head = node;
    }


    public void displayList() {
        Node ptr = head;

        if (ptr == null) {
            System.out.println("The list is empty");
        }
        while (ptr != null) {
            System.out.println(ptr.getData() + " ");
            ptr = ptr.getNext();
        }

//        System.out.println(head);
    }

    public void addLast(int data) {

        Node newNode = new Node(data);

        if (head == null) {
            head = newNode;
            System.out.println("Inserted");
        }

        Node temp = head;

        while (temp.getNext() != null)
            temp = temp.getNext();

        temp.setNext(newNode);

    }

    public void removeFirst() {

        if (head == null) {
            System.out.println("Empty");
        }
        head = head.getNext();
    }

    public void removeLast() {

        if (head == null) {
            System.out.println("Empty..");
        }

        if (head.getNext() == null) {
            head = null;
        }

        Node temp = head;
        Node previos = null;

        while (temp.getNext() != null) {

            previos = temp;
            temp = temp.getNext();

            previos.setNext(null);

        }
    }

    public void searchNode(int data) {

        if (head == null) {
            System.out.println("Empty..");
            return;
        }
        Node temp = head;

        while (temp != null) {

            if (temp.getData() == data) {
                System.out.println("The number exist and the number is " + data);
                return;
            }
            temp = temp.getNext();
        }

        System.out.println("It does not exist");
    }

    public void removeNode(int d) {

        if (head == null) {
            System.out.println("Empty..");
            return;
        }

        Node temp = head.getNext();
        Node pre = head;

        if (head.getData() == d) {
            head = head.getNext();
            System.out.println("removed");
            return;
        }

        if ((head.getNext() == null) && (head.getData() != d)) {
            System.out.println("No match found");
        }

        while (temp != null) {
            if (temp.getData() == d) {
                System.out.println("found it in the middle");
                pre.setNext(temp.getNext());
                return;
            }
            pre = temp;
            temp = pre.getNext();
        }
        System.out.println("Not found");
    }
   }

