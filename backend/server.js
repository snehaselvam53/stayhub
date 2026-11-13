// Step 1: Import Express
const express = require("express");

// Step 2: Create our backend application
const app = express();

// Step 3: Choose a port number
const port = 5000;

// Step 4: Create a simple API
app.get("/", function (request, response) {

    response.send("Welcome to Hotel Management System");

});

// Step 5: Start the server
app.listen(port, function () {

    console.log("Server started successfully");
    console.log("Server is running on port " + port);

});