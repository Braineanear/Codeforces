//============================================================================
// Problem link: https://codeforces.com/problemset/problem/110/A
// Name        : 110A - Nearly Lucky Number
// Status      : Accepted
// Time        : 124 ms
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
    let string =  readline().trim().split('');
    let counter = 0;
    string.forEach(i => {
      if(i === '7' || i === '4'){
        counter++;
      }
    });
    if(counter === 4 || counter === 7){
      console.log('YES');
    } else {
      console.log('NO');
    }
} 
