//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        BinarySearchTree binarySearchTree = new BinarySearchTree();

        binarySearchTree.insertNode(20);
        binarySearchTree.insertNode(10);
        binarySearchTree.insertNode(50);
        binarySearchTree.insertNode(30);

//        binarySearchTree.inOrder();

//        binarySearchTree.search(10);

        binarySearchTree.delete(30);
        binarySearchTree.inOrder();

    }
}