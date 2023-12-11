const arr=[7,39,47,0,2,3,7,1,8,2,43]

const bubble = (arr)=>{

    for(let i =0; i < arr.length ; i++){
        for(let j=i+1; j < arr.length;j++){
              if(arr[i]>arr[j]){
                  let temp = arr[i]
                  arr[i]= arr[j]
                  arr[j] = temp
              }
        }
    }

    return arr
}

const sortedarray = bubble(arr)
console.log(sortedarray);