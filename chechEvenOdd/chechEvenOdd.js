// create another branch called checkEvenOdd, 
// checkout to this branch, now write another function called 
// evenOdd, where it takes a number as paramter called num, 
// finds whether it is even number and returns true or false.

function isEven(num) {
    if (num % 2 == 0)
    // even if divisible by 2
    {
        return true
    }
    else {
        return false
    }

}

console.log(isEven(4)); // Example usage
