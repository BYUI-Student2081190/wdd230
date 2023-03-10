//JavaScript code for the Weather API activity
//Create const elements from the HTML
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const capDescription = document.querySelector("figcaption");

//Now create a varible to hold the api call to the
//weather site.
//This should work.
const url = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=a32e387524432e5aff27fccd2f59383f&units=imperial"

//Create a function to grab the info from the JSON
async function apiFetch()
{
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.log(data);//This for testing.
            //This is the call to display
            displayResults(data);
        }
        else{
            throw Error(await response.text());
        }
        
    }
    catch (error){
        console.log(error);
    }
};

apiFetch();

//Create the display results function
function displayResults(weatherData)
{
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);

    capDescription.textContent = desc;
};

