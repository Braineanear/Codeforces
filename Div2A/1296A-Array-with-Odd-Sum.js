//============================================================================
// Problem link: https://codeforces.com/problemset/problem/1296/A
// Name        : 1296A - Array with Odd Sum	
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
    let t = readline()*1;
    for(let i = 1 ; i <= t ; i++){
        let n = readline()*1;
        let a = readline().split(' ').map(el => el*1);
        let even = 0;
        let odd = 0;
        for(let j = 0 ; j < n ; j++){
            if (a[j] & 1) odd++;
            else even++;
        }
        if(odd === 0 || (even === 0 && n % 2 === 0)){
            console.log('NO');
        } else {
            console.log('YES');
        }
    }
} 
