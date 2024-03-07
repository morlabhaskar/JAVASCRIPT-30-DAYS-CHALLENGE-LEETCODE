//Input : func = () => expect(5).toBe(5)

var expect = function(val) {
    function toBe(val1) {
        if (val1 === val) {
            return true
        }
        else {
            throw new Error("Not Equal")
        }
    }
    function notToBe(val1) {
        if (val1 !== val) {
            return true
        }
        else {
            throw new Error("Equal")
        }
    }
    return {
        toBe,
        notToBe
        
    } 
};


//Output : {"value": true} 