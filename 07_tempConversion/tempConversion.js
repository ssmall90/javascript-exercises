const ctof = function(num) {
  let formula = (num * 1.8) + 32 
  let finalAnswer = Math.round(formula * 10) / 10
  //console.log(finalAnswer)
  return finalAnswer
}
//ctof (21)


const ftoc = function(num) {
  let formula = (num - 32) / 1.8
  let finalAnswer = Math.round(formula * 10) / 10
  //console.log (finalAnswer)
  return finalAnswer
}

//ftoc(102)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
