
function stringPattern(str,val){
  let count = 0
  for(let i=0; i<str.length; i++){
    for(let v=0; v<val.length; v++){
      if(str[i+v] !== val[v]){
        break
      }
      if(v === val.length -1){
        count++
      }
    }
  }
  console.log(count);
  return count
}

stringPattern('hello hello','el')
