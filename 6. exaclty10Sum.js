// A number is considered perfect if its digits sum up to exactly 10.
// Given a positive integer n, return the n-th perfect number.
// For example, given 1, you should return 19. Given 2, you should return 28.

function sumUp(n){
    let num = 10 - n
    num = num.toString()
    return n+num

}

let n = 2
console.log(sumUp(n))