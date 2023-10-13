let professor = {
    subject : "Physics",
    language : "English",
    experience : 2 ,
    article_publish : 1,
    basic_sal : 32000,
    


    degree : {
        engineering : 'CSC',
        PHD : 'Adv Computing',
        percentage : '70',
        passout_year : 2010,
        native_Language : 'Marathi',

    },
    certificates : ['Hacker Rank Participation','Certificate in IFE Course','Certificate in Adv Programming'],

    
};
console.log(`=====Step 1 : Add 5 properties in Professor========= `);
console.log(professor.subject);
console.log(professor.experience);
console.log(professor.article_publish);
console.log(professor.basic_sal);
console.log(professor.language);
console.log(`=====Step 2 : nested Object========= `);
console.log(professor.degree);
console.log(`=====Step 3 : Creating Certificate array========= `);
console.log(professor.certificates);
console.log(professor);
console.log(`===Step 4 : After Adding new Prperty ===`);
professor.totalExperience= "14 year";
console.log(`===Step 5 : After Deleting experience Prperty ===`);
delete professor.experience;
console.log(professor);
console.log(`===Step 6 : Adding new element in Certificate array ====`);
professor.certificates.push('Oracle certified');
console.log(professor.certificates);
console.log(`===Step 7 : Display the Last element of Array certificate==== `);
console.log(professor.certificates[professor.certificates.length-1]);
console.log(`===Step 8 : Display Complete Object  ====`);
console.log(professor);
console.log(`===Step 9 : Transverse certificate Array ====`);
for (const index of professor.certificates) {
    console.log(professor.certificates[index]+ "");
    
}




