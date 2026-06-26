const nestedData = [2, [7, 8,[1,2,[3,4,[5,6,[9,10]]]]]];

/**
 * @param {Array} arr
 * @param {number} depth
 */
function customFlat(arr, depth = 1) {
  // Your recursive implementation here
  let res = [];
  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i]) && depth > 0){
        let tmp = customFlat(arr[i], depth-1);
        res.push(...tmp); // res = res.concat(tmp);
    }
    else  res.push(arr[i]);
  }
  return res;
}

console.log(customFlat(nestedData, 1)); 
console.log(customFlat(nestedData, 2)); 
console.log(customFlat(nestedData, Infinity)); 