import express from "express"; // Import the express module
import { dirname } from "path"; // Import the dirname function from the path module
import { fileURLToPath } from "url"; // Import the fileURLToPath function from the url module
import bodyParser from "body-parser"; // Import the body-parser middleware

const __dirname = dirname(fileURLToPath(import.meta.url)); // Get the current directory name using dirname and fileURLToPath functions

const app = express(); // Create an instance of the Express application
const port = 3000; // Define the port number

// Use the body-parser middleware to parse the data from the form
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET requests to the root URL ("/")
app.get("/", (req, res) => {
  // Send the index.html file as a response
  res.sendFile(__dirname + "/public/index.html");
});

// Handle POST requests to the "/submit" endpoint
app.post("/submit", (req, res) => {
  // Receive the data sent by the form
  const formData = req.body;
  
  // Log the received data to the console
  console.log("Data received from the form:", formData);

  // Send a response to the client
  res.send("Data received successfully!");
});

// Start the server and listen for incoming connections on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
