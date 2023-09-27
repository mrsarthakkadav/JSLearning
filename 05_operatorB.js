console.log(`==========Step 1==========`);

function greaterNumber(num1,num2) {
    console.log(`Greater Number of num=${num1} and ${num2} is : ${num1>num2}`);
    
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`==========Step 2==========`);

function isEvenOrOdd(num1) {
    var result = num1%2 == 0 ? "EVEN" : "ODD";
    console.log(`Given number is ${num1} ${result}`);
    
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

console.log(`==========Step 3==========`);

function wordLength(strings) {
    var stringLength = strings.length;
    var result = strings.length%2 == 0 ? "Even" : "ODD";
    console.log(`Given string is ${strings} length of string is : ${stringLength} it is  ${result}`);
    
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");