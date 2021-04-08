//============================================================================
// Problem link: https://codeforces.com/problemset/problem/791/A
// Name        : 791A - Bear and Big Brother		
// Status      : Accepted
// Time        : 77 ms
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
    const string = readline().trim().split(' ').map(i => i*1);
    let limakWeight = string[0];
    let bobWeight = string[1];
    let years = 0;
    while(limakWeight <= bobWeight){
      limakWeight *= 3;
      bobWeight *= 2;
      years++;
    }
    console.log(years);
} 
