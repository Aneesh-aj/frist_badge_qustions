class Graph{
    constructor(){
        this.adlist={}
    }
    addvertex(vertex){
        if(!this.adlist[vertex]){
            this.adlist[vertex]= new Set()
        }
    }
    addEdge(vertex1,vertex2){
         if(!this.adlist[vertex1]){
             this.addvertex(vertex1)
         }
         if(!this.adlist[vertex2]){
             this.addvertex(vertex2)
         }
         this.adlist[vertex1].add(vertex2)
         this.adlist[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adlist){
            console.log(vertex+"->"+[...this.adlist[vertex]])
        }
    }
}

const graph = new Graph()

graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addvertex("D")
graph.addvertex("F")

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","D")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.addEdge("F","A")

graph.display()