
// function chunk(array,size){
//   let arr = []
//   let len = array % size === 0 ? array.length / size : (array.length / size) + 1
//   let x = 0
//   for(let i=1; i<len; i++){
//     arr.push(array.slice(x,size+x))
//     x = size + x
//   }
//   return arr
// }
//
// console.log(chunk([1,2,3,4,5,6,7,8,9,10,11,12,13],4));

function chunk(array,size){
  let res = []

  for(let i=0; i<array.length; i++){
    const item = array[i]
    const last = res[res.length -1]

    if(!last || last.length === size){
      res.push([item])
    }else{
      last.push(item)
    }
  }

  return res
}

console.log(chunk([1,2,3,4,5,6,7,8],3));
