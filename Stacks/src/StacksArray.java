public class StacksArray {

    private int [] stack;
    private int top;
    private int capacity;


    public StacksArray(int size) {
        stack = new int [size];
        top = -1;
        capacity = size;
    }

    public boolean isEmpty(){
        return top == -1;
    }

    public boolean isFull(){
        return top ==(capacity-1);
    }

    public void push(int value) {
        if (top == stack.length-1){
            System.out.println("The stack is full");
            return ;
        }
        else{
            top++;
            stack[top] = value;
            System.out.println("the pushed elements " + value);

        }
    }

    public int pop() {
        if (top == -1){
            System.out.println("It is empty");
            return -1 ;
        }
        else {
            top--;
            return stack[top + 1];
        }
    }

    public int peek() {
        if (top == -1){
            System.out.println("The stack is empty");
            return -1;
        }
        else{
            return stack[top];
        }
    }

    public void display(){
        for(int i =0; i <= top; i++)
            System.out.println(stack[i]);
    }
}
