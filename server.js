// Setup empty JS object to act as endpoint for all routes
let projectData = {};

/* Dependencies */
// Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Callback to debug
// Initialize all route with a callback function
const postRoute = (req, res) => {
    const serverData = {
        temp: req.body.temp,
        date: req.body.date,
        feelsLiks: req.body.feelsLiks,
        humidity: req.body.humidity,
        pressure: req.body.pressure,
        tempMax: req.body.tempMax,
        tempMin: req.body.tempMin,
        visibility: req.body.visibility,
        windSpeed: req.body.windSpeed,
    };
    projectData = serverData;
};

// Callback function to complete GET '/all'
app.get("/all", (req, res) => res.send(projectData));

// Post Route
app.post("/add", postRoute);

// Spin up the server
const port = `7000`;
app.listen(port, () => console.log(`Server is up and running on port: http://localhost:${port}`));