

public class CircularQueue {

    private int[] array;
    private int front;
    private int rear;
    private int size;
    private int count;

    public CircularQueue(int size) {
        this.size = size;
        this.array = new int[size];
        this.front = 0;
        this.rear = -1;
        this.count = 0;
    }

    public boolean isEmpty() {
        return count == 0;
    }

    public boolean isFull() {
        return count == size;
    }

        public void enqueue ( int data){

            if (isFull()) {
                System.out.println("Is full");
                return;
            }
            rear = (rear + 1) % size;
            array[rear] = data;
            size++;
        }


        public int dequeue () {

            if (isEmpty()) {
                System.out.println("Queue is empty");
                return -1;
            }
            int data = array[front];
            front = (front + 1) % array.length;
            size--;
            return data;
        }

        public int peek () {
            if (isEmpty()) {
                System.out.println("Queue is empty");
            }
            return array[front];
        }

        public void display () {
            for (int i = 0; i < array.length - 1; i++) {
                System.out.println(array[i]);
            }
        }

    }
