class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
this.first = null
this.last = null
this.size = 0
    }

    pop(){
        if(!this.head)return undefined
        let oldHead = this.head
        this.head = this.head.next
        this.length--;
        if(this.length === 0){
            this.tail = null
        }
        return oldHead
    }

    //add to start of list
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
            newNode.next = this.head
            this.head = newNode
            this.length++
            return this
    }

}