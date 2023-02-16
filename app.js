



const renderHtml = function(data){

    if(data["Active Cases_text"] == "" ){
    document.getElementById("active").textContent = "Nill";
    }
    else{
        const activeCases = data["Active Cases_text"].toLocaleString();
        document.getElementById("active").textContent = activeCases.slice(1,activeCases.length)
    }
    document.getElementById("cases").textContent = data["Total Cases_text"].toLocaleString();
    document.getElementById("death").textContent = data["Total Deaths_text"].toLocaleString();
    document.getElementById("recovered").textContent = data["Total Recovered_text"].toLocaleString();
}

const fetchCovidData = () =>{


    fetch('https://covid-19.dataflowkit.com/v1/world')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data["Active Cases_text"]);
    renderHtml(data);
    
});

var button = document.querySelector("button");
button.addEventListener('click', () => {
    var country = document.getElementById('searchButton').value;
    //   console.log(country);
    fetch(`https://covid-19.dataflowkit.com/v1/${country}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if (!data.Country_text) {
            // document.getElementById("places").innerHTML = data.message;
            console.log("No country FOund");
        } else {
            document.getElementById("places").textContent = data["Country_text"];
            renderHtml(data);
            
        }
        
    });
});
};

fetchCovidData();