/*
https://www.geeksforgeeks.org/problems/isomorphic-strings-1587115620/1

Given two strings s1 and s2 consisting of only lowercase English letters and of equal length, check if these two strings are isomorphic to each other.
If the characters in s1 can be changed to get s2, then two strings, s1 and s2 are isomorphic. A character must be completely swapped out for another character while maintaining the order of the characters. A character may map to itself, but no two characters may map to the same character.

Examples:

Input: s1 = "aab", s2 = "xxy"
Output: true
Explanation: Each character in s1 can be consistently mapped to a unique character in s2 (a → x, b → y)

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
class Solution {
    areIsomorphic(s1, s2) {
        // code here
        let isoMap = new Map();
        let seenValues = new Set();
        for(let i=0; i<s1.length; i++){
            if(isoMap.has(s1[i])){
                if(isoMap.get(s1[i]) != s2[i]) return false;
            }
            else{
                if(seenValues.has(s2[i])) return false;
                isoMap.set(s1[i],s2[i]);
                seenValues.add(s2[i]);
            }
        }
        return true;
    }
}
