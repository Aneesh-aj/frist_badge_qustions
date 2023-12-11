function quick(arr){

    if(arr.length<=1){
        return arr
    }
      
    let pivotindex = arr.length -1
    let pivot = arr[pivotindex]

    const left =[]
    const right =[]
    for(let i =0; i < arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    
    }
     let arrLeft = quick(left)
     let  arrRight = quick(right)

     return [...arrLeft,pivot,...arrRight]
}

const  arr=[ 8, 4,3,2, 9, 8, 2, 1, 6, 77, 3]

console.log(quick(arr))