commentArray = [];

const section2Contact = document.querySelector(".section2ContactForm");
        
let arrayIndex = 0;
function createArray(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("part2FirstContainer");
    newDiv.innerHTML=`
    <figure class="part2FirstImg">
        <img src="${commentArray[arrayIndex].image}">
    </figure>
    <div class="part2FirstContent">
        <h5>${commentArray[arrayIndex].date} by ${commentArray[arrayIndex].userName}</h5>
        <p>${commentArray[arrayIndex].userComment}</p>
    </div>
    `;
    section2Contact.parentNode.insertBefore(newDiv, section2Contact);
    arrayIndex=arrayIndex+1;
}

function randomNums(){
    return Math.floor(Math.random() * 2) + 1;
}

const formElement2 = document.querySelector(".commentForm");
formElement2.addEventListener("submit", function(event){
    event.preventDefault();
    const inputElement = document.querySelectorAll("input");
    const textElement = document.querySelector("textarea");
    const [name, email] = inputElement;
    const date= new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const format = new Intl.DateTimeFormat('en-US', options).format(date).replace(/,/, '');
    const newComment = {
        userName: name.value,
        date: format,
        userComment: textElement.value,
        image: `./the-restaurant-mall-assets/the-restaurant-mall-assets/comment-${randomNums()}.jpg" alt="There is a one girl in the picture`
    }
    commentArray.push(newComment);
    createArray();
    name.value = "";
    email.value = "";
    textElement.value = "";
})
