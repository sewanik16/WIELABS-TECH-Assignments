// Given two strings A and B, return whether or not A can be shifted some number of times to get B.
// For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

function checkSTR(A,B){
    A = A.split("")
    let j = A.length
    while(j>0){
        if(A.join("")==B) return true
        let x = A[A.length-1];
        for(let i=A.length-2;i>=0;i--){
            A[i+1]=A[i]
         }
         A[0] = x
        j--
    }
     return false

}

let A = "abcde"
let B = "cdeab"
console.log(checkSTR(A,B))