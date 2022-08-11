// The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.
// For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}
//            421
// 0 => 00000 000
// 1 => 00000 001
// 2 => 00000 010
// 3 => 00000 011
// 4 => 00000 100
// 5 => 00000 101
// 6 => 00000 110
// 7 => 00000 111

function comb(arr){
    let temp;
    let res=[]
    let size = arr.length
    for(let i=0;i<Math.pow(2,size);i++){
        temp=""
        for(let j=0;j<size;j++){
            if((i & Math.pow(2,j))){
                temp = temp + arr[j]
            }
        }
        res.push(temp)
    }
    return res
}
let arr = [1,2,3]
console.log(comb(arr))

// let set = new Set()
// let arr = [1,2,3]
// for(let i=0;i<arr.length;i++){
//     set.add(arr[i])
// }
// let fact=1;
// for(let i=1;i<arr.length;i++){
//     fact = fact * arr[i]
// }



// console.log(set)