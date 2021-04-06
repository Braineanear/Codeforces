//============================================================================
// Problem link: https://codeforces.com/problemset/problem/158/A
// Name        : 158A - Next Round
// Status      : Accepted
// Time        : 124 ms
// Memory      : 100 KB
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
    let w = readline().trim().split(' ');
    const n = parseInt(w[0]);
    const k = parseInt(w[1]);
    w = readline().trim().split(' ');
    let counter = 0;
    for(let i = 0; i < n ; i++){
        let current = parseInt(w[i]);
        let kth = parseInt(w[k-1]);
        if(current >= kth && current > 0){
            counter++;    
        }
    }
    console.log(counter);
}
