//Using what you read, re-write your function from the Basic JavaScript workshop that returns the first character of a string using CPS

/*// basic function in js
function firstCharacter (word) {
    return word.substring(0,1);
}*/

// function re-write with CPS
// Procedures can take a callback to invoke upon their return value.

function firstCharacter(word, ret) {
    ret(word[0]);
}
firstCharacter("abc", console.log); //this is the argument for word and for ret

// Create a CPS function that returns the last character of a string
/*// basic function in js
function lastLetter(word) {   
    return word[word.length - 1];
};
console.log(lastLetter("lapin"));*/

// function re-write with CPS

function lastCharacter(word, ret) {
    ret (word[word.length - 1])
}
lastCharacter('lapin', console.log);
    

