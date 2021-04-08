//============================================================================
// Problem link: https://codeforces.com/problemset/problem/546/A
// Name        : 546A - Soldier and Bananas
// Status      : Accepted
// Time        : 77 ms
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
    const string = readline().trim().split(' ').map(i => i*1);
    const numberOfBananas = string[2];
    const availableMoney = string[1];
    const k = string[0]; 
    let sum = 0;
    for(let i = 1 ; i <= numberOfBananas ; i++){
      sum += k*i;
    }
    if(sum <= availableMoney){
      console.log('0');
    } else{
      console.log(sum - availableMoney);
    }
} 
