//JavaScript created to help manage the Contact Us page
//The goal behind this code is to remove the form when it gets
//submitted and replace it with a message letting the user know
//it got submitted.

//Set varibles to the elements targeted in the document
const contactUsForm = document.querySelector("#contactForm");
const contactUsSubButton = document.querySelector("#contactSubBut");


//Function to replace the html in the form to
//a completed message of sorts.
function formComplete()
{
    //Remove the inner html of the form
    contactUsForm.innerHTML = '';

    //Now replace the html with objects that contain 
    //a complete message.
    const completeMessTop = document.createElement('h2');
    const completeMessBody = document.createElement('p');

    //Now set the text of these new elements
    completeMessTop.textContent = `Thank You!`;
    completeMessBody.textContent = `Thank you for completing the form. We will be sure to contact you in the next few days.`;

    //Add the completed class to the form for different CSS
    //rules to apply
    contactUsForm.setAttribute('class', 'completedForm');

    //Now append them to the from element
    contactUsForm.appendChild(completeMessTop);
    contactUsForm.appendChild(completeMessBody);
};

//Add an event listener that looks for when the form
//gets submitted.
contactUsForm.addEventListener("submit", formComplete);
