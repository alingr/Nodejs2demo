var express = require('express');
var app = express();
var todayDate = require("./utils/todayDate").getTodayDate();
var cars = [];

cars.push("A 170");
cars.push("B 170");
cars.push("ML 230");

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

console.log(todayDate);

app.get("/", function(req, res){
    res.render('index', { todayDate : todayDate});
});

app.get("/about", function(req, res){
    res.render('about', { cars: cars });
});

app.listen(8080);
console.log('app is running on port 8080');