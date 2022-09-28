const allImages = document.querySelectorAll(".allImage");
const imageForward = document.querySelector(".imageForward i");
const imageBackward = document.querySelector(".imageBackward i");

let imageIndex = 0;
const forwardFunction = () => {
    if(imageIndex === 2){
        allImages[imageIndex].style.display="none";
        imageIndex = 0;
        allImages[imageIndex].style.display="inline-block";
        
    }else{
        allImages[imageIndex].style.display="none";
        imageIndex++;
        allImages[imageIndex].style.display="inline-block";
    }
}

const backwardFunction = () => {
    if(imageIndex === 0){
        allImages[imageIndex].style.display="none";
        imageIndex = 2;
        allImages[imageIndex].style.display="inline-block";
    }else{
        allImages[imageIndex].style.display="none";
        imageIndex--;
        allImages[imageIndex].style.display="inline-block";
    }
}
imageForward.addEventListener("click", forwardFunction);
imageBackward.addEventListener("click", backwardFunction);
