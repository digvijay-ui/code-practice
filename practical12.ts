// check temperature

function checkTemperature(temperature : number){
    if(temperature >= 30){
        console.log("Temperature is Hot");
    } else if (temperature >= 20){
        console.log("Temperature is Normal");
    }
    else {
        console.log("Temperature is Cold");
    }
}
checkTemperature(15);