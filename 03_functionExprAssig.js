
console.log(`=========Function Expression=========`);
console.log(`=========Step 1==============`);
var result = function(value1){
    console.log(`The given number is ${value1} and its Square is ${value1*value1}`);
}
result(5);
result(6);
result(25);
result(100);
result(67.89);
result(59);

console.log(`=========Step 2==============`);
console.log(`Type of Function is ${typeof(result)}`);

console.log(`=========Step 3==============`);

var area = function(value1,value2){
    console.log(`Given length is ${value1} and breath ${value2} the total Area is ${value1*value2}.`);

}
area(499,917);
console.log(`==========Step 4==============`);

var swapValues = function(value1,value2){
    console.log(`=====Before swap======= `);
    console.log(`First value ${value1} and second value ${value2}`);
    console.log(`=====After swap======= `);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(`First value ${value1} and second value ${value2}`);

}
swapValues("Mahi","Raina")
swapValues(55,77);

console.log(`==========Step 5==============`);
var str = function(strValue){
    console.log(`The Given String is:-  ${strValue}`);
    console.log(`The Total character of Given string is ${strValue.length}`);
    console.log(`The character at index 6 is :- ${strValue.charAt(6)}`);
    console.log(`The character at index 11 is :- ${strValue.charAt(12)}`);
    console.log(`Last Character of the Given String is :- ${strValue.charAt(strValue.length-1)}`);
    console.log(`Very first character of the Given String is :- ${strValue.charAt(0)}`);
    console.log(`Last Character of the Given String is :- ${strValue.charAt(strValue.length-3)}`);
    console.log(`Total number of Given word is : ${strValue.split(" ").length} and its Square is ${strValue.split(" ").length*strValue.split(" ").length} `);
   
}
str("JS the most popular language of internet");
