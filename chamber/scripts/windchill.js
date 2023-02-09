//windchill.js is built to calculate windchill in the area

//Assign a varible to hold the document element that needs
//changing
const windChillDisplay = document.querySelector("#windChill");

//Now assign the varibles to hold the info from the numbers needed
let temp = document.querySelector("#currentTemp").innerText;

let windSpeed = document.querySelector("#windSpeed").innerText;

//Create Variable to hold windChill results
let windChill = "";

//Convert temp and windSpeed to float
temp = parseFloat(temp);

windSpeed = parseFloat(windSpeed);

//Create if statement to test to see if it qualifies to
// Use the function
if (temp <= 50 && windSpeed > 3.0){
    windChill = WindChillCalc(temp, windSpeed);
}

else{
    windChill = "N/A";
};

//Create a function to do the math
function WindChillCalc(temp, wSpeed){
    //Calculate WindChill
    let windChill = 35.74 + (0.6215 * temp) - (35.75*(wSpeed ** 0.16)) + (0.4275 * (wSpeed ** 0.16));

    //Round windChill to two decmial places
    windChill = windChill.toFixed(2);

    //Return WindChill
    return(windChill);
};

//Display windchill to the html
windChillDisplay.innerText = windChill;