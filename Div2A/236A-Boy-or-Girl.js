//============================================================================
// Problem link: https://codeforces.com/problemset/problem/236/A
// Name        : 236A - Boy or Girl		
// Status      : Accepted
// Time        : 124 ms
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
    let string = readline().trim().split('').filter((item, pos, self) => self.indexOf(item) == pos).join('');
    if(string.length%2===0) console.log('CHAT WITH HER!');
    else console.log('IGNORE HIM!');
}
