function selection(arr){
      
    for(let i =0; i< arr.length ; i++){
         let min = i
        for(let j = i+1; j < arr.length ; j++){
               if(arr[j]>arr[min]){
                   min = j
               }
        }
        if(i!==min){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

const arr = [8, 2, 4, 1 , 9, 3, 5 ,6]

console.log("new arr :",selection(arr))