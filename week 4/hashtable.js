class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total =0
        for(let i=0;i < key.length;i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        let index = this.hash(key)
         let bucket = this.table[index]
         if(!bucket){
            bucket = [[key,value]]
            this.table[index]= bucket
         }else{
            const sameItem = bucket.find(item => item[0] === key)
            if(sameItem){
                sameItem[1] = value
            }else{
                bucket.push([key,value])
            }
         }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameItem = bucket.find(item => item[0] === key)
             if(sameItem){
                return sameItem[1]
             }
        }
        return undefined
    }
    delete(key){
        const index = this.hesh(key)
        const bucket = this.table[index]
        if(bucket){
            const sameItem = bucket.find(item => item[0]===key)
            if(sameItem){
                bucket.splice(bucket.indexof(sameItem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new Hashtable(50)

table.set("name","aneesh")
table.set("age",18)
table.set("skill","nothing")
table.set("place","mongam")

table.display()
// table.get("name")