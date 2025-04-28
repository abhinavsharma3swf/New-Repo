import java.util.Scanner;
import java.util.Stack;

public class Postfix {

    public int postfix(String exp) {

        Stack<Integer> stack = new Stack<>();
        String[] tokens = exp.split(" ");

        for (int i = 0; i < tokens.length; i++) {

            char c = ' ';
//            while(c != '+' ||)

            if (tokens[i] != null ) {
                stack.push(Integer.parseInt(tokens[i]));
//                stack.push(Integer.parseInt(tokens[i]));
//                int operand2 = stack.pop();
//                int operand1 = stack.pop();
//                int result = performOperation(operand1, operand2, tokens[i]);
//                stack.push(result);
            }
        }
        return stack.pop();
    }



    private static int performOperation(int operand1, int operand2, String operator) {
        switch (operator) {
            case "+":
                return operand1 + operand2;
            case "-":
                return operand1 - operand2;
            case "*":
                return operand1 * operand2;
            case "/":
                return operand1 / operand2;
            default:
                System.out.println("Invalid operator: " + operator);
        }
        return operand1;
    }
}


//private static boolean isNumber(String token) {
//    try {
//        Integer.parseInt(token);
//        return true;
//    } catch (NumberFormatException e) {
//        return false;
//    }
//}


