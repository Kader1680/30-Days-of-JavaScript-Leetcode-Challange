var reduce = function(nums, fn, init) {
    let result = init
   
    
    // for (const n of nums) {
    //     result = fn(result, n)
    // }

    nums.forEach(element => {
        result = fn(result, element)
    });

    return result

    return nums.reduce(fn, init)
};



