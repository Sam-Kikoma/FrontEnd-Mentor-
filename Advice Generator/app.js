// Selectors
const generate = document.querySelector("#generate-btn");
const idNo = document.querySelector("#adv-no");
const adviceText = document.querySelector("#advice");

// Event Listeners
generate.addEventListener("click", update);
window.addEventListener("DOMContentLoaded", () => {
    update();
  });

// Functions
async function fetchApi(){
    const dataFetch = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const data = await dataFetch.json();
    return data;
}

async function update(){
    const data = await fetchApi();
    idNo.innerText = data.slip.id;
    adviceText.innerText  = data.slip.advice;
}
