


const renderHtml = function(data){
    document.getElementById("active").textContent = data.active.toLocaleString();
    document.getElementById("cases").textContent = data.cases.toLocaleString();
    document.getElementById("death").textContent = data.deaths.toLocaleString();
    document.getElementById("recovered").textContent = data.recovered.toLocaleString();
}

fetch('https://disease.sh/v3/covid-19/all')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderHtml(data);
    
  });

var button = document.querySelector("button");
button.addEventListener('click', () => {
  var country = document.getElementById('searchButton').value;
  console.log(country);
  fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (!data.country) {
          
        document.getElementById("places").innerHTML = data.message;
    } else {
        document.getElementById("places").textContent = data.country;
        renderHtml(data);
        
      }

    });
});