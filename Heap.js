class MaxBinaryHeap{
    constuctor(){
        this.values = []
    }
    bubbleUp(){
        let index = this.values.length-1
        let parentIndex = Math.floor((index-1)/2)
        while(this.values[parentIndex]<this.values[index]){
            let temp = this.values[index]
            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = temp
        }
        return this.values
    }
    insert(val){
        this.values.push(val)
        this.bubbleUp()
    }
}