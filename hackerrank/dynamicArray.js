const array = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]


function dynamicArray(n, queries) {
    let lastIndex = 0
    const arr = [[],[]]
    for(let [a,x,y] of queries){
        if(a === 1){
            arr[(x^lastIndex) % n].push(y)
        }else if(a === 2){
            lastIndex = arr[(x^lastIndex)%n][y]
            console.log(lastIndex)
        }
    }
}

dynamicArray(2,array)
