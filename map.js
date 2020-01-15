/* Methods */
// map.set(key,value)
// map.get(key)
//map.keys()
//map.values()
//map.entries()
//map.forEach((value,key) => { ... })
//map.has(key)
//map.delete(key)

let myMap = new Map()

// let keyString = 'a string'
// let keyObj = {}
// let keyFunc = function(){}
//
// myMap.set(keyString,'this is the string keys value')
// myMap.set(keyObj,'this is the object keys value')
// myMap.set(keyFunc,'this is the object functions value')


myMap.set('a','Faisal')
myMap.set('b','Farhad')
myMap.set('c','Arafat')
myMap.set('d','Hasan')

// for(let [key,value] of myMap){
//   console.log(`${key}: ${value}`);
// }

// for(let key of myMap.keys()){
//   console.log(key);
// }
//
// for(let value of myMap.values()){
//   console.log(value);
// }

// const map = new Map([['a','hello'],['b','hey']])
// console.log(map); // {key: value,key: value}
// console.log(Array.from(map)); //[['a','hello'],['b','hey']]



// let first = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ])
//
// let second = new Map([
//   [1, 'uno'],
//   [2, 'dos']
// ])
//
// // Merge maps with an array. The last repeated key wins.
// let merged = new Map([...first, ...second, [1, 'eins']])
//
// console.log(merged.get(1)) // eins
// console.log(merged.get(2)) // dos
// console.log(merged.get(3)) // three
