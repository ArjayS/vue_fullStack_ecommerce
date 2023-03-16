import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// From Postman activating the res.send through a GET request of localhost:8000/hello
app.get("/hello", (req, res) => {
  res.send("Hello!");
});

// From Postman activating the res.send through a POST of request localhost:8000/hello
app.post("/hello", (req, res) => {
  res.send(`Hello ${req.body.name}`);
});

// From Postman activating the res.send through a GET request of localhost:8000/hello/Robert and adding a parameter of Robert
app.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}!`);
});

// Server listening to PORT = 8000
app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
