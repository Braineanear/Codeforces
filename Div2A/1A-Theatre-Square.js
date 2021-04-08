//============================================================================
// Problem link: https://codeforces.com/problemset/problem/1/A
// Name        : 1A - Theatre Square
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
    let [n, m, a] = readline().trim().split(' ').map(el => el*1);
    [n, m] = [m, n];
    if(a >= m) console.log(Math.ceil(n / a));
    else console.log(Math.ceil(m / a) * Math.ceil(n / a));
} 
