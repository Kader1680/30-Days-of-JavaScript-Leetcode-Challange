const arr = [1, 2, 3]

var map = function(arr, fn) {
    const newarr = []
    for (let i = 0; i < arr.length; i++) {
             newarr.push(fn(arr[i] ,  i))
        }  
    return newarr;

};