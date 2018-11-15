var express = require("express");
var app = express();
var bodyParser  = require("body-parser");

var router = require("./router.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

if(process.env.SERVER_HTTPS == "TRUE"){
    //HTTPS Enabled
    var fs = require("fs");
    var https = require("https");
    var privateKey  = fs.readFileSync(process.env.SSL_KEY, 'utf8');
    var certificate = fs.readFileSync(process.env.SSL_CRT, 'utf8');
    var credentials = {key: privateKey, cert: certificate};
    var server = https.createServer(credentials, app);
}else{
    //HTTPS Disabled
    var http = require("http");
    var server = http.createServer(app);
}

//Launch Server
server.listen(parseInt(process.env.SERVER_PORT) || 5200, function() {
    console.log("Drawing-Game server running...");
});