window.addEventListener("DOMContentLoaded", () => {
    update();
});

const resultData = document.querySelectorAll('.result-data');
const finalScore = document.querySelector("#final")

async function getData() {
      const response = await fetch('./data.json');
      const data = await response.json();
      return data;
}
  
async function update(){
    const data = await getData();
    let dataValues = [];
    for(let num of data){
        dataValues.push(num.score);
    }
    let total = 0;
    for(let i=0; i < resultData.length; i++){
        resultData[i].innerHTML = `${dataValues[i]} / <span>100</span>`
        total += dataValues[i];   
    }
    finalScore.innerHTML = `${Math.round(total/4)}`
}
