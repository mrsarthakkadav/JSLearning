function interviewIlligibility(gadScore,hscScore,sscScore,CandidateName) {
var result = gadScore>=70 || hscScore>=80|| sscScore>=90 ? "elligible" : "Unfortunately ";
console.log(`Congrates ${CandidateName} you are ${result} for TCS interview.`);
    
}
interviewIlligibility(80,86,90,"Sarthak");
interviewIlligibility(70,65,55,"Pawan");
interviewIlligibility(60,79,88,"Shubham")