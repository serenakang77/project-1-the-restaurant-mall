$(document).ready(() => {

    const element = document.querySelector(".menuBar");
    const menuBarElement = document.querySelector(".menuBarButton");
    // const menuBarDelay = document.querySelector(".menuBar");
    const removeSpace = document.querySelector(".removeSpace");
    let newQuery = window.matchMedia('(max-width: 600px)');

    $(".menuBarButton").on("click", function(event){
        event.preventDefault();
        // element.style.display = "block";
        element.style.visibility = "visible";
        element.style.opacity = "1";
        // menuBarElement.style.display = "none";
        menuBarElement.style.visibility = "hidden";
        // removeSpace.style.margin = "0";
        // menuBarDelay.style.transition = "3s";
    })

    $(".closeButton").on("click", function(event){
        event.preventDefault();
        // element.style.visibility = "hidden";
        // element.style.display = "none";
        menuBarElement.style.visibility = "visible";
        // menuBarElement.style.display = "inline-block";
        // if($(window).width() < 600){
        //     menuBarElement.style.display = "inline-block";
        // } else{
        //     return menuBarElement.style.display = "none";
        // }
        element.style.visibility = "hidden";
        element.style.opacity = "0";
        element.style.transition = "visibility 0.5s, opacity 0.5s linear"
        // if(newQuery.matches){
        //     return menuBarElement.style.display = "inline-block";
        // } else{
        //     return menuBarElement.style.display = "none";
        // }

    })
})