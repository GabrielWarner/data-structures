class Node {
    conructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.head = null
        this.length = 0
    }

    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    shift(){
        if(!this.head)return undefined
        oldHead = this.heaad
        this.head = this.head.next
        this.length--
        return oldHead
    }
}