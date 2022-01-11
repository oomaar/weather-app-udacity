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
            date: newDate
        })
    });
};

/* Function called by event listener */
const buttonFunction = async e => {
    e.preventDefault();
    // Step-1: GET Web API Data
    const zipCode = document.getElementById("zip");
    const baseURL = `${endPoint}?zip=${zipCode.value}&appid=${apiKey}&units=imperial`;
    const response = await fetch(baseURL).then(data => data.json());
    // console.log("🚀 ~ file: app.js ~ line 37 ~ response", response);

    // Step-2: POST data to Server
    postData(response);
};

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", buttonFunction);