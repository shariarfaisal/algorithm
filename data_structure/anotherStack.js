
function anotherStack(){
  this.count = 0
  this.storage = {}

  this.push = function(value){
    this.storage[this.count] = value
    this.count++
  }

  this.pop = function(){
    if(this.count === 0){
      return undefined
    }

    this.count--
    let result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.size = function(){
    return this.count
  }

  this.peek = function(){
    return this.storage[this.count-1]
  }
}

const myStacks = new anotherStack()

myStacks.push('hello')
myStacks.push('world')
myStacks.pop()
myStacks.push('world')
console.log(myStacks.peek());

console.log(myStacks.storage);
