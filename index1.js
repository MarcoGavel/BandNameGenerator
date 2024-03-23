import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; // Importa body-parser

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Usa il middleware body-parser per analizzare i dati del modulo
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {

  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // Ricevi i dati inviati dal modulo
  console.log(req.body);
  const formData = req.body;

  // Esegui l'elaborazione dei dati come desideri
  console.log("Dati ricevuti dal modulo:", formData);

  // Invia una risposta al client
  res.send("Dati ricevuti correttamente!");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
