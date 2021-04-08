//============================================================================
// Problem link: https://codeforces.com/problemset/problem/263/A
// Name        : 617A - Elephant
// Status      : Accepted
// Time        : 93 ms
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
    let n = parseInt(readline());
    if(n%5 === 0) console.log(Math.floor(n/5));
    else console.log(Math.floor(n/5 + 1));
} 
