var code1 = 10
var code1 = 7 + 3

var code2 = 100 / 2 - 10

var code3
var code3 = 40 - (1 % 2)
console.log(code3);

var message = "The Vault has been secured! The combination is ";

var codeA = code1 + code2 + code3;
console.log(codeA);

var codeB = (`${code1} - ${code2} - ${code3}`);
console.log(message + codeB + " - " + codeA);
