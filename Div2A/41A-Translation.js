//============================================================================
// Problem link: https://codeforces.com/problemset/problem/41/A
// Name        : 41A - Translation
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
    let string1 = readline();
    let string2 = readline().split('').reverse().join('');
    if(string1 == string2){
      console.log('YES');
    } else {
      console.log('NO');
    }
} 
