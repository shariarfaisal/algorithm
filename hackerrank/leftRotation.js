
const arr = [1,2,3,4,5,6]

// function swap(arr,i,j) {
//   const temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

function leftRotation(arr,d) {
  for(let x=0; x<d;x++){
    const len = arr.length
    const temp = arr[0]
    arr.shift(0)
    arr.push(temp)
  }
  return arr
}


console.log(leftRotation(arr,2));
