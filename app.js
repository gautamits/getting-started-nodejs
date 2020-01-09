var express = require('express');
var app = express();
var cities = { cities: ["Amsterdam", "Berlin", "New York", "San Francisco", "Tokyo"] }
const fakelog = require('./fakelog.json')
var logIndex = 0

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
    if (logIndex >= fakelog.length) {
        logIndex = 0;
    }
    console.log(logIndex, fakelog[logIndex].data.result.content)
    logIndex += 1;
}, 10000);
function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = app;
