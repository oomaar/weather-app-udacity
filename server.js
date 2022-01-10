// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express();

/* Dependencies */
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
// Callback function to complete GET '/all'
app.get("/all", (req, res) => res.send(projectData));

// Post Route
app.post("/add", (req, res) => {
    const serverData = {
        temp: req.body.temp,
        date: req.body.date
    };
    projectData = serverData;
    console.log("🚀 ~ file: server.js ~ line 35 ~ app.post ~ projectData", projectData);
});

// Spin up the server
const port = `7000`;
app.listen(port, () => console.log(`Server is up and running on port: http://localhost:${port}`));