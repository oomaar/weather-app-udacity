// Personal API Key for OpenWeatherMap API
const apiKey = `584befef1f6116016438014a9b30ff2a`;
const endPoint = `https://api.openweathermap.org/data/2.5/weather`;

let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

/* Function to GET Web API Data*/

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

/* Function to GET Project Data */
const updateUI = async () => {
    const uiData = await fetch("/all").then(data => data.json());
    document.getElementById("temp").innerHTML = `${uiData.temp}`;
    document.getElementById("date").innerText = `${uiData.date}`;
};

/* Function called by event listener */
const buttonFunction = async e => {
    e.preventDefault();
    const feelings = document.getElementById("feelings");
    const zipCode = document.getElementById("zip");
    const baseURL = `${endPoint}?zip=${zipCode.value}&appid=${apiKey}&units=imperial`;
    const response = await fetch(baseURL).then(data => data.json());

    postData(response);
    updateUI();
};

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", buttonFunction);
