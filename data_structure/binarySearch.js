

function binarySearch(sortedArr,value){
  let left = 0
  let right = sortedArr.length -1

  while(left <= right){
    const mid = Math.floor((left+right) / 2)
    const midVal = sortedArr[mid]
    if(midVal === value){
      return mid
    }else if(midVal < value){
      left = mid + 1
    }else{
      right = mid -1
    }
  }
  return -1
}
const xx = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]
console.log(binarySearch(xx,3));
