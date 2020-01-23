var express = require('express');
var app = express();
const faker = require('faker')

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
    console.log(faker.lorem.paragraphs())
}, 1000)

function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = app;