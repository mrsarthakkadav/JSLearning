var leapYear= function(year){
    if((year/4==0)&&(0 != year % 100) || (0 == year % 400))
    {
        console.log(`${year} it is a Leap Year`);

    }
    else{
        console.log(`${year} it is not a Leap Year`);
    }

}

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);