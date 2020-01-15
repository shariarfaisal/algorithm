
const hash = (string,max) => {
  let _hash = 0
  for(let i=0; i<string.length; i++){
    _hash += string.charCodeAt(i)
  }
  console.log(_hash);
  return _hash % max
}

const HashTable = function(){
  let store = []
  const storeLimit = 4

  this.print = () => {
    console.log(store);
  }

  this.add = (key,value) => {
    let index = hash(key,storeLimit)
    if(store[index] === undefined){
      store[index] = [
        [key,value]
      ]
    }else{
      let inserted = false
      for(let i=0; i<store[index].length; i++){
        if(store[index][i][0] === key){
          store[index][i][1] === value
          inserted = true
        }
      }
      if(inserted === false){
        store[index].push([key,value])
      }
    }
  }

  this.remove = (key) => {
    let index = hash(key,storeLimit)
    if(store[index].length === 1 && store[index][0][0] === key){
      delete store[index]
    }else{
      for(let i=0; i<store[index]; i++){
        if(store[index][i][0] === key){
          delete store[index][i]
        }
      }
    }
  }

  this.lookup = (key) => {
    let index = hash(key,storeLimit)
    if(store[index] === undefined){
      return undefined
    }else{
      for(let i=0; i<store[index].length; i++){
        if(store[index][i][0] === key){
          return store[index][i][0]
        }
      }
    }
  }


}


console.log(hash('hello',10));

let ht = new HashTable()
ht.add('hello','world')
ht.add('hey','whassap')
ht.add('hi','how you doin')

console.log(ht.lookup('hi'));
ht.print()
