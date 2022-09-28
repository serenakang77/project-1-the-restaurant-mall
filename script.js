// Button Function starts
const element = document.querySelector(".menuBar");
const menuBarElement = document.querySelector(".menuBarButton");
const closeElement = document.querySelector(".closeButton");

menuBarElement.addEventListener("click", function(){
    element.style.visibility = "visible";
    element.style.opacity = "1";
    menuBarElement.style.visibility = "hidden";
})

closeElement.addEventListener("click", function(){
    menuBarElement.style.visibility = "visible";
    element.style.visibility = "hidden";
    element.style.opacity = "0";
    element.style.transition = "visibility 0.5s, opacity 0.5s linear";
})
// Button Function ends

// Nextpage Function starts
const nextPage = document.querySelectorAll(".nextPage");
const forwardButton = document.querySelector(".forward");
const backwardButton = document.querySelector(".backward");
const homePage = "file:///C:/Users/home/Documents/junoBootcamp/Project/project-1-the-restaurant-mall/project-1-the-restaurant-mall/index.html";
const blogPage = "file:///C:/Users/home/Documents/junoBootcamp/Project/project-1-the-restaurant-mall/project-1-the-restaurant-mall/blog.html";
const contactPage = "file:///C:/Users/home/Documents/junoBootcamp/Project/project-1-the-restaurant-mall/project-1-the-restaurant-mall/contact.html";
const bodyElement = document.querySelector("body");

forwardButton.addEventListener("click", function(){
    bodyElement.classList.add("loaded");
    if(homePage === nextPage[0].baseURI){
        window.location.replace(`${blogPage}`) 
    }else if(blogPage === nextPage[1].baseURI){
        window.location.replace(`${contactPage}`) 
    }else if(contactPage === nextPage[2].baseURI){
        window.location.replace(`${homePage}`) 
    }
})

backwardButton.addEventListener("click", function(){
    if(homePage === nextPage[0].baseURI){
        window.location.replace(`${contactPage}`) 
    }else if(blogPage === nextPage[1].baseURI){
        window.location.replace(`${homePage}`) 
    }else if(contactPage === nextPage[2].baseURI){
        window.location.replace(`${blogPage}`) 
    }
})
