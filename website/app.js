// Personal API Key for OpenWeatherMap API
const apiKey = `584befef1f6116016438014a9b30ff2a`;
const endPoint = `https://api.openweathermap.org/data/2.5/weather`;

let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

/* Function to POST data */
const postData = async data => {
    await fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            temp: data.main.temp,
            date: newDate,
            feelsLiks: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            visibility: data.visibility,
            windSpeed: data.wind.speed,
        })
    });
};

/* Function to updateUI */
const updateUI = async () => {
    const uiData = await fetch("/all").then(data => data.json());
    const feelings = document.getElementById("feelings");

    document.getElementById("temp").innerHTML = `${Math.round(uiData.temp)}&deg`;
    document.getElementById("date").innerHTML = `${uiData.date}`;
    document.getElementById("users-feeling").innerHTML = `<p>Users Feeling</p> ${feelings.value}`

    // Extra Data
    document.getElementById("weather-feelsLiks").innerHTML = `<p>Feels Like</p> ${uiData.feelsLiks} &deg`
    document.getElementById("humidity").innerHTML = `<p>Humidity</p> ${uiData.humidity} %`
    document.getElementById("pressure").innerHTML = `<p>Pressure</p> ${uiData.pressure} hPa`
    document.getElementById("temp-max").innerHTML = `<p>Temp Max</p> ${Math.round(uiData.tempMax)} &deg`
    document.getElementById("temp-min").innerHTML = `<p>Temp Min</p> ${Math.round(uiData.tempMin)} &deg`
    document.getElementById("visibility").innerHTML = `<p>Visibility</p> ${uiData.visibility / 1000} km`
    document.getElementById("wind-speed").innerHTML = `<p>Wind Speed</p> ${uiData.windSpeed} km/h`
};



/* Function called by event listener */
const buttonFunction = async e => {
    e.preventDefault();
    // Step-1: GET Web API Data
    const zipCode = document.getElementById("zip");
    const baseURL = `${endPoint}?zip=${zipCode.value}&appid=${apiKey}&units=imperial`;
    const response = await fetch(baseURL).then(data => data.json());
    console.log("🚀 ~ file: app.js ~ line 37 ~ response", response);

    // Step-2: POST data to Server
    postData(response);

    // Step-3: Update UI
    updateUI();
    document.querySelector(".output").style.opacity = 1;
};

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", buttonFunction);