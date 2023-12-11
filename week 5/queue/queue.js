class Queue{
    constructor(){
        this.value = []
    }
    enqueue(element){
        this.value.push(element)
    }
    dequeue(){
        return this.value.shift()
    }
    print(){
        console.log(this.value.toString())
    }
    isEmpty(){
        return this.value.length === 0
    }
    peak(){
        if(!this.isEmpty()){
            return this.value[0]
        }
        return null
    }

}

const queue = new Queue()


queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.peak())

queue.print()
console.log(queue.dequeue())

queue.print()