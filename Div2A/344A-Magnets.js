//============================================================================
// Problem link: https://codeforces.com/problemset/problem/344/A
// Name        : 344A - Magnets
// Status      : Accepted
// Time        : 218 ms
// Memory      : 13200 KB
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
    let el = [];
    for(let i = 0 ; i < n ; i++){
        el.push(readline().trim());
    }
    let counter = 0;
    for(let i = 0 ; i < n ; i++){
      if(el[i] !== el[i+1]) counter++;
    }
    console.log(counter);
} 
