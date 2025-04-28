public class EmployeeList {
    private Node head;

    public void insertSorted(Employee emp) {
        EmployeeNode newNode = new EmployeeNode(emp);

        if(head == null){

        }
        else if (head == null || emp.age <= head.getData()) {
            newNode.next=head;
            head = newNode.getNext();
        } else {
            Node current = head;
            while (current.getNext() != null && current.getNext().getData() < emp.age) {
                current = current.getNext();
            }
            newNode.next = current.getNext();
            current.setNext(newNode.getNext());
        }
    }

    public void printList() {
        Node current = head;
        if(current == null)
            System.out.println("The list is empty");
        while (current != null) {
            System.out.println(current.getData());
            current = current.getNext();
        }
    }
}




































