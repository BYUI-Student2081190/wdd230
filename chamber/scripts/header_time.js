
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

//Come Join us Tag
const comeJoinUsTop = document.querySelector("#comeJoinUsHeader");
const dayNum = currentTime.getDay();
//Test versions of dayNum
//const dayNum = 1;
//const dayNum = 2;

function testDay(day){
    if (day === 1 || day === 2 ){
        let words = document.createElement("h2");

        words.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

        comeJoinUsTop.appendChild(words);
    }

    else{
        comeJoinUsTop.remove();
    }
};

testDay(dayNum);