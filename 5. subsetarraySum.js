// Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.
// For example, for the input [1, 2, 3, 10], you should return 7.

function subSetArr(arr){
    let sum = 1
    let arr1=[1]
    for(let i=1;i<=arr.length;i++){
            sum = sum + i
            arr1[i] = sum
    }
    let index = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=i+1) return arr1[i]

        index = i
    }
    return arr1[index+1]
}

let arr = [1,2,3,10]
console.log(subSetArr(arr))