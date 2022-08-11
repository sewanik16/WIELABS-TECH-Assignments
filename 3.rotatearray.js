// Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.


function rotateArr(arr,k){
    while(k>0){
        let x = arr[arr.length-1];
        for(let i=arr.length-2;i>=0;i--){
            arr[i+1]=arr[i]
         }
         arr[0] = x
         k--
    }
     return arr
}

let arr = [2,5,4,3]
let k = 2
if(k<arr.length)
console.log(rotateArr(arr,k))