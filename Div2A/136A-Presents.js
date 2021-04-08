//============================================================================
// Problem link: https://codeforces.com/problemset/problem/136/A
// Name        : 136A - Presents
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
    let n = parseInt(readline());
    let P1 = readline().trim().split(' ').map(el => el*1);
    let P2 = [];
    for(let i = 1 ; i <= n ; i++){
        P2[P1[i-1]-1] = i;
    }  
    for(let i = 1 ; i <= n ; i++){
        console.log(P2[i-1]);
    }
} 
