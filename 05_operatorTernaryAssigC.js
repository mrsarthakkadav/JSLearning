
console.log(`=================Step 1==================`);
function maleMarriageEligibility(gender,age,boyName) {
var result = age>="21" && gender=="Male" ? `eligible` : `not eligible`;
console.log(`Hey ${boyName} your Age is ${age}, you are ${result} for marriage. `);

return(boyName);    
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew jobs");

console.log(`=================Step 2==================`);
function femaleMarriageEligibility(gender,age,girlName) {
    var result = age>="18" && gender=="Female" ? `eligible` : `not eligible`;
    console.log(`Hey ${girlName} your Age is ${age}, you are ${result} for marriage. `);
    
    return(girlName);    
    }
    femaleMarriageEligibility("Female",16,"Jenifer");
    femaleMarriageEligibility("Female",27,"Malinda Gates")