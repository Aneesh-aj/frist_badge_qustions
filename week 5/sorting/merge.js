function mergesort(arr){

    if(arr.length<2){
        return arr
    }
      
    let mid = Math.floor(arr.length/2)
    
    let arrleft=arr.slice(0,mid)
    let arrright=arr.slice(mid)

    return merge(mergesort(arrleft),mergesort(arrright))

}

function merge(arrleft,arrright){
    const sortedarr = []
    while(arrleft.length && arrright.length){
        if(arrleft[0]>arrright[0]){
            sortedarr.push(arrright.shift())
        }else{
            sortedarr.push(arrleft.shift())
        }
    }

    return [...sortedarr,...arrleft,...arrright]
}

const arr =[ 8,3,9,2,0,3,1,7]

console.log("new array :",mergesort(arr))
