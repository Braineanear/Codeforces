//============================================================================
// Problem link: https://codeforces.com/problemset/problem/116/A
// Name        : 116A - Tram
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
    const n = readline()*1;
    let oldCapacity = 0;
    let newCapacity = 0;
    for(let i = 0 ; i < n ; i++){
        let arr = readline().trim().split(' ');
        newCapacity -= (arr[0])*1;
        newCapacity += (arr[1])*1;  
        if(oldCapacity < newCapacity){
            oldCapacity = newCapacity;
        }
    }
    console.log(oldCapacity);
} 
