const arr=[1,3,5,7,8,10,13,16,19,22]
const target=16

const recursivebinery=(arr,target,left=0,right=arr.length-1)=>{
      if(left>=right){
           return -1
      }

      let mid = Math.floor((left+right)/2)
      if(arr[mid]===target){
           return mid
      }
      else if(arr[mid]<target){
          return recursivebinery(arr,target,mid+1,right)
      }else if(arr[mid]>target){
          return recursivebinery(arr,target,left,mid-1)
      }
}

const result = recursivebinery(arr,target)

console.log(result)