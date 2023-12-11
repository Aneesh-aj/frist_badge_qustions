class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(value){
        const node = new Node(value)

        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next =node
            this.tail = node
          
        }
    }
    dequeue(){
        
        let temp = this.head.value
        
        return temp
        
    }

    print(){
        let current = this.head
        while(current){
               console.log(current.value)
               current = current.next
        }
    }
}

const que = new Queue()

que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.enqueue(40)

que.print()

// console.log("out ",que.dequeue())



