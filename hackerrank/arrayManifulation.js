const queries = [
  [1,5,3],
  [4,8,7],
  [6,9,1]
]

function arrayManipulation(n,queries) {
  const arr = Array(n+2).fill(0)

  for(let [a,b,k] of queries){
    arr[a] += k
    arr[b+1] -= k
  }

  let max = 0, temp = 0
  for(let i of arr){
    temp += i
    if(temp > max){
      max = temp
    }
  }
  return max
}

arrayManipulation(10,queries)
