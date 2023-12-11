class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function getHeight(root) {
    if (root === null) {
        return -1; // Height of an empty tree is -1
    }

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(18);
root.right.left = new TreeNode(13)
root.left.left.left = new TreeNode(2)
root.left.left.right = new TreeNode(4)
root.right.left.left = new TreeNode(11)

const height = getHeight(root);
console.log("Height of BST:", height); // Output: 3

