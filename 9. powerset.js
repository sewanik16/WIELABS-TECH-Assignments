// The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.
// For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}
// i          421
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
    for(let i=0;i<Math.pow(2,arr.length);i++){   // 0-7   --subset length
        temp=""
        for(let j=0;j<arr.length;j++){           // 0-2   --arr length
            if((i & Math.pow(2,j))){            //  2^0=1 2^1=2 2^2=4 
                temp =  temp + arr[j]
            }
        }
        res.push('{'+temp+'}')
    }
    
    return res
}

let arr = [1,2,3,4]
let newarr = comb(arr)
// for(let i=1;i<newarr.length;i++){
//     if(newarr[i-1].length>newarr[i].length){
//        let temp = newarr[i-1]
//        newarr[i-1]=newarr[i]
//        newarr[i] = temp
//     }
// }
// console.log(newarr)
let set = new Set(newarr)
console.log(set)

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