
//Create an Object to hold the time variable
let currentTime = new Date();

//Create an Array to hold all the month names
const headMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const headDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const wordMonth = headMonths[currentTime.getMonth()];
const headYear = currentTime.getFullYear();
const headDay = headDays[currentTime.getDay()];
const headDate = currentTime.getDate();

const today = `${headDay}, ${headDate} ${wordMonth} ${headYear}`; 

//Put into words
document.querySelector("#headerDate").innerText = today;