const repeatString = function(string,num) {

   let repeatedString = ''; 

   if (num <= -1) {
    return 'ERROR'
   }

    while (num > 0) {
     repeatedString += string;
        num--;
     }
     return repeatedString;
    }


// Do not edit below this line
module.exports = repeatString;
