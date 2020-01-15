
function mySet(){
  this.store = []

  this.has = function(e){
    return this.store.indexOf(e) !== -1
  }

  this.values = function(){
    return this.store
  }

  this.add = function(e){
    if(!this.has(e)){
      this.store.push(e)
      return true
    }
    return false
  }

  this.remove = function(e){
    if(this.has(e)){
      let index = this.store.indexOf(e)
      this.store.splice(index,1)
      return true
    }
    return false
  }

  this.size = () => {
    return this.store.length
  }

  this.union = function(otherSet){
    let unionSet = new Set()
    let firstSet = this.values()
    let secondSet = otherSet.values()
    firstSet.forEach(e => {
      unionSet.add(e)
    })
    secondSet.forEach(e => {
      unionSet.add(e)
    })
    return unionSet
  }

  this.intersection = otherSet => {
    let intersectionSet = new mySet()
    let firstSet = this.values()
    firstSet.forEach(e => {
      if(otherSet.has(e)){
        intersectionSet.add(e)
      }
    })
    return intersectionSet.values()
  }

  this.difference = otherSet => {
    let differenceSet = new Set()
    let firstSet = this.values()
    firstSet.forEach(e => {
      if(!otherSet.has(e)){
        differenceSet.add(e)
      }
    })
    return differenceSet
  }

  this.subset = otherSet => {
    let firstSet = this.values()
    return firstSet.every(value => {
      return otherSet.has(value)
    })
  }
}

let setA = new mySet()
let setB = new mySet()
setA.add('a')
setA.add('d')
setB.add('c')
setB.add('a')
setB.add('b')

console.log(setA.difference(setB));
