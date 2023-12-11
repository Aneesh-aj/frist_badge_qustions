class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Binary{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            this.internode(this.root , node)
        }
    }
    internode(root,node){
        if(node.value < root.value){
            if(root.left===null){
                root.left = node
            }else{
                this.internode(root.left , node)
            }
        }else{
             if(root.right === null){
                 root.right = node
             }else{
                 this.internode(root.right,node)
             }
        }
    }
    search(root , value){
        if(root === null){
            return false
        }else{
            if(value == root.value){
                return true
            }else if(value < root.value){
                return this.search(root.left , value)
            }else{
                return this.search(root.right , value)
            }
        }
    }
    levelorder(){
        const queue=[]
        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}


const obj = new Binary()

obj.insert(10)
obj.insert(5)
obj.insert(6)
obj.insert(12)
obj.insert(15)
obj.insert(4)
obj.insert(18)

console.log(obj.search(58))

console.log("-----------------------------------")

obj.levelorder()