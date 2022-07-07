function test(arr){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i+1] == arr[i]) {
            arr.splice(i + 1, 1)
            i--
        }
    }
    return arr
}

console.log(test([0,0,0,0,0,0,1,1,2,2,3,3,4,5,5,5]))