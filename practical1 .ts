function checkLeapYear (year:number){
    if(year % 4 === 0){
        console.log("leap year");
    }else{
        console.log("not a leap year");
    }
}

checkLeapYear(2024);