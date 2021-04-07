//============================================================================
// Problem link: https://codeforces.com/problemset/problem/469/A
// Name        : 469A - I Wanna Be the Guy
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
    let x = readline().trim().split(' ').map(el => el*1);
    let y = readline().trim().split(' ').map(el => el*1);
    x.shift();  
    y.shift();
    x = [...new Set([...x, ...y])];
    if(x.length === n){
      console.log('I become the guy.');
    } else {
      console.log('Oh, my keyboard!');
    }
} 
