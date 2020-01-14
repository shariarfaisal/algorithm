class Node{
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}

class Stack{
  constructor(){
    this.root = null
  }

  add(data){
    const node = this.root
    if(node === null){
      this.root = new Node(data)
    }else if(node !== null){
      const searchTree = function(node){
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data)
            return
          }else{
            return searchTree(node.left)
          }
        }else if(data > node.data){
          if(node.right === null){
            node.right = new Node(data)
            return
          }else{
            return searchTree(node.right)
          }
        }else{
          return null
        }
      }
      console.log(node);
      return searchTree(node)
    }
  }

  max(){
    let node = this.root
    while(node.right !== null){
      node = node.right
    }
    console.log(node.data);
  }

  min(){
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    console.log(node.data);
  }

  isPresent(data){
    let current = this.root
    while(current){
      if(data === current.data){
        return true
      }
      if(data < current.data){
        current = current.left
      }else{
        current = current.right
      }
    }
    return false
  }

  remove(data){
    const removeNode = (node,data) => {
      if(node == null){
        return null
      }
      if(data == node.data){
        // node has no children ...
        if(node.laft == null && node.right == null){
          return null
        }
        // node has no left child
        if(node.left == null){
          return node.right
        }
        // node has no right child
        if(node.right == null){
          return node.left
        }
        // node has two children
        var tempNode = node.right
        while(tempNode.left !== null){
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right,tempNode.data)
        return node
      }else if(data < node.data){
        node.left = removeNode(node.left,data)
        return node
      }else {
        node.right = removeNode(node.right,data)
        return node
      }
    }
    this.root = removeNode(this.root,data)
  }


}

const stack =  new Stack()
