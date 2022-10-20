class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null

    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length= 0
    }
    push(val){
        const newNode = new Node(val)
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length == 0) return undefined
        const end = this.tail
        if(this.length == 1){
            this.tail = null
            this.head = null
        }else{
            this.tail = end.prev
            this.tail.next = null
            end.prev = null
        }
        this.length--
        return end
    }
    //removes from beginning
    shift(){
        if(this.length == 0 )return undefined
        oldHead = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    //add to beginning
    unshift(val){
        const newNode = new Node(val)
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter, curr;
        if(index <= this.length / 2){
            counter = 0
            curr = this.head
            while(counter != index){
                curr = curr.next
                counter++
            }
        }else{
            counter = this.length - 1
            curr = this.tail
            while(counter != index){
                curr = curr.prev
                counter--
            }
        }
        return curr
    }
    set(index, val){
        const foundNode = this.get(index)
        if(foundNode !== null){
            foundNode.val = val
            return true
        }
        return false
    }


}

const list = new DoublyLinkedList()
list.push("oi")
list.push("hi")
list.set(0, "faka")
console.log(list)