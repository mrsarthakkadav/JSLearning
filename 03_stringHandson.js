var givenString= "   Hey you are doing good, keep it up     ";

function stringHandsOn() {
    console.log(`============Step 1============`);
    console.log(`Given String : ${givenString}`);
    console.log(`============Step 2============`);
    console.log(`Length of String : ${givenString.length}`);
    console.log(`============Step 3 ============`);
    var result= givenString.trim();
    console.log(`After Removing spaces length is : ${result.length}`);
    console.log(`============Step 4 ============`);
    console.log(`Total number of extra spaces removed : ${givenString.length-result.length}`);
    console.log(`============Step 5 ============`);
    console.log(`First character : ${result.charAt(0)}`);
    console.log(`============Step 6 ============`);
    var lastIndexChar = result.charAt(result.length-1);
    console.log(`Last character : ${lastIndexChar}`);
    console.log(`============Step 7 ============`);
    console.log(`Index of good is : ${givenString.indexOf('good')}`);
    console.log(`============Step 8 ============`);
    console.log(`Substring startingg from Index 22 is : ${givenString.slice(22)}`);
    console.log(`============Step 9 ============`);
    console.log(`String end with "up" ${result.endsWith('up')}`);
    console.log(`============Step 10 ============`);
    console.log(`String end with "Hey" ${result.startsWith('Hey')}`);



}
stringHandsOn();
