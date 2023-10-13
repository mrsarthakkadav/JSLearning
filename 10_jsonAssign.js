const jsonStr = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev","DBA"],
    "age":23,
    "doj": "11-12-2019",
    "married":false,
    "address":{
        "street":"32,Laham St.",
        "city":"Innsbruck",S
        "country": "Austria"
    },
"referred-by":"E0012"
}`
const jsonObj=JSON.parse(jsonStr);
console.log(typeof jsonObj);
const varRole = jsonObj.role;
console.log(`Role is : ${varRole[0]}`);
console.log();
const lastVar = jsonObj.name.split(" ");
console.log(`last Name is : ${lastVar.pop()}`);
var dojA = new Date(jsonObj.doj);
console.log(`Only year : ${dojA.getFullYear()}`);