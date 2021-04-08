//============================================================================
// Problem link: https://codeforces.com/problemset/problem/977/A
// Name        : 977A - Wrong Subtraction	
// Status      : Accepted
// Time        : 77 ms
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
    let [n,k] = readline().trim().split(' ').map(i => i*1);
    for(let i = 1 ; i <= k ; i++){
      if(n%10 === 0) n /= 10;
      else n--;
    }    
    console.log(n);
} 
