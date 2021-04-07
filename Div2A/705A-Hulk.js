//============================================================================
// Problem link: https://codeforces.com/problemset/problem/705/A
// Name        : 705A - Hulk	
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
    let n = readline()*1;
    let string = '';
    for(let i = 1 ; i <= n ; i++){
      if(i%2 !== 0){
        string += 'I hate';
      } else {
        string += 'I love';
      } 
      if(i !== n){
        string += ' that ';
      } else {
        string += ' it';
      }
    }
    console.log(string);
} 
