const arr=[3,93,303,38,32,4,2,8,37,1,7]

function mergesort(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
  
    return merge(mergesort(left),mergesort(right))
}

function merge(left,right){
    const newarr =[]
    while(left.length && right.length){
        if(left[0]>right[0]){
            newarr.push(right.shift())
        }else{
            newarr.push(left.shift())
        }
    }
    return [...newarr,...left,...right]
}

console.log("sorted arr",mergesort(arr))