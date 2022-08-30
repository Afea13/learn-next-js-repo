export const mergeSort = (arr) => {
   if(arr.length < 2) {
    return arr
   }
   const middleIndex = Math.floor(arr.length /2)
   const leftArr = arr.slice(0,middleIndex)
   const rightArr = arr.slice(middleIndex,arr.length)

   /*console.log(middleIndex)
    console.log(leftArr)
    console.log(rightArr)*/
   return merge(mergeSort(leftArr),mergeSort(rightArr))
}

const merge =( leftArr, rightArr)=>{
    console.log(leftArr)
    console.log(rightArr)
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            resultArr.push(leftArr[leftIndex])
            leftIndex = leftIndex + 1
        }
        else {
            resultArr.push(rightArr[rightIndex])
            rightIndex += 1

        }
    }
let res = resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
console.log(res)
    return res
}