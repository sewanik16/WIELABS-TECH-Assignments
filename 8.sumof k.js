// Given an array of numbers and a number k, determine if there are three entries in the array which add up to the specified number k. For example, given [20, 303, 3, 4, 25] and k = 49, return true as 20 + 4 + 25 = 49

function sum(arr,k){
    for(let i=0;i<arr.length;i++){
        let x = arr[i]
        let kk = k-x
        let sum = 0
        for(let j=i;j<arr.length-1;j++){
            
            if(j!=i){
                for(let m=j+1;m<arr.length;m++)
                {
                    sum = arr[j] + arr[m]
                    if(sum == kk) return true
                }
            }
        }
    }
    return false
}
let arr = [20, 303, 3, 4, 25]
// let arr = [10,2,9,4,1,2]
let k = 49
console.log(sum(arr,k))



// arr.sort((a,b)=>(a-b))
//     console.log(arr)
//     for(let i=0;i<arr.length-2;i++){
//         if((arr[i]+arr[i+1]+arr[i+2])==k) return true
//     } 
//     return false

// [10,9,2,4,1,2]


// let sum=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<k)
//         sum = sum + arr[i]
//     }
//    console.log(sum)
//     let x = sum
//     if(sum>k){
//         for(let i=0;i<arr.length;i++){
//             x = sum
//             if(arr[i]<k)
//             x = x - arr[i]
            
//             if(x==k) return true
//         }
//     }
//     return false