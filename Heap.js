class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val)
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.values.length-1
        const value = this.values[index]
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex]
            if(value<=parent) break
            this.values[parentIndex] = value
            this.values[index] = parent
            index = parentIndex
        }
        return this.values
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(22)
heap.insert(33)
heap.insert(111)
heap.insert(22)
heap.insert(44)
heap.insert(34)
heap.insert(67)
heap.insert(112)

console.log(heap)