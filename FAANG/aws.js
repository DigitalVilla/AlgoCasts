'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'searchSuggestions' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY repository
 *  2. STRING customerQuery
 */

function searchSuggestions(repo, q) {
    // Write your code here
    let sugestions = []
    
    // check length of query
    if (q.length >= 2) {
        sugestions = repo.filter((w)=> w.toLowerCase().indexOf(q.toLowerCase()) === 0).map((w)=> w.toLowerCase())
    }

    console.log(q, sugestions)
    return sugestions
}

function main() {

    