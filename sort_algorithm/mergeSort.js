
const arr = [5,4,7,9,2,1,3,6]

// [ 5 ] [ 4 ]
// [ 4, 5 ]
// [ 7 ] [ 9 ]
// [ 7, 9 ]
// [ 4, 5 ] [ 7, 9 ]
// [ 4, 5, 7, 9 ]
// [ 2 ] [ 1 ]
// [ 1, 2 ]
// [ 3 ] [ 6 ]
// [ 3, 6 ]
// [ 1, 2 ] [ 3, 6 ]
// [ 1, 2, 3, 6 ]
// [ 4, 5, 7, 9 ] [ 1, 2, 3, 6 ]
// [ 1, 2, 3, 4, 5, 6, 7, 9 ]


function mergeSort(arr) {
  let len =  arr.length
  if(len < 2){
    return arr
  }
  let mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right = arr.slice(mid)

  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
  let result = [],
      lLen = left.length,
      rLen = right.length
      l = 0,
      r = 0

  while(l<lLen & r < rLen){
    if(left[l] < right[r]){
      result.push(left[l++])
    }else{
      result.push(right[r++])
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r))
}

mergeSort(arr)
