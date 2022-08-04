const palindromes = function (str) {
    let stripPunc = str.replace(/[.,/#!$%^&*;:{}]/g, "") 
    let finalStripPunc = stripPunc.replace(/ /g, '')
    let lowerCase = finalStripPunc.toLowerCase()
    let reversed = lowerCase.split('').reverse().join('')
    if (reversed === lowerCase) {
        return true
    } else {
        return false
    }
    //console.log(lowerCase)

    //if (lowerCase.split('').reverse().join('') === lowerCase) {
     //return true
    //} else {
     //return false
    //}
 //console.log(str)
 };
 
 //palindromes('hello')

// Do not edit below this line
module.exports = palindromes;
