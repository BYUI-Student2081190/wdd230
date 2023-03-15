function toggleMenu()
{
   document.getElementById("navigation").classList.toggle("open");
   document.getElementById("hamburgerBtn").classList.toggle("open");

   //Test, create an if check to change the inner text of the
   //Hamburger button.

   //Create an attribute for it.
   if (x.className == "open")
   {
      x.textContent = `X`;
   }

   else
   {
      //Convert the code into a string using JS.
      //Works.
      x.innerText = String.fromCharCode(9776);
   }
};

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;