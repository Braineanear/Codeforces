//============================================================================
// Problem link: https://codeforces.com/problemset/problem/61/A
// Name        : 61A - Ultra-Fast Mathematician
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
    let l1 = readline().trim();
    let l2 = readline().trim();
    let length = l1.length;
    let string = '';
    for(let i = 0 ; i < length ; i++){
      if(l1[i] === l2[i]){
        string += '0';
      } else {
        string += '1';
      }
    }
    console.log(string);
} 
