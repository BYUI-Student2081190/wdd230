//Save the elements used by the file
const hiddenInput = document.querySelector("#userTurnIn");

//Now create a function saves information when loaded

function DateSaved(){

    let dateClicked = new Date();

    //Seperate the date into month, day, and year
    let monthLoaded = dateClicked.getMonth();
    let dayLoaded = dateClicked.getDay();
    let yearLoaded = dateClicked.getFullYear();

    let hourLoaded = dateClicked.getHours();
    let minuetsLoaded = dateClicked.getMinutes();

    let fulldateLoaded = `${monthLoaded}/${dayLoaded}/${yearLoaded} Time: ${hourLoaded} ${minuetsLoaded}`;
    
    //Save it to the element
    hiddenInput.value = fulldateLoaded; 
};

DateSaved();