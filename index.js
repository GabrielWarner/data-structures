class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    //adds to end of list
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

    //removes from end of list
    pop(){
        if(!this.head)return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    //remove from start of list
    shift(){
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
    unShift(val){
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

    //returns value of a given index
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }

    //sets value of a node at a given index
    set(index, value){
    let foundNode = this.get(index)
       if(foundNode){
        foundNode.val = value
        return true
       }
       return false
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false
        if(index == this.length) return !!this.push(value)
        if(index == 0) return !!this.unShift(value)
        let nodeBefore = this.get(index - 1)
        let thirdNode = nodeBefore.next
        let newNode = new Node(value)
        nodeBefore.next = newNode
        newNode.next = thirdNode
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index == this.length - 1) return !!this.pop(val)
        if(index == 0) return !!this.shift()
        let prev = this.get(index - 1)
        let nodeToRemove = prev.next
        prev.next = nodeToRemove.next
        this.length--
        return nodeToRemove

    }
}

let list = new SinglyLinkedList()
list.push('hi')
list.push('there')
list.push('YOLO')
list.remove(0)


console.log(list)

