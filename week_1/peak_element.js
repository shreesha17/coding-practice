/**
 * @param {number[]} arr
 * @returns {number}
 */
/*
https://www.geeksforgeeks.org/problems/peak-element/1

You are given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a peak if it is greater than its adjacent elements (if they exist).

If there are multiple peak elements, Return index of any one of them. The output will be "true" if the index returned by your function is correct; otherwise, it will be "false".

Note: Consider the element before the first element and the element after the last element to be negative infinity.

Example
Input: arr = [1, 2, 4, 5, 7, 8, 3]
Output: true
Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].
*/

class Solution {
    peakElement(arr) {
        for(let i=1;i<arr.length-1;i++){
            if(arr[i]>arr[i+1] && arr[i]>arr[i-1]) {
                return i; 
            }
        }
        if(arr.length>1 && arr[0]>arr[1]) return 0;
        if(arr.length>1 && arr[arr.length-1] > arr[arr.length-2]) return arr.length-1;
        return false;
    }
}
