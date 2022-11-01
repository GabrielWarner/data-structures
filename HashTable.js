class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key, value){
        const index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
    get(key){
        const index = this._hash(key)
        const arr = this.keyMap[index]
        if(this.keyMap[index]){
            for(let i = 0;i < arr.length; i++){
                if(arr[i][0] === key){
                    return arr[i][1]
                }
            }
        }
        return undefined
    }
}

let ht = new HashTable()
ht.set("Hi","Yes")
ht.set("Oi","No")
ht.set("Habla","No")
console.log(ht.get("Oi"))
