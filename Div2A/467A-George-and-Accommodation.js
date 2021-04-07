//============================================================================
// Problem link: https://codeforces.com/problemset/problem/467/A
// Name        : 467A - George and Accommodation
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
    let free = 0;
    for(let i = 0 ; i < n ; i++){
        let [a, b] = readline().split(' ');
        if(a*1 < b*1 && (b-a) >= 2){
            free++;
        }
    }
    console.log(free);
} 
