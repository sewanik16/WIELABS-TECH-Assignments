// two sum      arr= 2 7 11 15  t=9

// brute force approach
// let arr=[3,2,4]
// let target = 6
// for(let i=0;i<arr.length-1;i++){
//     let x = target-arr[i]
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]==x){
//             console.log(i,j)
//             break
//         }
//     }
// }
// map approcah
// let map = new Map()
// for(let m=0;m<arr.length;m++){
//     let x = target-arr[m]
//     if(map.has(arr[m])){
//         // map.set(x,map.get(arr[m]))
//        console.log(map.get(arr[m]),m)
//     }else{
//         map.set(x,m)

//     }
// }
// console.log(map)

//object approach
let arr=[2,7,11,15]
let target = 9
let obj={}
for(let i=0;i<arr.length;i++){
    let x = target-arr[i]
    if(obj[x]!=undefined){
        console.log(obj[x],i)
    }else{
        obj[arr[i]] = i
    }
}
console.log(obj)