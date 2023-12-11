class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Calculate the maximum depth of a binary tree
  function maxDepth(node) {
    if (node === null) {
      return 0;
    } else {
      const leftDepth = maxDepth(node.left);
      const rightDepth = maxDepth(node.right);
      return Math.max(leftDepth, rightDepth) + 1;
    }
  }
  
  // Create a binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.left.right.left = new TreeNode(6);
  
  // Calculate and print the maximum depth
  console.log("Maximum depth:", maxDepth(root));