const arr=[1,3,5,7,8,10,13,16,19,22]

const target= 13

const binarysearch =()=>{

    let left =0
    let right=arr.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid]===target){
            return mid
        }else if(arr[mid]<target){
            left = mid+1
        }else if(arr[mid]>target){
            right =mid-1
        }
    }

    return -1
}


const result = binarysearch(arr,target)

console.log(result);