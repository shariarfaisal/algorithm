function Queue(){
  const collection = []
  this.print = () => {
    console.log(collection);
  }
  this.enqueue = (e) => {
    collection.push(e)
  }
  this.dequeue = () => {
    return collection.shift()
  }
  this.front = () => {
    return collection[0]
  }
  this.size = () => {
    return collection.length
  }
  this.isEmpty = () => {
    return collection.length === 0
  }
}


function PriorityQueue(){
  const collection = []
  this.printCollection = () => {
    console.log(collection);
  }
  this.enqueue = (e) => {
    if(this.isEmpty()){
      collection.push(e)
    }else{
      let added = false
      for(let i=0; i<collection.length; i++){
        if(e[1] < collection[i][1]){
          collection.splice(i,0,e)
          added = true
          break
        }
      }
      if(!added){
        collection.push(e)
      }
    }
  }

  this.dequeue = () => {
    const value = collection.shift()
    return value[0]
  }

  this.front = () => {
    return collection[0]
  }

  this.size = () => {
    return collection.length
  }

  this.isEmpty = () => {
    return collection.length === 0
  }

}


const pq = new PriorityQueue()
pq.enqueue([3,4])
pq.enqueue(['faisal',2])
pq.enqueue(['arafat',4])
pq.enqueue(['farhad',3])

pq.printCollection()
