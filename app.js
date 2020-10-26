

_u = _.capitalize();
fetch('https://disease.sh/v3/covid-19/all')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("death").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
  });

var button = document.querySelector("button");
button.addEventListener('click', () => {
  var country = _.capitalize(document.getElementById('searchButton').value);
  console.log(country);
  fetch('https://corona.lmao.ninja/v2/countries/' + country + '?yesterday=true&strict=true&query')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (country == data.country) {

        document.getElementById("places").innerHTML = data.country;
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("death").innerHTML = data.deaths.toLocaleString();
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
      } else {

        document.getElementById("places").innerHTML = "Oops! No country Found";
      }

    });
});