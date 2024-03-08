//Input : init = 5, calls = ["increment","reset","decrement"]

var createCounter = function(init) {
    let presentCounter = init
    return {
        increment:()=> ++presentCounter,
        decrement:()=> --presentCounter,
        reset:()=> presentCounter = init
    }
};

//Output: [6,5,4]