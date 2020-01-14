
function swap(arr,i,j){
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubbleSort(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length -i; j++){
      if(arr[j] > arr[j+1]){
        swap(arr,j,j+1)
      }
    }
  }
  console.log(arr);
  return arr
}

function selectionSort(arr){
  for(let i=0; i<arr.length; i++){
    let swpIdx = i
    for(let j=i+1; j<arr.length; j++){
      if(arr[j] < arr[swpIdx]){
        swpIdx = j
      }
    }
    swap(arr,i,swpIdx)
  }
  console.log(arr);
  return arr
}

bubbleSort([3,2,5,6,3,4,5,7,9,12,34])
selectionSort([3,2,5,6,3,4,5,7,9,12,34])
