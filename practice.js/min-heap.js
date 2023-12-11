// class minheap{
//     constructor(){
//         this.heap =[]
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapifyup(this.heap.length-1)
//     }

//     heapifyup(index){
//         let parentindex = Math.floor((index-1)/2)
//         if(index>0 && this.heap[index]<this.heap[parentindex]){
//             this.swap(index,parentindex)
//             this.heapifyup(parentindex)
//         }
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
//     display(){
//         return console.log(this.heap)
//     }
// }




class minheap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyup(this.heap.length-1)
    }
    heapifyup(index){
        const parentindex = Math.floor((index-1)/2)
        if(index>0 && this.heap[index]<this.heap[parentindex]){
            [this.heap[index],this.heap[parentindex]]=[this.heap[parentindex],this.heap[index]]
            this.heapifyup(parentindex)
        }
    }
    display(){
        return console.log(this.heap)
    }

    remove(){
        if(this.heap.length === 0){
            return "underflow"
        }

        [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
        let popped = this.heap.pop()
        this.heapifydown(0)
        return popped
    }

    heapifydown(index){
        let left = (2*index)+1
        let right = (2*index)+2
        let largestindex = index

        if(left< this.heap.length && this.heap[left] < this.heap[largestindex]){
             largestindex = left
        }
        if(right < this.heap.length && this.heap[right]< this.heap[largestindex]){
            largestindex = right
        }
        if(largestindex !== index){
            [this.heap[index],this.heap[largestindex]] = [this.heap[largestindex],this.heap[index]]
            this.heapifydown(largestindex)
        }
    }
}


const heap = new minheap()

heap.insert(2)
heap.insert(44)
heap.insert(3)
heap.insert(42)
heap.insert(10)
heap.insert(-1)
heap.insert(5)

heap.display()