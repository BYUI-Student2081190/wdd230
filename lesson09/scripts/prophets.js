//Practice API and Fetch
//Start with a varible to hold the URL link to
//the JSON file.

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//Create an async function to get the info, and
//await a response from the site.

async function GetProphetInfo()
{
    //Use await to wait for everything to load.
    const obtained = await fetch(url);
    const info = await obtained.json();

    //Use this to test if the info obtained displays
    //on the console. If so, that means we can work with
    //it.
    //console.table(info.prophets);
    //Test works.
    //Create a call to the other function
    displayProphets(info.prophets);
};

//Second function called "displayProphets" which creates
//prophet cards based on the info given from the JSON file.
//Must be displayed by rule.

const displayProphets = (prophets) => {
    
    //Create a variable to hold the div element to hold
    //the cards.
    const cards = document.querySelector("div.cards");

    //Create a foreach loop to loop through the
    //prophets
    prophets.forEach((prophet) => {
        //Create new elements to add to the div
        let newCard = document.createElement('section');
        let prophetName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('h3');
        let birthPlace = document.createElement('h3');
        let chilNum = document.createElement('h3');
        let years = document.createElement('h3');
        let deathDate = document.createElement('h3');
        let age = document.createElement('h3');

        //Varible to hold the results of the age
        let birthYear = prophet.birthdate;
        //Had to turn death into a string so the
        //function could run it.
        let deathYear = `${prophet.death}`;

        let deathAge = GetDeathAge(birthYear, deathYear);

        //Set the attributes of each element, and
        //set the text content of the name.
        prophetName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;
        chilNum.textContent = `Number of Children: ${prophet.numofchildren}`;
        years.textContent = `Years as Prophet: ${prophet.length}`;
        //Create an if statement that tests if the prophet is still
        //kicking.
        if (prophet.death === null)
        {
            deathDate.textContent = `Current Prophet`;
        }

        else
        {
            deathDate.textContent = `Death Date: ${prophet.death}`;
        }

        //deathDate.textContent = `Death Date: ${prophet.death}`;
        age.textContent = `Age: ${deathAge}`;

        //img
        portrait.setAttribute('src', prophet.imageurl);
        //Create if statements to check if the order is a certain
        //amount
        if (prophet.order === 1)
        {
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}-${prophet.order}st Latter-day President`);
        }

        else if (prophet.order === 2)
        {
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}-${prophet.order}nd Latter-day President`);
        }

        else if (prophet.order === 3)
        {
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}-${prophet.order}rd Latter-day President`);
        }

        else
        {
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}-${prophet.order}th Latter-day President`);
        }

        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Append the elements to the parent
        newCard.appendChild(prophetName);
        newCard.appendChild(birthDate);
        newCard.appendChild(birthPlace);
        newCard.appendChild(chilNum);
        newCard.appendChild(years);
        newCard.appendChild(deathDate);
        newCard.appendChild(age);
        newCard.appendChild(portrait);

        //Append our new Card to the div
        cards.appendChild(newCard);
    })
};

//Function created to calculate the death date of the prophet
function GetDeathAge(birth, death)
{
    //Split the strings
    let birthSplit = birth.split(' ');

    //Get the birth year
    let birthYear = birthSplit[2];

    //Do the same for death year
    let deathSplit = death.split(' ');

    let deathYear = deathSplit[2];
    
    //Create an age variable
    let age = 0;

    //Create a currentDate object
    //for a prophet who is alive today.
    let date = new Date;

    let curYear = date.getFullYear();

    //Calulate the age
    if (deathYear === undefined)
    {
        //Now do the math
        age = curYear - birthYear;
    }

    else
    {
        age = deathYear - birthYear;
    }

    //Return age
    return age;
};

//Function call
GetProphetInfo();