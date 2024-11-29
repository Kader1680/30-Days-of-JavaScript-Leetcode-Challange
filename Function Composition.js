/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
       functions.reverse().forEach(fn => 
       
           x = fn(x)
       )

       return x


    }
};

// const a = (x) => x + 1;
// const b = (x) => x * x;
// const c =  (x) => 2 * x;
// console.log(a(b(x)))
//    const fn = compose([x => x + 1, x => 2 * x])
//    fn(4) // 9
  