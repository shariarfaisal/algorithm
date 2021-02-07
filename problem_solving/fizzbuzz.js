
const isFizzbuzz = (n) => {
  if(n % 5 === 0 && n % 3 === 0){
    return 'FizzBuzz'
  }else if(n%5 === 0){
    return 'Fizz'
  }else if(n%3 === 0){
    return 'Buzz'
  }else{
    return n
  }
}

const collection = [10,21,15,20,27,30,35,40,50,60,90,120]

collection.forEach(i => {
  console.log(isFizzbuzz(i));
})
