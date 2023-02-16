//Lazy Loader for Discover Page
//Create a variable to hold all the picture elements
let loadedImages = document.querySelectorAll("img[data-src]");

//Get all the values from the data-src and replace the
//src
function loadImage (img){

    img.setAttribute("src", img.getAttribute("data-src"));
    img.removeAttribute("data-src");

};

//Call the function to remove the data-src
//Also create an if statement to test if the element is
//in the viewport
if ("IntersectionObserver" in window){
    const imageObserver = new IntersectionObserver((items, observer) =>{
        items.forEach((item) => {

            if (item.isIntersecting){
                loadImage(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    loadedImages.forEach((img) => {imageObserver.observe(img)});
}

else {
    loadedImages.forEach((img) => {loadImage(img)});
};
