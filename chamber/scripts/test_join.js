//Made to test the Buisness Posistion option on the join
//page, using a Regular Expression

//Create elements to hold the values being watched
//by this JavaScript code

const watchEle = document.querySelector("#btitle");
const formSub = document.querySelector("#form");
const errorMes = document.querySelector("#error");

//Create event listener to see if the document gets 
//submitted
formSub.addEventListener("submit", (e) => {
    
    //Prevent the default reaction
    //if there is a value in the
    //element
    if (watchEle.value !== ""){

        //Create a variable of the value of
        //the element
        let eleValue = watchEle.value;

        //Call functions to test Element

        //Test the length and see if it
        //returns a fail
        let test1 = TestLength(eleValue);

        //Test alpha, hyphens, and spaces
        let test2 = TestAlpa(eleValue);

        //Display results
        //Display results takes the two tests, and
        //gives a unique error message based on what went
        //wrong in the value.
        DisplayError(test1, test2, e);
    }

});

//Functions that is built to run a series of tests on
//The element

//Test if only Alpa characters, hyphens, and spaces
function TestAlpa(value){

    //My pattern used
    //This should say, look to see if
    //there is any form of number,
    //if there any other form of symbol other
    //than "-", and spaces are not checked for.
    const patt = /(\d|\.|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\~|\`|\||\\|\:|\;|\"|\'|\?|\/|\<|\>|\,|\.|\{|\}|\[|\]|\_|\+|\=)/g;

    //This Regular Expression works!
    //test it, if it returns true it failed,
    //if false it passed.
    let valTest = patt.test(value);

    //Returns false because valTest is true,
    //meaning one of the symbols we do not want in there
    //is in the string.
    if (valTest === true){
        return false;
    }

    //else, because if valTest return anything
    //but true it passes the test, allowing us to
    //return true.
    else{
        return true;
    }
};

//Test if longer than 7 char
function TestLength(value){
    //Create a varible to hold the length of the
    //value
    let valueLeng = value.length;

    //Test the length of the value
    //If less than 7 fail
    if (valueLeng < 7){
        //Return false, which
        //is fail.
        return false;
    }

    //else pass
    else{
        //Return True,
        //which is pass.
        return true;
    }
};

//Display what error occured to the user
//so they can fix it and allow the form to pass.
function DisplayError(test1, test2, e){
    //view the results of the tests, and give what is needed
    //by what is recived.

    //If test1 fails
    //but test2 succeeded
    if(test1 === false)
    {
        //Stop the form from submitting
        e.preventDefault(); 

        //Display error message
        errorMes.innerText = `Error: Buisness Position must only contain alpha characters, hyphens, and or spaces. Must only be a minimum of 7 characters.`;
    }

    //If test1 succeeded, but test2 failed
    else if(test2 === false)
    {
        //Stop the form from submitting
        e.preventDefault();

        //Display error message
        errorMes.innerText = `Error: Buisness Position must only contain alpha characters, hyphens, and or spaces. Must only be a minimum of 7 characters.`;

    }

    //If both failed
    else if(test1 === false && test2 == false)
    {
        //Stop the form from submitting
        e.preventDefault();

        //Display error message
        errorMes.innerText = `Error: Buisness Position must only contain alpha characters, hyphens, and or spaces. Must only be a minimum of 7 characters.`;

    }
    //Otherwise submit the form
};