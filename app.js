var express = require('express');
var app = express();
var todayDate = require("./utils/todayDate").getTodayDate();
var fleet = require("./utils/fleet");
var bodyParser = require('body-parser');
var cars = [];

cars.push("A 170");
cars.push("B 170");
cars.push("ML 230");

var myFleet = fleet.getFleet();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(todayDate);

app.get("/", function (req, res) {
    res.render('index', { todayDate: todayDate });
});

app.get("/about", function (req, res) {
    res.render('about', { cars: cars });
});

app.get("/fleet", function (req, res) {
    res.render('fleet', { myFleet: myFleet });
});

app.get("/contact", function (req, res) {
    res.render('contact');
});

app.post("/message", function (req, res) {
    res.render('message', { message: req.body.message});
});

app.listen(8080);
console.log('app is running on port 8080');