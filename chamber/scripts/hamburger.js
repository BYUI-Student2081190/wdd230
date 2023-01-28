function toggleMenu()
{
   document.getElementById("navigation").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;