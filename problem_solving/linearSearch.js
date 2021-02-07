
function indexOf(arr,val){
  for(let i in arr){
    if(arr[i] === val){
      return i
    }
  }
  return -1
}

function includes(arr,val){
  if(typeof arr !== 'object')
    arr = arr.split('')
  for(let i=0; i<arr.length; i++){
    if(arr[i] === val){
      return true
    }
  }
  return false
}

function find(arr,val){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === val){
      return arr[i]
    }
  }
  return undefined
}

console.log(indexOf(['hello','world','nice','to','meet','you'],'world'));
console.log(find(['hello','world','nice','to','meet','you'],'world'));
console.log(includes(['hello','world','nice','to','meet','you'],'world'));
console.log(includes('faisal','h'));
