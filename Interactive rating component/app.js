const ratingChoices = document.querySelectorAll("li");
const button = document.querySelector(".submit");
const component = document.querySelector(".component");
const feedback = document.querySelector(".feedback");
const rating = document.querySelector("#chosen-rating");

ratingChoices.forEach(ratingButton => {
    ratingButton.addEventListener("click", ()=>{
         const btnID = ratingButton.id;
         rating.innerText = btnID;
    });
    button.addEventListener("click", ()=>{
        component.classList.add("hide");
        feedback.classList.add("flex");
    })
    
})


