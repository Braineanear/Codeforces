//============================================================================
// Problem link: https://codeforces.com/problemset/problem/282/A
// Name        : 282A - Bit++
// Status      : Accepted
// Time        : 62 ms
// Memory      : 200 KB
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
    let n = readline().trim().split(' ');
    let w = [];
    for(let i = 0 ; i < n ; i++){
        w.push(readline());
    }
    let counter = 0;
    w.forEach(y => {
      if(y.includes('+')) counter++;
      else counter--;
    });
    console.log(counter);
}
