class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
  
      for (const char of word) {
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }
        currentNode = currentNode.children.get(char);
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (const char of word) {
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
  
      for (const char of prefix) {
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return true;
    }
  
    getWordsWithPrefix(prefix) {
      const words = [];
      const prefixNode = this.findPrefixNode(prefix);
  
      if (prefixNode) {
        this.collectWords(prefixNode, prefix, words);
      }
  
      return words;
    }
  
    findPrefixNode(prefix) {
      let currentNode = this.root;
  
      for (const char of prefix) {
        if (!currentNode.children.has(char)) {
          return null;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return currentNode;
    }
  
    collectWords(node, prefix, words) {
      if (node.isEndOfWord) {
        words.push(prefix);
      }
  
      for (const [char, nextNode] of node.children) {
        const nextPrefix = prefix + char;
        this.collectWords(nextNode, nextPrefix, words);
      }
    }
  
    delete(word) {
      this.deleteHelper(this.root, word, 0);
    }
  
    deleteHelper(currentNode, word, index) {
      if (index === word.length) {
        if (!currentNode.isEndOfWord) {
          return;
        }
        currentNode.isEndOfWord = false;
        return;
      }
  
      const char = word[index];
      if (!currentNode.children.has(char)) {
        return;
      }
  
      const nextNode = currentNode.children.get(char);
      this.deleteHelper(nextNode, word, index + 1);
  
      if (!nextNode.isEndOfWord && nextNode.children.size === 0) {
        currentNode.children.delete(char);
      }
    }
  }
  
  // Example usage:
  const trie = new Trie();
  
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("app");
  trie.insert("bat");
  
  console.log(trie.search("apple")); // Output: true
  console.log(trie.search("app")); // Output: true
  console.log(trie.search("banana")); // Output: true
  console.log(trie.search("batman")); // Output: false
  
  console.log(trie.startsWith("app")); // Output: true
  console.log(trie.startsWith("ba")); // Output: true
  console.log(trie.startsWith("ban")); // Output: true
  console.log(trie.startsWith("bat")); // Output: true
  console.log(trie.startsWith("batman")); // Output: false
  
  console.log(trie.getWordsWithPrefix("app")); // Output: ["app", "apple"]
  console.log(trie.getWordsWithPrefix("ba")); // Output: ["banana", "bat"]
  
  trie.delete("apple");
  console.log(trie.search("apple")); // Output: false
  console.log(trie.search("app")); // Output: true
  console.log(trie.getWordsWithPrefix("app")); // Output: ["app"]
  