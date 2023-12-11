class Stack{
    constructor(){
        this.value = []
    }
    push(element){
        this.value.push(element)
    }
    pop(){
        return this.value.pop()
    }
    peak(){
        return this.value[this.value.length-1]
    }

    print(){
        console.log(this.value.toString())
    }


    
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.peak())
stack.pop()
stack.print()
