
function pyramid(n){
  for(let i=1; i<=n; i++){
    const padding = ' '.repeat(n-i)
    console.log(n-i);
    const hashes = '#'.repeat(i * 2 -1)

    console.log(JSON.stringify(padding+hashes+padding));
  }
}

pyramid(6)
