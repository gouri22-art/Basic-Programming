// Problem Statement
// Create a repo named Basic Programing clone this repo with your local system, then create a file called index.js, 
// then write function that takes a number as paramter called num, finds whether it is prime nunber and returns true or false,

// Once it is done, then add, commit and push into the repo.

// Once this is done, then create another branch called checkEvenOdd, checkout to this branch, now write another function called evenOdd, where it takes a number as paramter called num, finds whether it is even number and returns true or false.

// Once done, then add, commit and push into the repo into new branch and merge it with your main/master branch by creating a Pull Request
function isPrime(num) {
    if (num <= 1) return false; // 1 and numbers <= 0 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // divisible by any number
    }
    return true; // prime
}

console.log(isPrime(7)); // Example usage
