
const strings = ['ab','abs','bc','abcd','ab']
const queries = ['ab','abc','bc']

function sparesArrays(strings, queries) {
  const result = []
  for(let q of queries){
    let x = 0
    for(let s of strings){
      if(s === q){
        x++
      }
    }
    result.push(x)
    x = 0
  }
  console.log(result);
}

sparesArrays(strings,queries)
