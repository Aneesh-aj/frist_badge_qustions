const  arr=[7,39,47,0,2,3,7,1,8,2,43]


const selection = (arr)=>{
    
    for(let i=0; i < arr.length; i++){
        let min=i
        for(let j=i+1 ; j< arr.length ; j++){
            if(arr[j]>arr[min]){
                 min = j
            }
        }
        if(i!==min){
            let temp = arr[min]
            arr[min]=arr[i]
            arr[i]= temp 
        }
    }
    return arr
}

const sortedarr = selection(arr)

console.log(sortedarr)