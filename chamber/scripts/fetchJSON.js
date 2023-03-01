//API Fetch for my site

//Create a varible to hold the JSON file

const dataFile = ;

//Create an async function to get the info, and
//await a response from the site

async function GetBuisnessInfo()
{
    //Use await to wait for things to load in
    const obtained = await fetch(dataFile);
    const info = await obtained.json();

    //Test to Display
    console.table(info.buisnesses);
};