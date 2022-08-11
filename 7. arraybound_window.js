// Given an array of integers out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you should return (1, 3).



function sort(arr){

    let left = -1;
    let right = -1;
    let max_val = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (max_val < arr[i]) {
        max_val = arr[i];
      }
      if (arr[i] < max_val) {
        right = i;
      }
    }
    let min_val = Infinity;
    for (let i = arr.length; i >= 0; i--) {
      if (min_val > arr[i]) {
        min_val = arr[i];
      }
      if (arr[i] > min_val) {
        left = i;
      }
    }  
    if (left != -1) {   
      console.log(`(${left},${right})`);
    }
  
  };
  let arr = [3, 7, 5, 6, 9]
  sort(arr);