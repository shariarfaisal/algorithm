

function caesarCipher(str,shift){
  const alpArr = 'abcdefghijklmnopqrstubwxyz'.split('')
  let res = ''

  for(let i=0; i<str.length; i++){
    const char = str[i]
    const idx = alpArr.indexOf(char)

    if(idx === -1){
      res += char
      continue
    }

    const encodedIdx = (idx + shift) % 26;
    res += alpArr[encodedIdx]
  }
  return res
}

console.log(caesarCipher('faisal',1)); //gbjtbm
