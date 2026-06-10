/*
https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1

Given an array arr[]. Your task is to find the minimum and maximum elements in the array.

Examples:

Input: arr[] = [1, 4, 3, 5, 8, 6]
Output: [1, 8]
Explanation: minimum and maximum elements of array are 1 and 8.

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    getMinMax(arr) {
        // code here
        let min = arr[0];
        let max = arr[0];
        
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max) max = arr[i];
            if(arr[i]<min) min = arr[i];
        }
        return [min, max];
        
    }
}

*/
