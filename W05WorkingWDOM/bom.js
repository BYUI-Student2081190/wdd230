//Varibles
const input = document.querySelector("#favchap");
const button = document.querySelector("#addChap");
const list = document.querySelector("#list");

function makeScript(){
    if (input.value === ""){
        //Do nothing if it equals this
    }

    else{
        //Create the new elements
        let newScript = document.createElement("li");
        let deletButt = document.createElement("button");

        newScript.innerText = input.value;
        
        deletButt.innerText = "X";
        //Add a class to locate button
        deletButt.setAttribute("class", "delete-btn");
        //Append button to li
        newScript.appendChild(deletButt);
        //Append li to list
        list.appendChild(newScript);

        //Make input nothing
        input.value = "";
    }
};

//You can pass e like a parameter, this is called the
//event. This is a variable representing what is getting clicked
//in the list.

function deleteScript(e){
    const clickedEle = e.target;
    //Delete Scripture
    if (clickedEle.classList[0] === "delete-btn"){
        const parentEle = clickedEle.parentElement;

        parentEle.remove();
    }
};

//Add focus to the input
input.focus();

//Change input to nothing
input.value = "";

//Add event listener
button.addEventListener("click", makeScript);
//Add event listener to kill li
list.addEventListener("click", deleteScript);

