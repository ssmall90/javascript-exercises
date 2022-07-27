const leapYears = function(year) {
    let finalAnswer;
    if (((year % 4 === 0) && (year % 100 !==0)) || (year % 400 === 0)) {
      finalAnswer = true
    } else finalAnswer = false;
     //console.log (finalAnswer)
    return finalAnswer
}

// Do not edit below this line
module.exports = leapYears;
