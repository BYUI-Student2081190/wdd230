//Create the lastdate object
let lastdate = new Date(document.lastModified);

let month = lastdate.getMonth();
//Add one so that the month is actually the month.
month += 1;

const year = lastdate.getFullYear(); 
const day = lastdate.getDate();

const hour = lastdate.getHours();
const minute = lastdate.getMinutes();
const seconds = lastdate.getSeconds();
const fulltime = `${hour}:${minute}:${seconds}`;

const updatetime = `${month}/${day}/${year} ${fulltime}`;

//Send back to HTML
document.querySelector("#moddate").textContent = `2023 Valley of Jordan Chamber | Christopher Scott | WDD 230 Project | Last Modification: ${updatetime}`;
