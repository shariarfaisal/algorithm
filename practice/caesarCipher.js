// input: (abcdef,1) ; output: bcdef

function caesarCipher(str,shift){
  const chars = 'abcdefghijklmnopqrstuvwxyz'.split('')
  str = str.split('')
  let res = ''
  for(let i in str){
    const idx = chars.indexOf(str[i])
    if(idx === -1){
      res += str[idx]
      continue
    }
    const f_idx = (idx + shift) % 26
    res += chars[f_idx]
  }
  return res
}

console.log(caesarCipher('abcd',1));
