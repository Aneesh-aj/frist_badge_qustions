
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }
    push(value){
        const node = new Node(value)

            node.next = this.top
            this.top = node
    }
    pop(){
        let temp = this.top.value
        this.top = this.top.next 
        return temp
    }
    peak(){
        return this.top.value
    }
        
    print(){
        let current = this.top
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const stack = new Stack()
 
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.print()
console.log("out ",stack.pop())
stack.print()
console.log("the peak element" ,stack.peak())