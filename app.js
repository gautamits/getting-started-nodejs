var express = require('express');
var app = express();
const faker = require('faker')
const colors = require('colors')
var textColors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "gray",
    "grey",
    "brightRed",
    "brightGreen",
    "brightYellow",
    "brightBlue",
    "brightMagenta",
    "brightCyan",
    "brightWhite",
]

var backgroundColors = [
    "bgBlack",
    "bgRed",
    "bgGreen",
    "bgYellow",
    "bgBlue",
    "bgMagenta",
    "bgCyan",
    "bgWhite",
    "bgGray",
    "bgGrey",
    "bgBrightRed",
    "bgBrightGreen",
    "bgBrightYellow",
    "bgBrightBlue",
    "bgBrightMagenta",
    "bgBrightCyan",
    "bgBrightWhite",
]

var styles = [
    "reset",
    "bold",
    "dim",
    "italic",
    "underline",
    "inverse",
    "hidden",
    "strikethrough"
]

var extras = [
    "rainbow",
    "zebra",
    "america",
    "trap",
    "random",
]

// const finalStyle = [textColors, backgroundColors, styles].map(arr => arr[Math.floor(Math.random() * arr.length)])


var cities = { cities: ["Amsterdam", "Berlin", "New York", "San Francisco", "Tokyo"] }

app.get('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});
app.get("/error", (req, res) => {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end();
})
app.get('/health', (req, res) => res.send({ "status": "OK", "time": new Date() }))
var port = process.env.PORT || 8080;
app.listen(port);
setInterval(function() {
    let finalStyle = [textColors, backgroundColors, styles].map(arr => arr[Math.floor(Math.random() * arr.length)])
	console.log(faker.lorem.sentence()[finalStyle[0]][finalStyle[1]][finalStyle[2]])
}, 10000)

function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = app;
