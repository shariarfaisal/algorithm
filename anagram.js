//
//
// function anagrams(strA,strB){
//   strA = strA.toLowerCase().replace(/[\W_]+/g,'')
//   strB = strB.toLowerCase().replace(/[\W_]+/g,'')
//
//   if(strA.length !== strB.length) return false
//
//   const charsA = {}
//   for(let i=0; i<strA.length; i++){
//     const aChar = strA[i]
//     charsA[aChar] = charsA[aChar]+1 || 1
//   }
//
//   for(let i=0; i<strB.length; i++){
//     const bChar = strB[i]
//     if(!charsA[bChar]){
//       return false
//     }else{
//       charsA[bChar]--
//       console.log(charsA[bChar]);
//     }
//   }
//
//   return true
// }
//
// console.log(anagrams('heart','treah'));
const tm = new Date()
function anagrams(stra,strb){
  stra = stra.toLowerCase().replace(/[\W_]+/g,'').split('').sort().join()
  strb = strb.toLowerCase().replace(/[\W_]+/g,'').split('').sort().join()

  return stra === strb
}

console.log(anagrams('heart','treah'));
console.log(new Date() - tm);
