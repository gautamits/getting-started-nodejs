var express = require('express');
var app = express();
const fs = require('fs')
var cities = { cities: ["Amsterdam", "Berlin", "New York", "San Francisco", "Tokyo"] }
fs.readFile('apache_logs_shortened', 'utf-8', (err, data) => {
    console.log(data)

})

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
//const interval=setInterval(function(logIndex) {
//    if (logIndex >= fakelog.length) {
//	    clearInterval(interval)
//   }
//    console.log(fakelog[logIndex].data.result.content)
//    logIndex += 1;
//}, 100, logIndex);
//for(var i=0;i < fakelog.length; i++){
//	console.log(fakelog[i])
//}
function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = app;