
class Stack{
  constructor(){
    this.count = 0
    this.store = []
  }

  push(value){
    this.store[this.count] = value
    this.count++
  }

  pop(){
    if(this.count === 0){
      return undefined
    }
    this.count--
    let subStore = []
    for(let i=0; i<this.count; i++){
      subStore[i] = this.store[i]
    }
    const result = this.store[this.count]
    this.store = subStore
    return result
  }

  length(){
    return this.count
  }

  peek(){
    return this.store[this.count-1]
  }
}


const stack = new Stack()
stack.push('hello')
stack.push('How ')
stack.push('are ')
stack.push('you')

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.store);
