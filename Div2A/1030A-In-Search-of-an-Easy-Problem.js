//============================================================================
// Problem link: https://codeforces.com/problemset/problem/1030/A
// Name        : 1030A - In Search of an Easy Problem
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
    let n = readline()*1;
    let p = readline().trim().split(' ');
    let flag = false;
    for(let i = 0 ; i < n ; i++){
      if(p[i] === '1'){
        flag = true;
        break;
      }
    }
    if(flag === true){
      console.log('HARD');
    } else {
      console.log('EASY');
    }
} 
