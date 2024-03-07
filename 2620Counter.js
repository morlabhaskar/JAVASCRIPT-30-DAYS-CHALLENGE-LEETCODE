//Input : n = 10  ["call","call","call"]

const createCounter = (n) => {
    return () => n++
}

//Output : [10,11,12]