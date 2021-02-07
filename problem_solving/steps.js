//
// function steps(n){
//   for(let i=1; i<= n; i++){
//     let step = ''
//     for(let hash=i; hash > 0; hash--){
//       step += '#'
//     }
//
//     for(let space=n-i; space >0; space--){
//       step += ' '
//     }
//     console.log(JSON.stringify(step));
//   }
// }
//
// steps(5)

function steps(n) {
  for(let i=1; i <= n; i++){
    let hash = '#'.repeat(i)
    let space = ' '.repeat(n-i)
    console.log(JSON.stringify(hash+space));
  }
}

steps(8)
