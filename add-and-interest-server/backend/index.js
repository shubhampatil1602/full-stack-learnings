const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the API!" });
});

// Add
app.get("/add", (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.send(sum.toString());
});

// Interest
app.get("/interest", (req, res) => {
  const { principle, rate, time } = req.query;
  const interest =
    (parseInt(principle) * parseInt(rate) * parseInt(time)) / 100;
  const total = parseInt(principle) + parseInt(interest);
  res.send({
    total: total,
    interest: interest,
  });
});

app.listen(3000, () => console.log("Listening at port 3000"));
