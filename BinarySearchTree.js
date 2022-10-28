class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(val){
    if(this.root === null) return false
    let current = this.root
    let found = false
    while(!found && current){
        if(val < current.value){
            current = current.left
        }else if(value > current.value){
            current = current.right
        }else{
            found = true
        }
    }
    if(!found == false)return undefined
    return current
  }
  BFS(){
    let node = this.root
        data = [],
        queue = [];
        queue.push(node)

        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
  }

  DFSPreOrder(){
    const data = []
    let current = this.root
    const traverse = (node) =>{
        data.push(node.value)
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }

  BFSPostOrder(){
    const data = []
    const traverse = (node) => {
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
        data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  DFSInorder(){
    const data = []
    const traverse = (node) => {
        if(node.left) traverse(node.left)
        data.push(node.value)
        if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(JSON.stringify(tree));
