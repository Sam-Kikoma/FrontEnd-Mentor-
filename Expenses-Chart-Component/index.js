// Fetching data from the json
async function fetchData (){
    const url = "https://api.jsonbin.io/v3/b/63c0589215ab31599e34bcb1";
    let response = await fetch(url);
    let dataPoints = await response.json();
    let data = dataPoints.record;
    return data;
}

// Extract days and amount
let xLables = [];
let yLables = [];
fetchData().then(data => {
  for(let i = 0; i < data.length; i++){
    xLables.push(data[i].day);
    yLables.push(data[i].amount);
  }
})

var data = [
  {
    x: xLables,
    y: yLables,
    type: 'bar'
  }
];

Plotly.newPlot("bar-graph", data);



