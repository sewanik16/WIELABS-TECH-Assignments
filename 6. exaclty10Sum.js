// A number is considered perfect if its digits sum up to exactly 10.
// Given a positive integer n, return the n-th perfect number.
// For example, given 1, you should return 19. Given 2, you should return 28.


function check10(n){
    let sum = 0
    for(let i=0;i<n.length;i++)
        sum = sum + parseInt(n[i])
    
    if(sum<10)
        return n + (10-sum)
    
}
let n = "2"
console.log(check10(n));












// function sumUp(n){
//     let sum = 0
//     while(n>0){
//         sum =sum + n%10
//         n = parseInt(n/10)
//         if(sum==10) return true
//     }

// }

// let n = 1
// console.log(sumUp(n))


// let num = 10 - n
//     num = num.toString()
//     return n+num

