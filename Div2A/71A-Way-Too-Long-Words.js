//============================================================================
// Problem link : https://codeforces.com/problemset/problem/71/A
// Name        : 71A - Way Too Long Words
// Status      : Accepted
// Time        : 77 ms
// Memory       : 0 KB
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
    const lines = parseInt(readline());
 
    for(let iteration = 0; iteration < lines ; iteration++){
        let word = readline();
        let length = word.length;
        if(length <= 10){
            console.log(word);
        } else {
            console.log(word[0] + (length - 2) + word[length-1]);
        }
    }
}
