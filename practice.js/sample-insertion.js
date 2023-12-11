const arr=[7,39,47,0,2,3,7,1,8,2,43]


const insertion = (arr)=>{

    for(let i =0; i < arr.length ; i++){
        let insert = arr[i]
        let j = i-1
        while( j>=0 && arr[j]>insert){

            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = insert
    }

    return arr
}

const sortedarr = insertion(arr)

console.log(sortedarr);