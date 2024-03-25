import express from "express"; // Import the express module
import bodyParser from "body-parser"; // Import the body-parser middleware
import { dirname } from "path"; // Import the dirname function from the path module
import { fileURLToPath } from "url"; // Import the fileURLToPath function from the url module

// Get the current directory name using dirname and fileURLToPath functions
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an instance of the Express application
const app = express();

// Define the port number
const port = 3000;

// Variable to store the generated band name
var bandName= "";

// Use the body-parser middleware to parse data from the form
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware function to generate the band name
function bandNameGenerator(req, res, next) {
  console.log(req.body); // Log the data received from the form
  bandName = req.body["street"] + req.body["pet"]; // Generate the band name based on form data
  next(); // Call the next middleware in the stack
}

// Use the bandNameGenerator middleware
app.use(bandNameGenerator);

// Handle GET requests to the root URL ("/")
app.get("/", (req, res) =>{
  // Send the index.html file as a response
  res.sendFile(__dirname + "/public/index.html");
});

// Handle POST requests to the "/submit" endpoint
app.post("/submit", (req, res) => {
  // Send a response containing the generated band name
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// Start the server and listen for incoming connections on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
