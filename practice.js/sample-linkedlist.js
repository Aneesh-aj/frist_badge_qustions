class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head= null
        this.tail =null
    }
    insert(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }
    display(){
        let current= this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}


const list = new linkedlist()

list.insert(12)
list.insert(44)
list.insert(88)
list.insert(2)
list.display()