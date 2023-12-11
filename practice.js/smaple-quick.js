const  arr=[ 8, 4,3,2, 9, 8, 2, 1, 6, 77, 3]


function quick(arr){
    if(arr.length <=1){
        return arr
    }

    let pivotindex = arr.length-1
    let pivot = arr[pivotindex]

    const left=[]
    const right=[]

    for(let i=0; i < arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    let leftarr = quick(left)
    let rightarr = quick(right)

    return [...leftarr,pivot,...rightarr]

}


console.log(quick(arr))