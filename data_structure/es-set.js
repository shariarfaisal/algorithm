/* Methods */
// set.add(value)
//set.clear()
//set.delete(value)
//set.entries()
//set.forEach()
//set.has(value)
//set.keys()
//set.values()


// const set1 = new Set(['hey','hello','whassap','dude','lol'])
// const set2 = new Set(['hello','wow','geat','nice','hi','whassap'])


// set1.add(6)
// set1.add(7)
// console.log(set1.has(2));
// set1.delete(3)
// console.log(set1.values());
// console.log(set1.size);

// for(let item of set1){
//   console.log(item);
// }

// for(let i of set1.keys()){
//   console.log(i);
// }

// console.log(set1.entries());

// console.log([...set1]);

// let intersection = new Set([...set1].filter(x => set2.has(x)));
// console.log(intersection)

// let difference = new Set([...set1].filter(x => !set2.has(x)))
// console.log(difference);

// set1.forEach(value => {
//   console.log(value);
// })



function isSuperset(set,subset){
  for(let e of subset){
    if(!set.has(e)){
      return false
    }
  }
  return true
}

function union(setA,setB){
  let _union = new Set(setA)
  for(let e of setB){
    _union.add(e)
  }
  return _union
}

function intersection(setA,setB){
  let _intersection = new Set()
  for(let e of setB){
    if(setA.has(e)){
      _intersection.add(e)
    }
  }
  return _intersection
}

function symmetricDifference(setA,setB){
  let _difference = new Set(setA)
  for(let e of setB){
    if(_difference.has(e)){
      _difference.delete(e)
    }else{
      _difference.add(e)
    }
  }
  return _difference
}

function difference(setA,setB){
  let _difference = new Set(setA)
  for(let e of setB){
    _difference.delete(e)
  }
  return _difference
}





let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])



console.log(isSuperset(setA, setB));          // => true
console.log(union(setA, setC));              // => Set [1, 2, 3, 4, 5, 6]
console.log(intersection(setA, setC));       // => Set [3, 4]
console.log(symmetricDifference(setA, setC)); // => Set [1, 2, 5, 6]
console.log(difference(setA, setC));          // => Set [1, 2]
