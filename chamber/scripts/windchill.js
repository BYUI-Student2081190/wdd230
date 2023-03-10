//windchill.js is built to calculate windchill in the area
//UPDATE: Add a live weather and windspeed to the calculations,
//this will allow a more acurate pop up.

//Tested, this works!

//Assign a URL to hold the link to the weather site
const url = "https://api.openweathermap.org/data/2.5/weather?q=Salt Lake City&appid=a32e387524432e5aff27fccd2f59383f&units=imperial"
//Assign a varible to hold the document element that needs
//changing
const windChillDisplay = document.querySelector("#windChill");

//Now assign the varibles to hold the elements that will
//get replaced.
const displayTemp = document.querySelector("#currentTemp");

const displayWindSpeed = document.querySelector("#windSpeed");

const displayDescript = document.querySelector('#descript');

const displayImage = document.querySelector('#weatherImg');

//Create a function to fetch the infomation.
async function getWeather()
{
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //Object retreaved! Now it is time to send
            //it to a function that will put everything
            //nicely together for us to use.
            weatherGenerator(data);

        }
        else{
            throw Error(await response.text());
        }
        
    }
    catch (error){
        console.log(error);
    }
};

//Use this function to generate the weather.
//This function will do a lot of the heavy lifting for the
//rest of the program.
function weatherGenerator(weatherData)
{
    //From here we will get the information we
    //need for our site.
    //Get temp and description.
    const temp = weatherData.main.temp;

    const description = weatherData.weather[0].description;

    //Now get the wind speed.
    const windSpeed = weatherData.wind.speed;

    //Now calculate the windchill.

    //Create Variable to hold windChill results
    let windChill = "";

    //Create if statement to test to see if it qualifies to
    //Use the function
    if (temp <= 50 && windSpeed > 3.0){
        windChill = WindChillCalc(temp, windSpeed);
    }

    else{
        windChill = "N/A";
    };

    //Add display features to each Element that needs
    //it.

    //Check to see which image we need in the
    //weather box with an if statement series.

    if (weatherData.weather[0].main == 'Thunderstorm')
    {
        displayImage.setAttribute('src', 'images/Thunder_100.png');
        displayImage.setAttribute('alt', description);
    }

    else if (weatherData.weather[0].main == 'Drizzle')
    {
        displayImage.setAttribute('src', 'images/rain_100.png');
        displayImage.setAttribute('alt', description);
    }

    else if (weatherData.weather[0].main == 'Rain')
    {
        displayImage.setAttribute('src', 'images/rain_100.png');
        displayImage.setAttribute('alt', description);
    }

    else if (weatherData.weather[0].main == 'Snow')
    {
        displayImage.setAttribute('src', 'images/snow_100.png');
        displayImage.setAttribute('alt', description);
    }

    else if (weatherData.weather[0].main == 'Clouds')
    {
        displayImage.setAttribute('src', 'images/cloudy_100.png');
        displayImage.setAttribute('alt', description);
    }

    else if (weatherData.weather[0].main == 'Clear')
    {
        displayImage.setAttribute('src', 'images/sunny_100.png');
        displayImage.setAttribute('alt', description);
    }

    //Else == anything involving fog, sand, tornato, ect.
    else
    {
        displayImage.setAttribute('src', 'images/foggy_100.png');
        displayImage.setAttribute('alt', description);
    }

    displayTemp.textContent = temp.toFixed(0);
    displayDescript.textContent = description;
    displayWindSpeed.textContent = windSpeed.toFixed(1);

    //Display windchill to the html.
    windChillDisplay.innerText = windChill;
};

//Create a function to do the math
function WindChillCalc(temp, wSpeed)
{
    //Calculate WindChill
    let windChill = 35.74 + (0.6215 * temp) - (35.75*(wSpeed ** 0.16)) + (0.4275 * (wSpeed ** 0.16));

    //Round windChill to two decmial places
    windChill = windChill.toFixed(2);

    //Return WindChill
    return(windChill);
};

//Activiate the program.
getWeather();