
function vowels(str){
  str = str.toLowerCase()
  const vwls = 'aeiou'
  let count = 0
  for(let i=0; i<str.length; i++){
    let is = vwls.includes(str[i])
    if(is){
      count++
    }
  }
  console.log(count);
}

vowels('My name is faisal.')
