
function capitalize(str){
  str = str.split(' ')
  const length = str.length
  let res = []
  for(let i in str){
    res[i] = str[i][0].toUpperCase()+str[i].substr(1)
  }
  return res.join(' ')
}

console.log(capitalize('hey whassap! i am looking for you..'));
