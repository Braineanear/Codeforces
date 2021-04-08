//============================================================================
// Problem link: https://codeforces.com/problemset/problem/266/A
// Name        : 266A - Stones on the Table
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
    let length = parseInt(readline());
    let string = readline().trim().split('');
    let counter = 0;
    for(let i = 0 ; i < length ; i++){
      if(string[i] === string[i+1]){
        counter++;
      }
    }  
    console.log(counter);
}
