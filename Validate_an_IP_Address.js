/*
https://www.geeksforgeeks.org/problems/validate-an-ip-address-1587115621/1

You are given a string s in the form of an IPv4 Address. Your task is to validate an IPv4 Address, if it is valid return true otherwise return false.

IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., "172.16.254.1"

A valid IPv4 Address is of the form x1.x2.x3.x4 where 0 <= (x1, x2, x3, x4) <= 255. Thus, we can write the generalized form of an IPv4 address as (0-255).(0-255).(0-255).(0-255)

Note: Here we are considering numbers only from 0 to 255 and any additional leading zeroes will be considered invalid.

Examples :

Input: s = "222.111.111.111"
Output: true
Explanation: Here, the IPv4 address is as per the criteria mentioned and also all four decimal numbers lies in the mentioned range.

*/

/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
    isValid(s) {
        // code here
        let regexp = /^((25[0-5]|2[0-4]\d|[1]\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|[1]\d\d|[1-9]\d|\d)$/;
        return regexp.test(s);
    }
}
