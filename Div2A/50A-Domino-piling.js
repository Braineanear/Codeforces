//============================================================================
// Problem link: https://codeforces.com/problemset/problem/50/A
// Name        : 50A - Domino piling
// Status      : Accepted
// Time        : 154 ms
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
    let w = readline().trim().split(' ');
    console.log(Math.floor(w[0]*w[1]/2));
}
