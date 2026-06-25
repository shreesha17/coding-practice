/*
https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.
Note: You need to solve this problem without utilizing the built-in sort function.

Examples:

Input: arr[] = [0, 1, 2, 0, 1, 2]
Output: [0, 0, 1, 1, 2, 2]
Explanation: 0s, 1s and 2s are segregated into ascending order.
*/

/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    sort012(arr) {
        let zeroes = 0;
        let ones = 0;
        let twoes = 0;
        
        for(let i=0;i<arr.length; i++){
            if(arr[i] == 0) zeroes++;
            else if(arr[i] == 1) ones++;
            else twoes++;
        }
       for(let i=0;i<arr.length;i++){
           if(zeroes>0) { arr[i] = 0; zeroes--;}
           else if (ones>0) {arr[i] = 1; ones--;}
           else {arr[i]=2; twoes--;}
       }
       return arr;
    }
}
