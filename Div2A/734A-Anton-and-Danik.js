//============================================================================
// Problem link: https://codeforces.com/problemset/problem/734/A
// Name        : 734A - Anton and Danik
// Status      : Accepted
// Time        : 62 ms
// Memory      : 1600 KB
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
    const n = parseInt(readline());  
    const string = readline().trim().split('');
    let Anton = 0;
    let Danik = 0;
    for(let i = 0 ; i < n ; i++){
      if(string[i] === 'A') Anton++;
      else Danik++;
    }
    if(Anton > Danik) {
      console.log('Anton');
    } else if(Danik > Anton) {
      console.log('Danik');
    } else{
      console.log('Friendship');
    }
} 
