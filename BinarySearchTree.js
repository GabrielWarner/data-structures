class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(val){
        const newNode = new Node(val)
        if(this.root === null){
            this.root = newNode
            return this
        }else{
            let current = this.root
            while(true){
                if(val === current.value) return undefined
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    }else{
                        current = current.left
                    }
                }else if(val > current.value){
                    if(current.right === null){
                        current.right = newNode
                        return this
                    }else{
                        current = current.right
                    }
                }
                
            }
        }
    }
}
let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(JSON.stringify(tree))

