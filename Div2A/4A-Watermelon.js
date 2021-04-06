//============================================================================
//problem link : https://codeforces.com/problemset/problem/4/A
// Name        : 4A - Watermelon
// Status      : Accepted
// Time        : 124 ms
// Space       : 0 KB
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
    const w = parseInt(readline());
 
    if(w <= 2 || w % 2 !== 0){
        console.log('NO');
    } else {
        console.log('YES');
    }
}
