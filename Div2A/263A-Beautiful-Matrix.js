//============================================================================
// Problem link: https://codeforces.com/problemset/problem/263/A
// Name        : 263A - Beautiful Matrix
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
    let matrix = [];
    for(let i = 0 ; i < 5 ; i++){
        matrix.push(readline().trim().split(' '));
    }
    for(let i = 0 ; i < 5 ; i++){
        for(let j = 0 ; j < 5 ; j++){
            if(matrix[i][j] == 1){
                console.log(Math.abs((i+1)-3) + Math.abs((j+1)-3));
            }
        }
    }
}
