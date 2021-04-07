//============================================================================
// Problem link: https://codeforces.com/problemset/problem/486/A
// Name        : 486A - Calculating Function
// Status      : Accepted
// Time        : 62 ms
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
    let n = readline()*1;
    let result = 0;
    if(n % 2 === 0) result = n / 2;
    else result = ((n + 1) / 2) * (-1);
    console.log(result);
} 
