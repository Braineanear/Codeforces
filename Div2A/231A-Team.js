//============================================================================
// Problem link : https://codeforces.com/problemset/problem/231/A
// Name        : 231A - Team
// Status      : Accepted
// Time        : 124 ms
// Memory       : 100 KB
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
    const problems = parseInt(readline());
    let counter = 0;
    for(let iteration = 0 ; iteration < problems ; iteration++){
        let problem = readline().trim().split(' ').filter(y=>y!='0');
        if(problem.length>=2) counter++;
    }
    console.log(counter);
}
