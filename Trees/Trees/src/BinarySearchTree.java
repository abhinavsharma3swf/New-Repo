public class BinarySearchTree {
    Node root;

    BinarySearchTree() {
        root = null;
    }


    public void insertNode(int data){

//         if(root == null)
             root = add(root, data);
    }

    public Node add(Node node, int data) {

        if(node == null){
            node = new Node(data);
            return node;
        }

        else if(data < node.data){
            node.left = add(node.left, data);
        }

        else if(data > node.data){
            node.right = add(node.right, data);
        }
        return node;
    }

    public void inOrder () {
        inOrder(root);
    }
    private void inOrder(Node pointer) {

        if(pointer == null){
            return;
        }
            inOrder(pointer.left);
            System.out.println(pointer.data);
            inOrder(pointer.right);
    }



    public boolean search(int data){
        Node node = root;
        return searchNonRecursive(node, data);
    }

    //recursive search
    public boolean searchRecursive(Node node, int data) {

        if(node == null)
            return false;

        if(data == node.data){
            return true;
        }
        if( data < node.data){
            return searchRecursive(node.left, data);
        }
        return searchRecursive(node.right, data);
    }

    //Non-recursive search

    private boolean searchNonRecursive(Node node, int data){

        if (node == null){
            return false;
        }

        Node ptr = root;

        while(ptr != null){
            if(ptr.data == data)
                return true;
            if(data < ptr.data)
                ptr = ptr.left;
            else ptr= ptr.right;
        }
        return false;
    }

    public void delete(int data) {
        Node node = root;
        deleteLeaf(node, data);
    }

    public Node deleteLeaf(Node node, int data){
        if(node == null){
            System.out.println("Does not exist");
        }

        if(data < root.data)
            root.left = deleteLeaf(root.left, data);
        else if (data > root.data)
            root.right = deleteLeaf(root.right, data);
        else{

            //Node with one or no child
            if(root.left == null)
                return root.right;
            else if (root.right == null) {
                return root.left;
            }

            //Node with two children: Get the inorder successor (Smallest in the right subtree)
            root.data = minValue(root.right);

            //Delete the inorder successor
            root.right = deleteLeaf(root.right, root.data);
        }
        return node;
    }

    int minValue( Node node){
        int minV = node.data;
        while(node.left != null){
            minV = node.left.data;
            node = node.left;
        }
        return minV;
    }
}
