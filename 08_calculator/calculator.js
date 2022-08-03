const add = (num1, num2) => {
  const addSum = num1 + num2 
  console.log (addSum)
  return addSum; 
}


const subtract = (num1,num2) => {
  const subSum = num1 - num2
  console.log (subSum)
  return subSum;
	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length 
  ? array.reduce((p , c) => 
    p * c) :0 };

const power = (num1,num2) => {
  return Math.pow(num1,num2)
	
};

const factorial = function(n) {
  if (n === 0 ) {return 1}; 
  let product = 1 
  for (let i = n; i > 0; i--){
    product *= i;
  }
  return product; 
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
