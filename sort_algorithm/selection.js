// Bubble sort
const arr = [5,4,7,9,2,1,3,6]

function selectionSort(arr) {
  let min, temp, len = arr.length
  for(let i = 0; i < len; i++){
    min = i
    for(let x= i+1; x < len; x++){
      if(arr[min] > arr[x]){
        min = x
      }
    }

    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  console.log(arr);
}

selectionSort(arr)
