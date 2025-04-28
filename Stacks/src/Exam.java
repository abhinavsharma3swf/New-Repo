
import java.util.Stack;


public class Exam {

    public static boolean checkExpression(String expression) {

        Stack<Character> s = new Stack<>();

        //There are three ways to take the character out of a string.
        //Use chatAt
        //use split
        //use <string name>.toCharArray

        for (int i = 0; i < expression.length(); i++) {

            char ch = expression.charAt(i);
            System.out.println(ch);


            if (ch == '[' || ch == '{' || ch == '(')

                s.push(ch);

            else if (ch == ']' || ch == '}' || ch == ')') {

                if (s.empty())
                    return false;

                switch (ch) {
                    case ']':
                        if (s.pop() != '[')
                            return false;
                        break;

                    case '}':
                        if (s.pop() != '{')
                            return false;
                        break;

                    case ')':
                        if (s.pop() != '(')
                            return false;
                        break;
                    default:
                        return false;
                }
            }
        }

        return true;
    }
}





