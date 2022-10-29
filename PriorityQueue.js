class Node{
    constructor(val,priority){
        this.val = val
        this.priority = priority
    }
}
//priority que as a min binary heap
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.values.length-1
        const value = this.values[index]
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex]
            if(value.priority>=parent.priority) break
            this.values[parentIndex] = value
            this.values[index] = parent
            index = parentIndex
        }
        return this.values
    }
    dequeue(){
        const min = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end
            this.sinkDown()
        }
        return min
    }
    sinkDown(){
        let index = 0
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftChildIdx = 2 * index + 1
            let rightChildIdx = 2 * index + 2
            let leftChild,rightChild
            let swap = null

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild.priority<element.priority){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if((swap === null && rightChild.priority < element.priority) ||(swap !== null && rightChild.priority < leftChild.priority)){
                    swap =rightChildIdx
            }
        }
        if(swap === null) break
        this.values[index] = this.values[swap]
        this.values[swap] = element
        index = swap
        }
    }
}

let ER = new PriorityQueue()
ER.enqueue("cold",4)
ER.enqueue("gunnshot",1)
ER.enqueue("high fever",3)
ER.enqueue("head ache",5)
ER.enqueue("broken arm",2)
ER.dequeue()
ER.dequeue()
ER.dequeue()
ER.dequeue()
console.log((ER))