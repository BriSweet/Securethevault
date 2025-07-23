var code1
var code1 = 7 + 3
console.log(code1 + 3);

var code2 = 100 / 2 - 10

var code3
var code3 = 40 - (1 % 2)
console.log(code3);

var message = "The Vault has been secured! The combination is ";

var codeA = code1 + code2 + code3;

var codeB = (`${code1} - ${code2} - ${code3} = ${codeA}`);
console.log(message + codeB);
