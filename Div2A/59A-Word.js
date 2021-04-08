//============================================================================
// Problem link: https://codeforces.com/problemset/problem/59/A
// Name        : 59A - World
// Status      : Accepted
// Time        : 124 ms
// Memory      : 0 KB
//============================================================================
'use strict';
 
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
 
    main();
});
 
function readline() {
    return inputString[currentLine++];
}
 
function main() {
    let string = readline();
    const upperLettersLength = string.replace(/[^A-Z]/g, "").length;
    const lowerLettersLength = string.replace(/[^a-z]/g, "").length;
    if(upperLettersLength <= lowerLettersLength){
        string = string.toLowerCase();
        console.log(string);
    } else {
        string = string.toUpperCase();
        console.log(string);
    }
} 
