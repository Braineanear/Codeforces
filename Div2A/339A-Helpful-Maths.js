//============================================================================
// Problem link: https://codeforces.com/problemset/problem/339/A
// Name        : 339A - Helpful Maths
// Status      : Accepted
// Time        : 154 ms
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
    let string = readline().trim().split('+').map(y=>y*1).sort((a,b) => a - b).join('+');
    console.log(string);
}
