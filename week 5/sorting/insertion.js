function insertion(arr){
     
    for(let i= 0; i < arr.length ; i++){
        let insert = arr[i]
        let j = i-1

        while( j >= 0 && insert<arr[j]){
             arr[j+1]=arr[j]

            j = j-1
        }
        arr[j+1] = insert
    }
    return arr
}  

const arr =[8, 2, 4, 1 , 9, 3, 5 ,6]

console.log("new arr :",insertion(arr))