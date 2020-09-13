const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res) {

let num1 = Number(req.body.n1);
let num2 = Number(req.body.n2);

let result = num1 + num2;

  res.send(`The result of the calculation is ${result}.`);
});

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res) {
let weight = parseFloat(req.body.weight);
let height = parseFloat(req.body.height);

let bmi = (weight / (Math.pow(height, 2))).toFixed(1);

  res.send(`Your BMI is ${bmi}.`);
});

app.listen(port, function() {
  console.log(`Calculator app is running at http://localhost:${port}`);
});
