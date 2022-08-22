// Given an array of integers out of order,
// determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted.
// For example, given [3, 7, 5, 6, 9], you should return (1, 3).


//     i
// [3, 7, 5, 6, 9]

function checkArr(arr){
  let arr1=[...arr]
  for(let i=1;i<arr.length-1;i++){
      if(arr[i]<arr[i-1]){
          [arr[i-1],arr[i]]=[arr[i],arr[i-1]]
      }
  }
  let left;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=arr1[i]){
      left = i
      break
    }
  }
  let right;
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i]!=arr1[i]){
      right = i
      break
    }
  }
  if(left!=undefined)
  console.log(left,right)
  else
  console.log("array is already sorted")
}

let arr = [3,5,7,10];
checkArr(arr);



// function sort(arr) {
//   let left = -1;
//   let right = -1;
//   let max_val = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (max_val < arr[i]) {
//       max_val = arr[i];
//     }
//     if (arr[i] < max_val) {
//       right = i;
//     }
//   }
//   let min_val = Infinity;
//   for (let i = arr.length; i >= 0; i--) {
//     if (min_val > arr[i]) {
//       min_val = arr[i];
//     }
//     if (arr[i] > min_val) {
//       left = i;
//     }
//   }
//   if (left != -1) {
//     console.log(`(${left},${right})`);
//   }
// }
// let arr = [3, 7, 5, 6, 9];
// sort(arr);
