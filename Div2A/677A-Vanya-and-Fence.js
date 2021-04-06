//============================================================================
// Problem link : https://codeforces.com/problemset/problem/677/A
// Name        : 677A - Vanya and Fence
// Status      : Accepted
// Time        : 77 ms
// Memory       : 0 KB
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
    let line = readline().trim().split(' ');
    const n = parseInt(line[0]); 
    const h = parseInt(line[1]);
    line = readline().trim().split(' ').filter(y => y > h).length;
    console.log(line*2 + (n-line)*1);
}
