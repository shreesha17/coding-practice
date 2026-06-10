/*
https://www.geeksforgeeks.org/problems/pangram-checking-1587115620/1

Given a string s, check if it is a "Panagram" or not. Return true if the string is a Panagram, else return false.
A "Panagram" is a sentence containing every letter in the English Alphabet either in lowercase or Uppercase.

Examples:

Input: s = "Bawds jog, flick quartz, vex nymph"
Output: true
Explanation: In the given string, there are all the letters of the English alphabet. Hence, the output is true.
*/

/**
 * @param {string} str
 * @returns {boolean}
 */
class Solution {
    checkPangram(s) {
        // code here
        let s2 = s.toLowerCase();
        let s3 = s2.replace(/[, ]/g, "");
        let alpMap = new Map();
        
        for(let i=0; i<s3.length; i++){
            let asc = Number(s3.charCodeAt(i)-97);
            alpMap[asc] = alpMap[asc]++ || 1;
        }
        for(let i=0;i<26;i++) {
            if(alpMap[i] < 1 || alpMap[i] == undefined) return false
        }
        return true;
    }
}
