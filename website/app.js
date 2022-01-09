// Personal API Key for OpenWeatherMap API
const apiKey = `584befef1f6116016438014a9b30ff2a`;
const endPoint = `https://api.openweathermap.org/data/2.5/weather`;

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */

/* Function called by event listener */
const buttonFunction = async e => {
    e.preventDefault();
    const feelings = document.getElementById("feelings");
    const zipCode = document.getElementById("zip");
    const baseURL = `${endPoint}?zip=${zipCode.value}&appid=${apiKey}&units=imperial`;
    const response = await fetch(baseURL).then(data => data.json());
    console.log("🚀 ~ file: app.js ~ line 18 ~ response", response)
    console.log("🚀 ~ file: app.js ~ line 17 ~ baseURL", baseURL)
};

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", buttonFunction);
