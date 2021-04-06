//============================================================================
// Problem link: https://codeforces.com/problemset/problem/112/A
// Name        : 112A - Petya and Strings
// Status      : Accepted
// Time        : 154 ms
// Memory      : 200 KB
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
    let firstString = readline();
    let secondString = readline();
    firstString = firstString.toLowerCase();
    secondString = secondString.toLowerCase();
    let firstStringSize = 0;
    let secondStringSize = 0;
    for(let i in firstString){
      firstStringSize += firstString[i].charCodeAt(0);
    }
    for(let i in secondString){
      secondStringSize += secondString[i].charCodeAt(0);
    } 
    if(firstString > secondString) console.log(1);
    else if(firstString < secondString) console.log(-1);
    else console.log(0);
}
