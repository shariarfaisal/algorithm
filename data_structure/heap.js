
const left = (i) => 2 * i
const right = (i) => 2 * i + 1
const parent = (i) => Math.floor(i/2)


const max_heapify(heap,size,index){
  var l,r,largest,t

  l = left(index)
  r = right(index)

  if(l <= size && heap[l] > heap[index]){
    largest = l
  }else{
    largest = index
  }

  if(r <= size && heap[r] > heap[largest]){
    largest = r
  }

  if(largest != index){
    t = heap[index]
    heap[index] = heap[largest]
    heap[largest] = t

    max_heapify(heap,size,largest)
  }
}
