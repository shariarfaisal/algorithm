
// insertion sort ....

const arr = [5,4,7,9,2,1,3,6]

function insertion(arr) {
  const len = arr.length
  for(let i=1; i<len; i++){
    let current = arr[i]
    let x = i - 1
    while((x>-1) && (arr[x] > current)){
      arr[x+1] = arr[x]
      x--
    }
    arr[x+1] = current
  }
  return arr
}

console.log(insertionSort(arr));
