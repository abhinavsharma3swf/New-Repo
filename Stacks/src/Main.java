import java.util.Arrays;
import java.util.LinkedList;
import java.util.Scanner;
import java.util.Stack;

//We will be implementing the stackslist with traditioal array list, linked list.
//We will be using push, pop, peek, isempty and size functions


public class Main {
    public static void main(String[] args) {

        String expression = ("");

        Stack<Integer> stk = new Stack<>();

        LinkedList<Employee> emp = new LinkedList<>();

        emp.add("")

        boolean answer = Exam.checkExpression(expression);

        if (answer == true) {

            System.out.println("YES");
        } else {
            System.out.println("NO");
        }


        stk.push(1);
        stk.push(2);
        stk.push(3);
        stk.push(4);
        stk.push(5);
        stk.push(6);
        System.out.println(stk);

        recursiveflip(stk);
        System.out.println(stk);
    }

        public static void recursiveflip (Stack < Integer > stk) {

            if (stk.empty())
                return;

            else {
                int i = stk.pop();
                recursiveflip(stk);
                insertStack(stk, i);

            }
        }

        private static void insertStack (Stack < Integer > stk,int i){
            if (stk.empty()) {
                stk.push(i);
                return;
            }

            int top = stk.pop();
            insertStack(stk, i);
            stk.push(top);
        }

    }
