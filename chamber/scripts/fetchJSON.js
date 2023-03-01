//API Fetch for my site

//Create a varible to hold the JSON file

const dataFile = 'https://byui-student2081190.github.io/wdd230/chamber/data.json';

//Create an async function to get the info, and
//await a response from the site

async function GetBuisnessInfoGrid()
{
    //Use await to wait for things to load in
    const obtained = await fetch(dataFile);
    const info = await obtained.json();

    //Call the display function to start
    //Displaying all that we have in a grid.
    DisplayBuisnessGrid(info.buisnesses);
};

function DisplayBuisnessGrid(buisnesses)
{
    //Create a variable to hold the div element to
    //Write to
    const displayGrid = document.querySelector("div.blocks");

    //Reset the list so we dont have any problems
    ResetList();

    //Loop through the buisnesses and create what we need
    buisnesses.forEach((buisness) => {
        //Create new elements to add to the div
        let newCard = document.createElement('section');
        let buisnessName = document.createElement('h3');
        let buisnessAdd = document.createElement('p');
        let site = document.createElement('a');
        let logo = document.createElement('img');
        let phone = document.createElement('p');

        //Add text to those that need text
        buisnessName.textContent = `${buisness.name}`;
        buisnessAdd.textContent = `${buisness.address}`;
        site.textContent = `www.${buisness.name}.com`;
        phone.textContent = `${buisness.number}`;
        
        //Now add attributes to those that need it
        //Logo img
        logo.setAttribute('src', buisness.logo);
        logo.setAttribute('alt', `${buisness.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        
        //For the links
        site.setAttribute('href', buisness.site);

        //Append them to the parent
        newCard.appendChild(logo);
        newCard.appendChild(buisnessName);
        newCard.appendChild(buisnessAdd);
        newCard.appendChild(phone);
        newCard.appendChild(site);

        //Append parent to the grid div
        displayGrid.appendChild(newCard);
    })
};

//Function to reset the grid div
function ResetGrid()
{
    //Works!
    document.querySelector("div.blocks").innerHTML = "";
};

//Create Function to generate the list
async function GetBuisnessInfoList()
{
    //Use await to wait for things to load in
    const obtained = await fetch(dataFile);
    const info = await obtained.json();

    //Call the display function to start
    //Displaying all that we have in a grid.
    DisplayBuisnessList(info.buisnesses);
};

function DisplayBuisnessList(buisnesses)
{
    //Create a variable to hold the div element to
    //Write to
    const displayList = document.querySelector("div.list");

    //Reset Grid so we don't have any problems
    ResetGrid();

    //Loop through the buisnesses and create what we need
    buisnesses.forEach((buisness) => {
        //Create new elements to add to the div
        let newList = document.createElement('ul');
        let buisnessName = document.createElement('li');
        let buisnessAdd = document.createElement('li');
        let site = document.createElement('a');
        let phone = document.createElement('li');

        //Add text to those that need text
        buisnessName.textContent = `${buisness.name}`;
        buisnessAdd.textContent = `${buisness.address}`;
        site.textContent = `www.${buisness.name}.com`;
        phone.textContent = `${buisness.number}`;
        
        //Now add attributes to those that need it
        //For the links
        site.setAttribute('href', buisness.site);

        //Append them to the parent
        newList.appendChild(buisnessName);
        newList.appendChild(buisnessAdd);
        newList.appendChild(phone);
        newList.appendChild(site);

        //Append parent to the grid div
        displayList.appendChild(newList);
    })
};

//Function to reset the list div
function ResetList()
{
    //Works!
    document.querySelector("div.list").innerHTML = "";
};

//Function call
//This is default load up, can be changed by user.
GetBuisnessInfoGrid();

//Varibles to contain the buttons
const gridButton = document.querySelector("#imgButton");
const listButton = document.querySelector("#listButton");

//Advent Listeners
gridButton.addEventListener("click", GetBuisnessInfoGrid);
listButton.addEventListener("click", GetBuisnessInfoList);