function bubble(arr){

    for(let i =0; i < arr.length -1; i++){
       for(let j =i+1; j < arr.length ; j++){
           if(arr[i]>arr[j]){
               let temp = arr[i]
               arr[i] = arr[j]
               arr[j] = temp
           }
       }
    }
    return arr
}

const arr =[8, 2, 4, 1 , 9, 3, 5 ,6]

console.log("new array :", bubble(arr))