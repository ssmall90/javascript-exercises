

const sumAll = function(num1,num2) {
    let finalSum = 0 ;  
    let error ='ERROR'
    
    let biggerNum = Math.max(num1, num2)
    let smallerNum = Math.min(num1, num2)
    
    parseInt(biggerNum)
    parseInt(smallerNum)
    
    if (typeof num1 === "string" || typeof num2 === "string") {
      return error;
    } else if (typeof num1 === "object" || typeof num2 === "object") {
      return error;
    } else if (smallerNum < 0 || biggerNum < 0) { 
      return error 
    } else if ((smallerNum => 0) && (biggerNum => 0)) {
      
      for (let i = smallerNum; i <= biggerNum; i++) { 
      finalSum = finalSum + i;
    }
    }
    
    return finalSum
    }



// Do not edit below this line
module.exports = sumAll;
