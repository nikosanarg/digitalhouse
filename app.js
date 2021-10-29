const express = require("express");
const path = require("path");

const app = express();
//const PORT = process.argv[2];
const PORT = 3030;
app.use(express.static("DH-Heroes/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/index.html"));
});

app.get("/babbage", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/babbage.html"));
});

app.get("/berners-lee", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/clarke.html"));
});

app.get("/hamilton", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/hamilton.html"));
});

app.get("/hopper", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/hopper.html"));
});

app.get("/lovelace", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/lovelace.html"));
});

app.get("/turing", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/turing.html"));
});

app.listen(PORT, () => {
  console.log("Server corriendo en el puerto " + PORT);
});
