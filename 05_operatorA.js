console.log(`==============Step 1===================`);
function squareOfWordLength(str) {
    console.log(`Length of the given word is : ${str.length}`);
    console.log(`Square of the given word is : ${str.length*str.length}`);

    
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`==============Step 2===================`);

var givenStr = "I am Angular Developer";
function givenStris(){
    console.log(`Given string length is : ${givenStr.length} `);
    var result=givenStr.split(" ");
    console.log(`Total number of word : ${result.length}`);
    console.log(`After dividing the Given String by Number of word value is : ${givenStr.length/result.length}`);
    console.log(`After Multiplifaction the Given String by Number of word value is : ${givenStr.length*result.length}`);

}
givenStris();