// Bubble sort
const arr = [5,4,7,9,2,1,3,6]

function swap(arr,index1,index2) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function bubbleSort(arr) {
  const len = arr.length - 1
  for(let i = len; i>0; i--){
    for(let x = 0; x<i; x++){
      c++
      if(arr[x]>arr[x+1]){
        swap(arr,x,x+1)
      }
    }
  }
  console.log(arr);
}

bubbleSort(arr)
