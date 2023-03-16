//This JavaScript Code is to make the homepage dynamic, and 
//allow our Gold members of the site to recive spotlight
//attention on the home page. 

//Collect the elements needed to change.
const spotlight1 = document.querySelector("#spotlight1");
const spotlight2 = document.querySelector("#spotlight2");
const spotlight3 = document.querySelector("#spotlight3");

const jsonFile = 'https://byui-student2081190.github.io/wdd230/chamber/data.json';

//These I will make change everytime we load up the home page.
//So the gold members get their adds in.

//Create a function to recive the JASON information from the site.
async function getData()
{
    //Use await to wait for things to load in.
    const obtained = await fetch(jsonFile);
    const info = await obtained.json();

    //Test log the info.
    //console.log(info);
    //Worked, call the next function to orginize the
    //divs.
    displaySpotLight(info.buisnesses);
};

function displaySpotLight(buisness)
{
    //First reset the divs to be blank.
    resetSpotLight();

    //Now create new attributes, and children elements to
    //the spotlights all depending on what gold member they get.

    //Create a list to hold the gold members.
    let memberList = [];

    //Create a check to see which objects are gold members.
    buisness.forEach((item) => {
        //Create a check that finds the gold members and saves
        //them to a list.
        if (item.membership === "Gold")
        {
            //Add the name of the buisness to a list
            memberList.push(item.name);
        }
    })

    //Now take the array and get a random number from the
    //length of the array.
    let lenOfMembers = memberList.length;

    //Run a block of code three times to get each new
    //div element from the array.
    //Call the randomNumber function.
    let randomNumber = generateRandomNumber(lenOfMembers);

    //Now get that name from the list and assign it to
    //a variable
    const nameOne = memberList[randomNumber];

    //Now pop nameOne from the List
    memberList.splice(randomNumber, 1);

    //Now do the same for nameTwo and nameThree.
    lenOfMembers = memberList.length;

    randomNumber = generateRandomNumber(lenOfMembers);

    const nameTwo = memberList[randomNumber];

    memberList.splice(randomNumber, 1);

    //Three
    lenOfMembers = memberList.length;

    randomNumber = generateRandomNumber(lenOfMembers);

    const nameThree = memberList[randomNumber];

    memberList.splice(randomNumber, 1);

    //Now take these and use these to create the SpotLights.
    //Pass them into the function.
    createSpotLight(buisness, nameOne, spotlight1);
    createSpotLight(buisness, nameTwo, spotlight2);
    createSpotLight(buisness, nameThree, spotlight3);

};

//Reset the div function
function resetSpotLight()
{
    spotlight1.innerHTML = '';
    spotlight2.innerHTML = '';
    spotlight3.innerHTML = '';
};

function generateRandomNumber(maxLimit)
{
    //This function gets a random number, and returns it back
    //to the code using it.
    let randomGenerator = Math.random() * maxLimit;

    let randomNumber = Math.floor(randomGenerator);

    return randomNumber;
};

function createSpotLight(buisnesses, spotlightName, spotlight)
{
    buisnesses.forEach((item) => {
        //Now create checks to find the
        //items that match up with the objects we
        //want created.
        if (item.name === spotlightName)
        {
            //Create the elements.
            const heading = document.createElement('h4');
            const img = document.createElement('img');
            const section = document.createElement('section');
            const address = document.createElement('p');
            const phone = document.createElement('p');
            const website = document.createElement('a');

            //Now assign attributes to each that need them.
            img.setAttribute('src', item.logo);
            img.setAttribute('alt', `${item.name} logo`);

            website.setAttribute('href', item.site);

            //Now assign text content needed for each.
            heading.textContent = item.name;
            address.textContent = item.address;
            phone.textContent = item.number;
            website.textContent = "Website";

            //Now append the children start with the section
            //element then move all to the parent.

            section.appendChild(address);
            section.appendChild(phone);

            //Now the parent.
            spotlight.appendChild(heading);
            spotlight.appendChild(img);
            spotlight.appendChild(section);
            section.appendChild(website);
        }

    })
};

//Call the getData function to start the program.
getData();